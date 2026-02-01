/**
 * 社区产品案例库后端服务
 * 功能：数据采集、云端同步、API服务
 */

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');
const sqlite3 = require('sqlite3').verbose();
const cron = require('node-cron');
const path = require('path');
const fs = require('fs');
const { exec, spawn } = require('child_process');
const { EventEmitter } = require('events');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static('../')); // 提供静态文件服务

// 确保数据目录存在
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// 初始化数据库
const dbPath = process.env.DB_PATH || './data/cases.db';
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('数据库连接失败:', err);
    } else {
        console.log('数据库连接成功:', dbPath);
        initDatabase();
    }
});

// 初始化云端同步（如果配置了Firebase）
let cloudSync = null;
if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_PRIVATE_KEY) {
    try {
        cloudSync = new CloudSync({
            projectId: process.env.FIREBASE_PROJECT_ID,
            privateKey: process.env.FIREBASE_PRIVATE_KEY,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL
        });
        console.log('云端同步模块已加载');
    } catch (error) {
        console.warn('云端同步初始化失败（可选功能）:', error.message);
    }
}

// 初始化数据库表
function initDatabase() {
    const tables = [
        `CREATE TABLE IF NOT EXISTS cases_basic (
            case_key TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            subtitle TEXT,
            category TEXT,
            launch_date TEXT,
            status TEXT DEFAULT 'active',
            website TEXT,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP,
            updated_at TEXT DEFAULT CURRENT_TIMESTAMP
        )`,
        `CREATE TABLE IF NOT EXISTS cases_5d_scores (
            case_key TEXT PRIMARY KEY,
            social_density REAL,
            public_degree REAL,
            governance_rigidity REAL,
            algorithm_dominance REAL,
            monetization_scale REAL,
            data_source TEXT,
            last_updated TEXT,
            FOREIGN KEY (case_key) REFERENCES cases_basic(case_key)
        )`,
        `CREATE TABLE IF NOT EXISTS cases_user_data (
            case_key TEXT PRIMARY KEY,
            total_users INTEGER,
            mau INTEGER,
            dau INTEGER,
            user_growth_rate REAL,
            avg_age REAL,
            gender_ratio_male REAL,
            retention_day1 REAL,
            retention_day7 REAL,
            retention_day30 REAL,
            data_source TEXT,
            last_updated TEXT,
            FOREIGN KEY (case_key) REFERENCES cases_basic(case_key)
        )`,
        `CREATE TABLE IF NOT EXISTS cases_business_data (
            case_key TEXT PRIMARY KEY,
            revenue_model TEXT,
            arpu REAL,
            ltv REAL,
            cac REAL,
            revenue_annual REAL,
            profit_margin REAL,
            valuation REAL,
            funding_total REAL,
            data_source TEXT,
            last_updated TEXT,
            FOREIGN KEY (case_key) REFERENCES cases_basic(case_key)
        )`,
        `CREATE TABLE IF NOT EXISTS sync_log (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            action TEXT,
            status TEXT,
            message TEXT,
            record_count INTEGER,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )`
    ];

    tables.forEach(sql => {
        db.run(sql, (err) => {
            if (err) {
                console.error('创建表失败:', err);
            }
        });
    });
}

// ==================== 数据采集API ====================

// 初始化数据采集器
const scraper = new DataScraper();

// ==================== API路由 ====================

