# 社区洞察全景 Akashic - 网站配置SOP

**版本：** v1.0  
**更新日期：** 2026年  
**适用版本：** 社区推导看板 v1.0

---

## 📋 目录

1. [系统要求](#系统要求)
2. [文件结构](#文件结构)
3. [部署步骤](#部署步骤)
4. [配置说明](#配置说明)
5. [环境变量](#环境变量)
6. [数据管理](#数据管理)
7. [维护操作](#维护操作)
8. [故障排查](#故障排查)
9. [性能优化](#性能优化)
10. [安全配置](#安全配置)

---

## 1. 系统要求

### 1.1 服务器要求

**最低配置：**
- CPU：1核
- 内存：512MB
- 存储：100MB
- 带宽：1Mbps

**推荐配置：**
- CPU：2核+
- 内存：1GB+
- 存储：500MB+
- 带宽：5Mbps+

### 1.2 软件要求

**Web服务器：**
- Nginx 1.18+（推荐）
- Apache 2.4+
- 或其他静态文件服务器

**浏览器支持：**
- Chrome 90+
- Firefox 88+
- Edge 90+
- Safari 14+

### 1.3 网络要求

- 需要访问外部CDN（加载Chart.js、Tailwind CSS等）
- 需要访问Google Fonts（可选）
- 需要访问Iconify API（图标服务）

---

## 2. 文件结构

```
社区产品推导/
├── 社区推导看板.html          # 主应用文件（核心文件）
├── community_cases.js          # 案例数据文件
├── wisdom_capsules.js          # 智慧胶囊数据文件
├── icons/                      # 图标资源目录
│   ├── *.png                  # 案例图标
│   └── *.jpeg                 # 其他图标
├── 用户使用说明书.md           # 用户文档
├── 网站配置SOP.md             # 本文档
└── server/                     # 服务器相关文件（可选）
    ├── server.js              # Node.js服务器
    ├── package.json           # 依赖配置
    └── README.md              # 服务器说明
```

---

## 3. 部署步骤

### 3.1 本地部署

**步骤1：准备文件**
```bash
# 确保所有文件在同一目录下
社区推导看板.html
community_cases.js
wisdom_capsules.js
icons/ (目录)
```

**步骤2：使用简单HTTP服务器**

**Python方式：**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Node.js方式：**
```bash
# 安装http-server
npm install -g http-server

# 启动服务器
http-server -p 8000
```

**步骤3：访问**
```
http://localhost:8000/社区推导看板.html
```

### 3.2 Nginx部署

**步骤1：安装Nginx**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nginx

# CentOS/RHEL
sudo yum install nginx
```

**步骤2：配置Nginx**

编辑 `/etc/nginx/sites-available/default`：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/社区产品推导;
    index 社区推导看板.html;

    location / {
        try_files $uri $uri/ /社区推导看板.html;
    }

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 启用Gzip压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_min_length 1000;
}
```

**步骤3：重启Nginx**
```bash
sudo nginx -t  # 测试配置
sudo systemctl restart nginx
```

### 3.3 Apache部署

**步骤1：安装Apache**
```bash
# Ubuntu/Debian
sudo apt install apache2

# CentOS/RHEL
sudo yum install httpd
```

**步骤2：配置Apache**

编辑 `/etc/apache2/sites-available/000-default.conf`：

```apache
<VirtualHost *:80>
    ServerName your-domain.com
    DocumentRoot /path/to/社区产品推导

    <Directory /path/to/社区产品推导>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # 启用Gzip压缩
    LoadModule deflate_module modules/mod_deflate.so
    <Location />
        SetOutputFilter DEFLATE
        SetEnvIfNoCase Request_URI \.(?:gif|jpe?g|png)$ no-gzip dont-vary
    </Location>
</VirtualHost>
```

**步骤3：启用模块并重启**
```bash
sudo a2enmod rewrite
sudo systemctl restart apache2
```

---

## 4. 配置说明

### 4.1 主文件配置

**文件：** `社区推导看板.html`

**关键配置项：**

1. **API配置**（如使用AI功能）
```javascript
// 查找 Gemini API 配置
// 如需要，设置API密钥（注意安全性）
```

2. **CDN配置**
```html
<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>
```

3. **数据文件路径**
```html
<!-- 确保路径正确 -->
<script src="community_cases.js"></script>
<script src="wisdom_capsules.js"></script>
```

### 4.2 数据文件配置

**community_cases.js：**
- 包含所有案例数据
- 格式：JavaScript对象
- 修改后需要刷新页面

**wisdom_capsules.js：**
- 包含智慧胶囊数据
- 格式：JavaScript对象
- 修改后需要刷新页面

---

## 5. 环境变量

### 5.1 浏览器环境

系统使用 `localStorage` 存储用户数据，无需额外配置。

**存储的数据：**
- 用户收藏
- 用户评分
- 用户笔记
- 最后访问页面
- 其他用户偏好

**清除数据：**
```javascript
// 在浏览器控制台执行
localStorage.clear();
```

### 5.2 服务器环境（如使用Node.js服务器）

**环境变量文件：** `.env`

```env
# 端口配置
PORT=3000

# API配置（如需要）
GEMINI_API_KEY=your-api-key-here

# 其他配置
NODE_ENV=production
```

---

## 6. 数据管理

### 6.1 更新案例数据

**步骤1：编辑数据文件**
```bash
# 编辑 community_cases.js
vim community_cases.js
# 或使用任何文本编辑器
```

**步骤2：添加新案例**
```javascript
// 在 communityCases 对象中添加
communityCases: {
    // ... 现有案例
    new_case_key: {
        title: "案例名称",
        subtitle: "案例描述",
        // ... 其他字段
    }
}
```

**步骤3：更新图标**
```bash
# 将图标文件放入 icons/ 目录
# 文件名：{case_key}.png
cp new_icon.png icons/new_case_key.png
```

**步骤4：刷新页面**
- 清除浏览器缓存
- 刷新页面查看更新

### 6.2 更新智慧胶囊

**步骤1：编辑数据文件**
```bash
vim wisdom_capsules.js
```

**步骤2：添加新胶囊**
```javascript
// 在对应section中添加
wisdomCapsules: {
    'view-logic': [
        // ... 现有胶囊
        {
            title: "新洞察",
            content: "内容...",
            // ... 其他字段
        }
    ]
}
```

### 6.3 数据备份

**手动备份：**
```bash
# 备份数据文件
cp community_cases.js community_cases.js.backup
cp wisdom_capsules.js wisdom_capsules.js.backup

# 备份整个目录
tar -czf backup-$(date +%Y%m%d).tar.gz 社区产品推导/
```

**自动备份（建议）：**
- 使用Git版本控制
- 设置定时备份脚本
- 使用云存储同步

---

## 7. 维护操作

### 7.1 日常检查

**每日检查：**
- [ ] 网站可访问性
- [ ] 页面加载速度
- [ ] 图表渲染正常
- [ ] 搜索功能正常

**每周检查：**
- [ ] 服务器资源使用情况
- [ ] 错误日志检查
- [ ] 用户反馈收集
- [ ] 数据完整性检查

### 7.2 更新操作

**更新步骤：**

1. **备份当前版本**
```bash
cp -r 社区产品推导 社区产品推导-backup-$(date +%Y%m%d)
```

2. **替换文件**
```bash
# 使用新版本文件替换
cp new_version/社区推导看板.html 社区产品推导/
```

3. **测试**
- 在测试环境验证
- 检查所有功能
- 确认数据兼容性

4. **部署**
- 备份生产环境
- 部署新版本
- 监控错误日志

### 7.3 性能监控

**监控指标：**
- 页面加载时间
- 首屏渲染时间
- 图表渲染时间
- 用户交互响应时间

**工具：**
- 浏览器开发者工具
- Google Analytics（可选）
- 服务器监控工具

---

## 8. 故障排查

### 8.1 常见问题

**问题1：页面无法加载**

**排查步骤：**
1. 检查文件路径是否正确
2. 检查文件权限
3. 检查服务器日志
4. 检查浏览器控制台错误

**解决方案：**
```bash
# 检查文件权限
ls -la 社区推导看板.html

# 修复权限
chmod 644 社区推导看板.html
```

**问题2：图表不显示**

**排查步骤：**
1. 检查网络连接（CDN访问）
2. 检查浏览器控制台错误
3. 检查Chart.js是否加载
4. 检查数据格式是否正确

**解决方案：**
```javascript
// 在浏览器控制台检查
console.log(typeof Chart); // 应该是 "function"
```

**问题3：数据不显示**

**排查步骤：**
1. 检查数据文件路径
2. 检查JavaScript语法错误
3. 检查浏览器控制台错误
4. 检查数据格式

**解决方案：**
```bash
# 检查JavaScript语法
node -c community_cases.js
```

**问题4：搜索功能不工作**

**排查步骤：**
1. 检查搜索输入框是否存在
2. 检查事件监听器
3. 检查数据是否加载
4. 检查浏览器控制台错误

### 8.2 日志查看

**Nginx日志：**
```bash
# 访问日志
tail -f /var/log/nginx/access.log

# 错误日志
tail -f /var/log/nginx/error.log
```

**Apache日志：**
```bash
# 访问日志
tail -f /var/log/apache2/access.log

# 错误日志
tail -f /var/log/apache2/error.log
```

**浏览器控制台：**
- 按F12打开开发者工具
- 查看Console标签
- 查看Network标签（网络请求）

---

## 9. 性能优化

### 9.1 前端优化

**已实施的优化：**
- ✅ 图片懒加载
- ✅ 图表延迟渲染
- ✅ 防抖和节流
- ✅ 本地存储缓存
- ✅ CDN资源加载

**建议的优化：**
- 启用Gzip压缩
- 设置静态资源缓存
- 使用Service Worker（可选）
- 代码分割（如需要）

### 9.2 服务器优化

**Nginx优化：**
```nginx
# 启用缓存
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# 启用Gzip
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 1000;
gzip_comp_level 6;
```

**Apache优化：**
```apache
# 启用压缩
<Location />
    SetOutputFilter DEFLATE
    SetEnvIfNoCase Request_URI \.(?:gif|jpe?g|png)$ no-gzip
</Location>

# 启用缓存
<FilesMatch "\.(jpg|jpeg|png|gif|js|css)$">
    ExpiresActive On
    ExpiresDefault "access plus 1 year"
</FilesMatch>
```

### 9.3 CDN优化

**使用CDN加速：**
- 将静态资源（JS、CSS）部署到CDN
- 使用地理位置最近的CDN节点
- 配置CDN缓存策略

---

## 10. 安全配置

### 10.1 基本安全

**文件权限：**
```bash
# 设置正确的文件权限
chmod 644 社区推导看板.html
chmod 644 *.js
chmod 755 icons/
```

**目录权限：**
```bash
# 禁止目录列表
# Nginx
autoindex off;

# Apache
Options -Indexes
```

### 10.2 HTTPS配置

**获取SSL证书：**
- 使用Let's Encrypt（免费）
- 使用商业证书

**Nginx HTTPS配置：**
```nginx
server {
    listen 443 ssl;
    server_name your-domain.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    # SSL优化
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    
    # ... 其他配置
}
```

### 10.3 内容安全策略（CSP）

**设置CSP头：**
```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:;";
```

### 10.4 API安全（如使用）

**保护API密钥：**
- 不要在前端代码中硬编码API密钥
- 使用环境变量
- 使用后端代理API请求

---

## 11. 备份与恢复

### 11.1 备份策略

**备份内容：**
- HTML文件
- JavaScript数据文件
- 图标资源
- 配置文件

**备份频率：**
- 每日自动备份（建议）
- 更新前手动备份（必须）

**备份位置：**
- 本地备份
- 云存储备份（推荐）

### 11.2 恢复操作

**步骤1：停止服务**
```bash
# Nginx
sudo systemctl stop nginx

# Apache
sudo systemctl stop apache2
```

**步骤2：恢复文件**
```bash
# 解压备份
tar -xzf backup-20260101.tar.gz

# 恢复文件
cp -r backup-20260101/* /path/to/社区产品推导/
```

**步骤3：重启服务**
```bash
# Nginx
sudo systemctl start nginx

# Apache
sudo systemctl start apache2
```

---

## 12. 版本管理

### 12.1 Git版本控制

**初始化仓库：**
```bash
git init
git add .
git commit -m "Initial commit"
```

**创建版本标签：**
```bash
git tag -a v1.0 -m "Version 1.0"
git push origin v1.0
```

### 12.2 发布流程

1. **开发环境测试**
2. **创建发布分支**
3. **合并到主分支**
4. **创建版本标签**
5. **部署到生产环境**

---

## 13. 监控与告警

### 13.1 监控指标

**系统监控：**
- CPU使用率
- 内存使用率
- 磁盘使用率
- 网络带宽

**应用监控：**
- 页面加载时间
- 错误率
- 用户访问量
- API响应时间（如使用）

### 13.2 告警设置

**告警条件：**
- 服务器资源超过80%
- 错误率超过1%
- 页面加载时间超过5秒
- 服务不可用

---

## 14. 联系与支持

**技术支持：**
- 查看项目文档
- 提交Issue
- 查看错误日志

**更新通知：**
- 关注项目更新
- 查看更新日志

---

**© 2026 社区洞察全景 Akashic. All Rights Reserved.**









