#!/bin/bash

# 社区产品案例库后端服务 - 自动化启动脚本
# 功能：自动启动、监控、自动重启

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PID_FILE="$SCRIPT_DIR/data/server.pid"
LOG_FILE="$SCRIPT_DIR/data/server.log"
ERROR_LOG_FILE="$SCRIPT_DIR/data/server.error.log"
MAX_RESTART_COUNT=10
RESTART_DELAY=5

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log() {
    echo -e "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

error_log() {
    echo -e "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$ERROR_LOG_FILE"
}

check_node() {
    if ! command -v node &> /dev/null; then
        error_log "${RED}错误: Node.js 未安装${NC}"
        exit 1
    fi
    log "${GREEN}Node.js 版本: $(node --version)${NC}"
}

check_dependencies() {
    if [ ! -d "$SCRIPT_DIR/node_modules" ]; then
        log "${YELLOW}依赖未安装，正在安装...${NC}"
        cd "$SCRIPT_DIR"
        npm install
        if [ $? -ne 0 ]; then
            error_log "${RED}依赖安装失败${NC}"
            exit 1
        fi
        log "${GREEN}依赖安装完成${NC}"
    fi
}

is_running() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            return 0
        else
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

start_server() {
    if is_running; then
        PID=$(cat "$PID_FILE")
        log "${YELLOW}服务器已在运行 (PID: $PID)${NC}"
        return 0
    fi

    log "${GREEN}正在启动服务器...${NC}"
    cd "$SCRIPT_DIR"
    
    # 后台运行，输出重定向到日志文件
    nohup node server.js >> "$LOG_FILE" 2>> "$ERROR_LOG_FILE" &
    PID=$!
    echo $PID > "$PID_FILE"
    
    # 等待几秒检查是否启动成功
    sleep 3
    if ps -p "$PID" > /dev/null 2>&1; then
        log "${GREEN}服务器启动成功 (PID: $PID)${NC}"
        return 0
    else
        error_log "${RED}服务器启动失败${NC}"
        rm -f "$PID_FILE"
        return 1
    fi
}

stop_server() {
    if ! is_running; then
        log "${YELLOW}服务器未运行${NC}"
        return 0
    fi

    PID=$(cat "$PID_FILE")
    log "${YELLOW}正在停止服务器 (PID: $PID)...${NC}"
    
    kill "$PID" 2>/dev/null
    sleep 2
    
    # 如果还在运行，强制杀死
    if ps -p "$PID" > /dev/null 2>&1; then
        kill -9 "$PID" 2>/dev/null
        sleep 1
    fi
    
    rm -f "$PID_FILE"
    log "${GREEN}服务器已停止${NC}"
}

restart_server() {
    log "${YELLOW}重启服务器...${NC}"
    stop_server
    sleep 2
    start_server
}

monitor_server() {
    log "${GREEN}开始监控服务器...${NC}"
    RESTART_COUNT=0
    
    while true; do
        sleep 10
        
        if ! is_running; then
            RESTART_COUNT=$((RESTART_COUNT + 1))
            if [ $RESTART_COUNT -gt $MAX_RESTART_COUNT ]; then
                error_log "${RED}达到最大重启次数 ($MAX_RESTART_COUNT)，停止监控${NC}"
                exit 1
            fi
            
            log "${YELLOW}检测到服务器未运行，尝试重启 (第 $RESTART_COUNT 次)...${NC}"
            start_server
            
            if [ $? -eq 0 ]; then
                RESTART_COUNT=0
            else
                log "${RED}重启失败，等待 ${RESTART_DELAY} 秒后重试...${NC}"
                sleep $RESTART_DELAY
            fi
        else
            RESTART_COUNT=0
        fi
    done
}

case "$1" in
    start)
        check_node
        check_dependencies
        start_server
        ;;
    stop)
        stop_server
        ;;
    restart)
        check_node
        check_dependencies
        restart_server
        ;;
    status)
        if is_running; then
            PID=$(cat "$PID_FILE")
            log "${GREEN}服务器运行中 (PID: $PID)${NC}"
            exit 0
        else
            log "${RED}服务器未运行${NC}"
            exit 1
        fi
        ;;
    monitor)
        check_node
        check_dependencies
        start_server
        monitor_server
        ;;
    *)
        echo "用法: $0 {start|stop|restart|status|monitor}"
        echo ""
        echo "命令说明:"
        echo "  start   - 启动服务器"
        echo "  stop    - 停止服务器"
        echo "  restart - 重启服务器"
        echo "  status  - 查看服务器状态"
        echo "  monitor - 启动服务器并持续监控（自动重启）"
        exit 1
        ;;
esac

exit 0











