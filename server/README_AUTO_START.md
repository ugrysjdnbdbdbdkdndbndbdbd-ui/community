# 自动化启动脚本使用指南

## 📋 概述

提供了两种自动化启动脚本，用于自动启动、监控和重启后端服务：

1. **Node.js版本** (`auto_start.js`) - 跨平台，推荐使用
2. **Shell脚本版本** (`auto_start.sh`) - Linux/Mac专用

## 🚀 快速开始

### 使用npm命令（推荐）

```bash
# 启动并监控（自动重启）
npm run auto

# 仅启动
npm run auto:start

# 停止
npm run auto:stop

# 重启
npm run auto:restart

# 查看状态
npm run auto:status
```

### 使用Node.js脚本

```bash
# 启动并监控（自动重启）
node auto_start.js monitor

# 仅启动
node auto_start.js start

# 停止
node auto_start.js stop

# 重启
node auto_start.js restart

# 查看状态
node auto_start.js status
```

### 使用Shell脚本（Linux/Mac）

```bash
# 添加执行权限（首次运行）
chmod +x auto_start.sh

# 启动并监控（自动重启）
./auto_start.sh monitor

# 仅启动
./auto_start.sh start

# 停止
./auto_start.sh stop

# 重启
./auto_start.sh restart

# 查看状态
./auto_start.sh status
```

## ✨ 功能特性

### 自动监控模式 (`monitor`)

- ✅ 自动检测服务状态
- ✅ 服务异常时自动重启
- ✅ 最多重启10次（防止无限重启）
- ✅ 自动检查依赖
- ✅ 日志记录到文件

### 启动服务 (`start`)

- ✅ 检查Node.js环境
- ✅ 自动安装依赖（如果缺失）
- ✅ 后台运行服务
- ✅ 保存进程ID到文件

### 停止服务 (`stop`)

- ✅ 优雅停止（SIGTERM）
- ✅ 强制停止（如果必要）
- ✅ 清理PID文件

### 重启服务 (`restart`)

- ✅ 先停止再启动
- ✅ 确保服务干净重启

### 查看状态 (`status`)

- ✅ 检查服务是否运行
- ✅ 显示进程ID
- ✅ 返回退出码（0=运行中，1=未运行）

## 📁 文件结构

```
server/
├── auto_start.js          # Node.js自动化脚本
├── auto_start.sh          # Shell自动化脚本
├── server.js              # 后端服务主文件
├── data/                  # 数据目录（自动创建）
│   ├── server.pid         # 进程ID文件
│   ├── server.log         # 日志文件
│   └── server.error.log   # 错误日志文件
└── package.json           # npm配置（包含自动化命令）
```

## 🔧 配置选项

可以在 `auto_start.js` 中修改以下配置：

```javascript
const MAX_RESTART_COUNT = 10;      // 最大重启次数
const RESTART_DELAY = 5000;        // 重启延迟（毫秒）
const CHECK_INTERVAL = 10000;      // 检查间隔（毫秒）
```

## 📝 日志

所有日志都会记录到：
- `data/server.log` - 标准日志
- `data/server.error.log` - 错误日志

日志包含时间戳和详细信息。

## 🛠️ 故障排查

### 服务无法启动

1. 检查Node.js是否安装：`node --version`
2. 检查依赖是否安装：`npm install`
3. 查看错误日志：`cat data/server.error.log`

### 服务不断重启

1. 检查服务代码是否有错误
2. 查看错误日志找出原因
3. 达到最大重启次数后会自动停止

### 端口被占用

```bash
# Linux/Mac
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /F /PID <PID>
```

## 💡 最佳实践

1. **生产环境**：使用 `npm run auto` 启动监控模式
2. **开发环境**：使用 `npm start` 直接启动
3. **后台运行**：可以使用 `nohup` 或 `pm2` 包装监控脚本
4. **系统服务**：可以配置为systemd服务（Linux）或launchd（Mac）

## 🔄 与PM2集成

如果已安装PM2，监控脚本会自动使用PM2管理服务，提供更好的进程管理。

```bash
# 安装PM2
npm install -g pm2

# 使用PM2启动
pm2 start server.js --name cases-backend
```

## 📞 支持

如有问题，请查看日志文件或联系开发团队。