// 健康检查
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 获取所有案例
app.get('/api/cases', (req, res) => {
    db.all("SELECT * FROM cases_basic ORDER BY updated_at DESC", (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

// 获取单个案例
app.get('/api/cases/:key', (req, res) => {
    const key = req.params.key;
    
    db.get("SELECT * FROM cases_basic WHERE case_key = ?", [key], (err, caseBasic) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        
        if (!caseBasic) {
            res.status(404).json({ error: 'Case not found' });
            return;
        }
        
        // 获取关联数据
        db.get("SELECT * FROM cases_5d_scores WHERE case_key = ?", [key], (err, d5Data) => {
            db.get("SELECT * FROM cases_user_data WHERE case_key = ?", [key], (err, userData) => {
                db.get("SELECT * FROM cases_business_data WHERE case_key = ?", [key], (err, businessData) => {
                    res.json({
                        basic: caseBasic,
                        d5: d5Data,
                        user: userData,
                        business: businessData
                    });
                });
            });
        });
    });
});

// 数据采集接口
app.post('/api/collect/:type', async (req, res) => {
    const { type } = req.params;
    const { caseKey, caseName } = req.body;
    
    try {
        let result = null;
        
        switch (type) {
            case 'user':
                result = await scraper.scrapeQuestMobile(caseName);
                if (result && result.mau) {
                    await new Promise((resolve, reject) => {
                        db.run(`INSERT OR REPLACE INTO cases_user_data 
                            (case_key, mau, dau, data_source, last_updated)
                            VALUES (?, ?, ?, ?, ?)`,
                            [caseKey, result.mau, result.dau, result.source, new Date().toISOString()],
                            (err) => {
                                if (err) reject(err);
                                else resolve();
                            });
                    });
                }
                break;
            case 'business':
                result = await scraper.scrapeEarningsReport(caseName);
                if (result && result.revenue) {
                    await new Promise((resolve, reject) => {
                        db.run(`INSERT OR REPLACE INTO cases_business_data 
                            (case_key, revenue_annual, data_source, last_updated)
                            VALUES (?, ?, ?, ?)`,
                            [caseKey, result.revenue, result.source, new Date().toISOString()],
                            (err) => {
                                if (err) reject(err);
                                else resolve();
                            });
                    });
                }
                break;
            default:
                return res.status(400).json({ error: 'Invalid collection type' });
        }
        
        res.json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ==================== 云端同步API ====================

// 上传数据到云端
app.post('/api/sync/upload', async (req, res) => {
    const { cases, d5Scores, userData, businessData } = req.body;
    
    try {
        let totalCount = 0;
        
        // 保存基础信息
        if (cases && cases.length > 0) {
            await new Promise((resolve, reject) => {
                const stmt = db.prepare(`INSERT OR REPLACE INTO cases_basic 
                    (case_key, title, subtitle, category, launch_date, status, updated_at)
                    VALUES (?, ?, ?, ?, ?, ?, ?)`);
                
                cases.forEach((row, index) => {
                    if (row.length >= 7) {
                        stmt.run(row[0], row[1], row[2], row[3], row[4], row[5] || 'active', new Date().toISOString(), (err) => {
                            if (err) console.error('插入失败:', err);
                        });
                        totalCount++;
                    }
                    if (index === cases.length - 1) {
                        stmt.finalize((err) => {
                            if (err) reject(err);
                            else resolve();
                        });
                    }
                });
            });
        }
        
        // 保存5D评分
        if (d5Scores && d5Scores.length > 0) {
            await new Promise((resolve, reject) => {
                const stmt = db.prepare(`INSERT OR REPLACE INTO cases_5d_scores 
                    (case_key, social_density, public_degree, governance_rigidity,
                     algorithm_dominance, monetization_scale, data_source, last_updated)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);
                
                d5Scores.forEach((row, index) => {
                    if (row.length >= 8) {
                        stmt.run(row[0], row[1], row[2], row[3], row[4], row[5], row[6] || 'sync', row[7] || new Date().toISOString());
                        totalCount++;
                    }
                    if (index === d5Scores.length - 1) {
                        stmt.finalize((err) => {
                            if (err) reject(err);
                            else resolve();
                        });
                    }
                });
            });
        }
        
        // 保存用户数据
        if (userData && userData.length > 0) {
            await new Promise((resolve, reject) => {
                const stmt = db.prepare(`INSERT OR REPLACE INTO cases_user_data 
                    (case_key, total_users, mau, dau, user_growth_rate, avg_age, gender_ratio_male,
                     retention_day1, retention_day7, retention_day30, data_source, last_updated)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
                
                userData.forEach((row, index) => {
                    if (row.length >= 12) {
                        stmt.run(...row);
                        totalCount++;
                    }
                    if (index === userData.length - 1) {
                        stmt.finalize((err) => {
                            if (err) reject(err);
                            else resolve();
                        });
                    }
                });
            });
        }
        
        // 保存商业数据
        if (businessData && businessData.length > 0) {
            await new Promise((resolve, reject) => {
                const stmt = db.prepare(`INSERT OR REPLACE INTO cases_business_data 
                    (case_key, revenue_model, arpu, ltv, cac, revenue_annual,
                     profit_margin, valuation, funding_total, data_source, last_updated)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
                
                businessData.forEach((row, index) => {
                    if (row.length >= 11) {
                        stmt.run(...row);
                        totalCount++;
                    }
                    if (index === businessData.length - 1) {
                        stmt.finalize((err) => {
                            if (err) reject(err);
                            else resolve();
                        });
                    }
                });
            });
        }
        
        // 如果配置了云端同步，也同步到Firebase
        if (cloudSync) {
            try {
                await cloudSync.syncToFirebase({
                    cases: cases || [],
                    d5Scores: d5Scores || [],
                    userData: userData || [],
                    businessData: businessData || []
                });
                console.log('数据已同步到Firebase');
            } catch (error) {
                console.error('Firebase同步失败:', error);
            }
        }
        
        // 记录同步日志
        db.run(`INSERT INTO sync_log (action, status, message, record_count)
                VALUES (?, ?, ?, ?)`,
                ['upload', 'success', '数据上传成功', totalCount]);
        
        res.json({ success: true, count: totalCount, message: '数据同步成功' });
    } catch (error) {
        db.run(`INSERT INTO sync_log (action, status, message)
                VALUES (?, ?, ?)`,
                ['upload', 'error', error.message]);
        
        res.status(500).json({ error: error.message });
    }
});

// 从云端下载数据
app.get('/api/sync/download', async (req, res) => {
    try {
        const source = req.query.source || 'local'; // local | firebase
        
        let result = {
            cases: [],
            d5Scores: [],
            userData: [],
            businessData: []
        };
        
        if (source === 'firebase' && cloudSync) {
            // 从Firebase拉取
            result = await cloudSync.pullFromFirebase();
        } else {
            // 从本地数据库获取
            await new Promise((resolve, reject) => {
                db.all("SELECT * FROM cases_basic", (err, cases) => {
                    if (err) return reject(err);
                    result.cases = cases.map(row => Object.values(row));
                    
                    db.all("SELECT * FROM cases_5d_scores", (err, d5Scores) => {
                        if (err) return reject(err);
                        result.d5Scores = d5Scores.map(row => Object.values(row));
                        
                        db.all("SELECT * FROM cases_user_data", (err, userData) => {
                            if (err) return reject(err);
                            result.userData = userData.map(row => Object.values(row));
                            
                            db.all("SELECT * FROM cases_business_data", (err, businessData) => {
                                if (err) return reject(err);
                                result.businessData = businessData.map(row => Object.values(row));
                                
                                result.count = result.cases.length + result.d5Scores.length + 
                                              result.userData.length + result.businessData.length;
                                resolve();
                            });
                        });
                    });
                });
            });
        }
        
        // 记录同步日志
        db.run(`INSERT INTO sync_log (action, status, message, record_count)
                VALUES (?, ?, ?, ?)`,
                ['download', 'success', `数据下载成功 (来源: ${source})`, result.count || 0]);
        
        res.json(result);
    } catch (error) {
        db.run(`INSERT INTO sync_log (action, status, message)
                VALUES (?, ?, ?)`,
                ['download', 'error', error.message]);
        
        res.status(500).json({ error: error.message });
    }
});

// 获取同步日志
app.get('/api/sync/logs', (req, res) => {
    const limit = parseInt(req.query.limit) || 50;
    
    db.all(`SELECT * FROM sync_log ORDER BY created_at DESC LIMIT ?`, [limit], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

// ==================== 服务器管理器 ====================

class ServerManager extends EventEmitter {
    constructor() {
        super();
        this.childProcess = null;
        this.logBuffer = [];
        this.maxLogLines = 1000;
        this.autoRestart = true;
        this.restartDelay = 3000;
        this.healthCheckInterval = null;
        this.logPath = path.join(__dirname, 'data', 'server.log');
        
        // 确保日志目录存在
        const logDir = path.dirname(this.logPath);
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }
    }

    async getStatus() {
        try {
            // 检查当前进程是否在运行
            const pid = process.pid;
            const running = process.pid !== undefined;
            
            return {
                running,
                pid: running ? pid : null,
                uptime: process.uptime(),
                memory: process.memoryUsage(),
                cpu: process.cpuUsage()
            };
        } catch (error) {
            return {
                running: false,
                pid: null,
                error: error.message
            };
        }
    }

    async getLogs(lines = 50) {
        try {
            if (fs.existsSync(this.logPath)) {
                const content = fs.readFileSync(this.logPath, 'utf-8');
                const logLines = content.split('\n').filter(line => line.trim());
                return logLines.slice(-lines);
            }
            return this.logBuffer.slice(-lines);
        } catch (error) {
            return this.logBuffer.slice(-lines);
        }
    }

    addLog(message, type = 'info') {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
        
        this.logBuffer.push(logEntry);
        if (this.logBuffer.length > this.maxLogLines) {
            this.logBuffer.shift();
        }
        
        // 写入文件
        try {
            fs.appendFileSync(this.logPath, logEntry + '\n');
        } catch (error) {
            console.error('写入日志失败:', error);
        }
        
        // 触发事件
        this.emit('log', { timestamp, type, message, logEntry });
    }

    startHealthCheck() {
        if (this.healthCheckInterval) {
            clearInterval(this.healthCheckInterval);
        }
        
        this.healthCheckInterval = setInterval(async () => {
            try {
                const status = await this.getStatus();
                if (!status.running && this.autoRestart) {
                    this.addLog('检测到服务异常，尝试自动重启...', 'warn');
                    // 这里可以实现自动重启逻辑
                }
            } catch (error) {
                this.addLog('健康检查失败: ' + error.message, 'error');
            }
        }, 30000); // 每30秒检查一次
    }

    stopHealthCheck() {
        if (this.healthCheckInterval) {
            clearInterval(this.healthCheckInterval);
            this.healthCheckInterval = null;
        }
    }
}

// 创建全局ServerManager实例
const serverManager = new ServerManager();
serverManager.startHealthCheck();

// ==================== 服务器控制API ====================

// 获取服务器状态
app.get('/api/server/status', async (req, res) => {
    try {
        const status = await serverManager.getStatus();
        
        res.json({
            running: status.running,
            pid: status.pid,
            uptime: status.uptime,
            memory: status.memory,
            cpu: status.cpu,
            timestamp: new Date().toISOString(),
            version: process.version,
            nodeVersion: process.version,
            platform: process.platform
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 获取服务器日志
app.get('/api/server/logs', async (req, res) => {
    try {
        const lines = parseInt(req.query.lines) || 50;
        const logs = await serverManager.getLogs(lines);
        res.json({ logs, count: logs.length });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 实时日志流（Server-Sent Events）
app.get('/api/server/logs/stream', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // 发送现有日志
    serverManager.getLogs(100).then(logs => {
        logs.forEach(log => {
            res.write(`data: ${JSON.stringify({ type: 'log', data: log })}\n\n`);
        });
    });
    
    // 监听新日志
    const logHandler = (logData) => {
        res.write(`data: ${JSON.stringify({ type: 'log', data: logData.logEntry })}\n\n`);
    };
    
    serverManager.on('log', logHandler);
    
    // 心跳保持连接
    const heartbeat = setInterval(() => {
        res.write(`data: ${JSON.stringify({ type: 'heartbeat', timestamp: new Date().toISOString() })}\n\n`);
    }, 30000);
    
    req.on('close', () => {
        serverManager.removeListener('log', logHandler);
        clearInterval(heartbeat);
        res.end();
    });
});

// 启动服务器（使用自动化脚本）
app.post('/api/server/start', async (req, res) => {
    try {
        serverManager.addLog('收到启动请求', 'info');
        
        // 先检查状态
        const status = await serverManager.getStatus();
        if (status.running) {
            serverManager.addLog('服务器已在运行', 'info');
            return res.json({ success: true, message: '服务器已在运行', pid: status.pid });
        }
        
        // 优先使用自动化脚本启动
        const autoStartScript = path.join(__dirname, 'auto_start.js');
        if (fs.existsSync(autoStartScript)) {
            serverManager.addLog('使用自动化脚本启动', 'info');
            exec(`node ${autoStartScript} start`, { cwd: __dirname }, (error, stdout, stderr) => {
                if (error) {
                    serverManager.addLog('自动化脚本启动失败: ' + error.message, 'error');
                    // 尝试直接启动
                    startServerDirectly(res);
                    return;
                }
                serverManager.addLog('服务器已通过自动化脚本启动', 'success');
                res.json({ success: true, message: '服务器已启动', output: stdout });
            });
        } else {
            // 尝试直接启动
            startServerDirectly(res);
        }
    } catch (error) {
        serverManager.addLog('启动失败: ' + error.message, 'error');
        res.status(500).json({ error: error.message });
    }
});

// 直接启动服务器（备用方案）
function startServerDirectly(res) {
    // 尝试使用PM2启动
    exec('pm2 --version', (pm2Error) => {
        if (!pm2Error) {
            const serverPath = path.join(__dirname, 'server.js');
            exec(`pm2 start ${serverPath} --name cases-backend --log ${path.join(__dirname, 'data', 'pm2.log')}`, (error, stdout, stderr) => {
                if (error) {
                    serverManager.addLog('PM2启动失败: ' + error.message, 'error');
                    res.status(500).json({ 
                        success: false,
                        error: '启动失败: ' + error.message,
                        guide: `cd ${__dirname} && npm run auto:start`
                    });
                    return;
                }
                serverManager.addLog('服务器已通过PM2启动', 'success');
                res.json({ success: true, message: '服务器已通过PM2启动', output: stdout });
            });
        } else {
            serverManager.addLog('PM2不可用，使用npm start', 'warn');
            exec(`npm start`, { cwd: __dirname }, (error, stdout, stderr) => {
                if (error) {
                    res.status(500).json({ 
                        success: false,
                        error: '启动失败: ' + error.message,
                        guide: `cd ${__dirname} && npm run auto:start`
                    });
                    return;
                }
                res.json({ success: true, message: '服务器已启动', output: stdout });
            });
        }
    });
}

// 停止服务器
app.post('/api/server/stop', async (req, res) => {
    try {
        serverManager.addLog('收到停止请求', 'info');
        
        // 优先使用自动化脚本停止
        const autoStartScript = path.join(__dirname, 'auto_start.js');
        if (fs.existsSync(autoStartScript)) {
            exec(`node ${autoStartScript} stop`, { cwd: __dirname }, (error, stdout, stderr) => {
                if (!error) {
                    serverManager.addLog('服务器已通过自动化脚本停止', 'success');
                    res.json({ success: true, message: '服务器已停止', output: stdout });
                } else {
                    // 尝试PM2停止
                    stopServerDirectly(res);
                }
            });
        } else {
            // 尝试PM2停止
            stopServerDirectly(res);
        }
    } catch (error) {
        serverManager.addLog('停止失败: ' + error.message, 'error');
        res.status(500).json({ error: error.message });
    }
});

// 直接停止服务器（备用方案）
function stopServerDirectly(res) {
    exec('pm2 stop cases-backend', (pm2Error, stdout, stderr) => {
        if (!pm2Error) {
            serverManager.addLog('服务器已通过PM2停止', 'success');
            res.json({ success: true, message: '服务器已通过PM2停止', output: stdout });
        } else {
            // 尝试直接kill端口3000的进程
            const killCmd = process.platform === 'win32' 
                ? `netstat -ano | findstr :3000 | findstr LISTENING | for /f "tokens=5" %a in ('more') do taskkill /F /PID %a`
                : `lsof -ti:3000 | xargs kill -9`;
            
            exec(killCmd, (killError, killStdout, killStderr) => {
                if (killError) {
                    serverManager.addLog('停止失败: ' + killError.message, 'error');
                    res.status(500).json({ 
                        error: '停止失败: ' + killError.message,
                        guide: `请手动停止: cd ${__dirname} && npm run auto:stop`
                    });
                } else {
                    serverManager.addLog('服务器已停止', 'success');
                    res.json({ success: true, message: '服务器已停止' });
                }
            });
        }
    });
}

// 重启服务器
app.post('/api/server/restart', async (req, res) => {
    try {
        serverManager.addLog('收到重启请求', 'info');
        
        // 优先使用自动化脚本重启
        const autoStartScript = path.join(__dirname, 'auto_start.js');
        if (fs.existsSync(autoStartScript)) {
            exec(`node ${autoStartScript} restart`, { cwd: __dirname }, (error, stdout, stderr) => {
                if (!error) {
                    serverManager.addLog('服务器已通过自动化脚本重启', 'success');
                    res.json({ success: true, message: '服务器已重启', output: stdout });
                } else {
                    // 尝试PM2重启
                    exec('pm2 restart cases-backend', (pm2Error, stdout, stderr) => {
                        if (!pm2Error) {
                            serverManager.addLog('服务器已通过PM2重启', 'success');
                            res.json({ success: true, message: '服务器已通过PM2重启', output: stdout });
                        } else {
                            serverManager.addLog('重启失败: ' + pm2Error.message, 'error');
                            res.status(500).json({ 
                                error: '重启失败: ' + pm2Error.message,
                                guide: `请手动重启: cd ${__dirname} && npm run auto:restart`
                            });
                        }
                    });
                }
            });
        } else {
            // 尝试PM2重启
            exec('pm2 restart cases-backend', (pm2Error, stdout, stderr) => {
                if (!pm2Error) {
                    serverManager.addLog('服务器已通过PM2重启', 'success');
                    res.json({ success: true, message: '服务器已通过PM2重启', output: stdout });
                } else {
                    serverManager.addLog('重启失败: ' + pm2Error.message, 'error');
                    res.status(500).json({ 
                        error: '重启失败: ' + pm2Error.message,
                        guide: `请手动重启: cd ${__dirname} && npm run auto:restart`
                    });
                }
            });
        }
    } catch (error) {
        serverManager.addLog('重启失败: ' + error.message, 'error');
        res.status(500).json({ error: error.message });
    }
});

// 获取服务器配置
app.get('/api/server/config', (req, res) => {
    res.json({
        autoRestart: serverManager.autoRestart,
        restartDelay: serverManager.restartDelay,
        maxLogLines: serverManager.maxLogLines,
        logPath: serverManager.logPath
    });
});

// 更新服务器配置
app.post('/api/server/config', (req, res) => {
    const { autoRestart, restartDelay, maxLogLines } = req.body;
    
    if (typeof autoRestart === 'boolean') {
        serverManager.autoRestart = autoRestart;
    }
    if (typeof restartDelay === 'number' && restartDelay > 0) {
        serverManager.restartDelay = restartDelay;
    }
    if (typeof maxLogLines === 'number' && maxLogLines > 0) {
        serverManager.maxLogLines = maxLogLines;
    }
    
    serverManager.addLog('配置已更新', 'info');
    res.json({ success: true, message: '配置已更新' });
});

// ==================== 定时任务 ====================

// 每天凌晨2点自动采集数据
cron.schedule('0 2 * * *', async () => {
    console.log('开始定时数据采集...');
    // 实现自动采集逻辑
});

// ==================== 启动服务 ====================

app.listen(PORT, () => {
    const startupMessage = `🚀 服务器运行在 http://localhost:${PORT}`;
    console.log(startupMessage);
    console.log(`📊 API文档: http://localhost:${PORT}/api/health`);
    
    serverManager.addLog(startupMessage, 'info');
    serverManager.addLog(`进程ID: ${process.pid}`, 'info');
    serverManager.addLog(`Node版本: ${process.version}`, 'info');
    serverManager.addLog(`平台: ${process.platform}`, 'info');
});

// 优雅关闭
process.on('SIGINT', async () => {
    console.log('正在关闭服务...');
    
    // 关闭浏览器
    if (scraper) {
        await scraper.closeBrowser();
    }
    
    // 关闭数据库
    db.close((err) => {
        if (err) {
            console.error('关闭数据库失败:', err);
        } else {
            console.log('数据库连接已关闭');
        }
        process.exit(0);
    });
});

