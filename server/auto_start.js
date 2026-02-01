#!/usr/bin/env node

/**
 * 社区产品案例库后端服务 - 自动化启动脚本 (Node.js版本)
 * 功能：自动启动、监控、自动重启、日志管理
 */

const { spawn, exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const SCRIPT_DIR = __dirname;
const PID_FILE = path.join(SCRIPT_DIR, 'data', 'server.pid');
const LOG_FILE = path.join(SCRIPT_DIR, 'data', 'server.log');
const ERROR_LOG_FILE = path.join(SCRIPT_DIR, 'data', 'server.error.log');
const MAX_RESTART_COUNT = 10;
const RESTART_DELAY = 5000; // 5秒
const CHECK_INTERVAL = 10000; // 10秒检查一次

// 确保data目录存在
const dataDir = path.join(SCRIPT_DIR, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// 日志函数
function log(message, isError = false) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    const logFile = isError ? ERROR_LOG_FILE : LOG_FILE;
    fs.appendFileSync(logFile, logMessage + '\n');
}

// 检查Node.js
function checkNode() {
    const nodeVersion = process.version;
    log(`Node.js 版本: ${nodeVersion}`);
    return true;
}

// 检查依赖
function checkDependencies() {
    const nodeModulesPath = path.join(SCRIPT_DIR, 'node_modules');
    if (!fs.existsSync(nodeModulesPath)) {
        log('依赖未安装，正在安装...');
        return new Promise((resolve, reject) => {
            exec('npm install', { cwd: SCRIPT_DIR }, (error, stdout, stderr) => {
                if (error) {
                    log(`依赖安装失败: ${error.message}`, true);
                    reject(error);
                    return;
                }
                log('依赖安装完成');
                resolve();
            });
        });
    }
    return Promise.resolve();
}

// 检查服务器是否运行
function isRunning() {
    if (!fs.existsSync(PID_FILE)) {
        return false;
    }
    
    try {
        const pid = parseInt(fs.readFileSync(PID_FILE, 'utf-8').trim());
        // 检查进程是否存在
        try {
            process.kill(pid, 0);
            return true;
        } catch (e) {
            // 进程不存在
            fs.unlinkSync(PID_FILE);
            return false;
        }
    } catch (e) {
        return false;
    }
}

// 获取进程PID
function getPid() {
    if (fs.existsSync(PID_FILE)) {
        try {
            return parseInt(fs.readFileSync(PID_FILE, 'utf-8').trim());
        } catch (e) {
            return null;
        }
    }
    return null;
}

// 启动服务器
function startServer() {
    return new Promise((resolve, reject) => {
        if (isRunning()) {
            const pid = getPid();
            log(`服务器已在运行 (PID: ${pid})`);
            resolve(true);
            return;
        }

        log('正在启动服务器...');
        const serverPath = path.join(SCRIPT_DIR, 'server.js');
        
        // 创建日志流
        const logStream = fs.createWriteStream(LOG_FILE, { flags: 'a' });
        const errorStream = fs.createWriteStream(ERROR_LOG_FILE, { flags: 'a' });
        
        // 启动服务器进程
        const serverProcess = spawn('node', [serverPath], {
            cwd: SCRIPT_DIR,
            stdio: ['ignore', 'pipe', 'pipe'],
            detached: false
        });
        
        // 重定向输出
        serverProcess.stdout.pipe(logStream);
        serverProcess.stderr.pipe(errorStream);
        serverProcess.stdout.pipe(process.stdout);
        serverProcess.stderr.pipe(process.stderr);
        
        // 保存PID
        fs.writeFileSync(PID_FILE, serverProcess.pid.toString());
        log(`服务器启动成功 (PID: ${serverProcess.pid})`);
        
        // 等待几秒检查是否启动成功
        setTimeout(() => {
            if (serverProcess.killed || !isRunning()) {
                log('服务器启动失败', true);
                reject(new Error('服务器启动失败'));
            } else {
                resolve(true);
            }
        }, 3000);
        
        // 监听进程退出
        serverProcess.on('exit', (code, signal) => {
            log(`服务器进程退出 (code: ${code}, signal: ${signal})`);
            if (fs.existsSync(PID_FILE)) {
                fs.unlinkSync(PID_FILE);
            }
        });
    });
}

// 停止服务器
function stopServer() {
    return new Promise((resolve) => {
        if (!isRunning()) {
            log('服务器未运行');
            resolve();
            return;
        }

        const pid = getPid();
        log(`正在停止服务器 (PID: ${pid})...`);
        
        try {
            process.kill(pid, 'SIGTERM');
            
            // 等待进程退出
            let waitCount = 0;
            const checkInterval = setInterval(() => {
                waitCount++;
                if (!isRunning() || waitCount > 10) {
                    clearInterval(checkInterval);
                    if (isRunning()) {
                        // 强制杀死
                        try {
                            process.kill(pid, 'SIGKILL');
                        } catch (e) {
                            // 忽略错误
                        }
                    }
                    if (fs.existsSync(PID_FILE)) {
                        fs.unlinkSync(PID_FILE);
                    }
                    log('服务器已停止');
                    resolve();
                }
            }, 500);
        } catch (e) {
            log(`停止失败: ${e.message}`, true);
            if (fs.existsSync(PID_FILE)) {
                fs.unlinkSync(PID_FILE);
            }
            resolve();
        }
    });
}

// 重启服务器
function restartServer() {
    return stopServer().then(() => {
        return new Promise(resolve => setTimeout(resolve, 2000));
    }).then(() => {
        return startServer();
    });
}

// 监控服务器
function monitorServer() {
    log('开始监控服务器...');
    let restartCount = 0;
    
    const checkStatus = setInterval(() => {
        if (!isRunning()) {
            restartCount++;
            if (restartCount > MAX_RESTART_COUNT) {
                log(`达到最大重启次数 (${MAX_RESTART_COUNT})，停止监控`, true);
                clearInterval(checkStatus);
                process.exit(1);
                return;
            }
            
            log(`检测到服务器未运行，尝试重启 (第 ${restartCount} 次)...`);
            startServer().then(() => {
                restartCount = 0;
                log('服务器重启成功');
            }).catch((error) => {
                log(`重启失败: ${error.message}，等待 ${RESTART_DELAY / 1000} 秒后重试...`, true);
                setTimeout(() => {
                    // 继续监控
                }, RESTART_DELAY);
            });
        } else {
            restartCount = 0;
        }
    }, CHECK_INTERVAL);
    
    // 优雅退出
    process.on('SIGINT', () => {
        log('收到退出信号，停止监控...');
        clearInterval(checkStatus);
        stopServer().then(() => {
            process.exit(0);
        });
    });
    
    process.on('SIGTERM', () => {
        log('收到终止信号，停止监控...');
        clearInterval(checkStatus);
        stopServer().then(() => {
            process.exit(0);
        });
    });
}

// 主函数
async function main() {
    const command = process.argv[2] || 'help';
    
    try {
        switch (command) {
            case 'start':
                checkNode();
                await checkDependencies();
                await startServer();
                break;
                
            case 'stop':
                await stopServer();
                break;
                
            case 'restart':
                checkNode();
                await checkDependencies();
                await restartServer();
                break;
                
            case 'status':
                if (isRunning()) {
                    const pid = getPid();
                    log(`服务器运行中 (PID: ${pid})`);
                    process.exit(0);
                } else {
                    log('服务器未运行');
                    process.exit(1);
                }
                break;
                
            case 'monitor':
                checkNode();
                await checkDependencies();
                await startServer();
                monitorServer();
                break;
                
            default:
                console.log('用法: node auto_start.js {start|stop|restart|status|monitor}');
                console.log('');
                console.log('命令说明:');
                console.log('  start   - 启动服务器');
                console.log('  stop    - 停止服务器');
                console.log('  restart - 重启服务器');
                console.log('  status  - 查看服务器状态');
                console.log('  monitor - 启动服务器并持续监控（自动重启）');
                process.exit(1);
        }
    } catch (error) {
        log(`错误: ${error.message}`, true);
        process.exit(1);
    }
}

// 运行主函数
if (require.main === module) {
    main();
}

module.exports = {
    startServer,
    stopServer,
    restartServer,
    isRunning,
    getPid
};











