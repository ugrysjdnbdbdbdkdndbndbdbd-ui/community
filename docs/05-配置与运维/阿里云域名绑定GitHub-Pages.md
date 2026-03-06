# 阿里云域名绑定 GitHub Pages 操作指南

将你在阿里云购买的域名映射到本项目的 GitHub Pages 站点，用户即可通过你的域名（如 `community.yourdomain.com` 或 `yourdomain.com`）访问「社区洞察全景 Akashic」。

---

## 一、两种常见用法

| 方式 | 示例 | 推荐场景 |
|------|------|----------|
| **子域名** | `community.yourdomain.com`、`akashic.yourdomain.com` | 推荐，配置简单，用 CNAME 即可 |
| **根域名** | `yourdomain.com` | 需在阿里云配置 A 记录或「显性 URL 转发」 |

下面以**子域名**为例（如 `community.yourdomain.com`），根域名在第四节说明。

---

## 二、在 GitHub 侧配置自定义域名

### 2.1 在仓库里添加 CNAME 文件

1. 在项目**根目录**新建文件，命名为 **`CNAME`**（无后缀）。
2. 文件内容为你要使用的域名，**一行、无 `https://`、无路径**，例如：
   ```text
   community.yourdomain.com
   ```
3. 保存后提交并推送到 `main` 分支：
   ```bash
   git add CNAME
   git commit -m "docs: 添加自定义域名 CNAME"
   git push origin main
   ```

### 2.2 在 GitHub 仓库设置里填写 Custom domain

1. 打开：**https://github.com/ugrysjdnbdbdbdkdndbndbdbd-ui/community/settings/pages**
2. 找到 **Custom domain**，输入你的域名（与 CNAME 中一致），如：`community.yourdomain.com`
3. 点击 **Save**。
4. 若提示 DNS 未生效，先完成下面「阿里云 DNS 配置」，等待几分钟后再回来点 **Save** 或 **Enforce HTTPS**。
5. 建议勾选 **Enforce HTTPS**，由 GitHub 为你的域名签发免费证书。

---

## 三、在阿里云侧配置 DNS（云解析）

### 3.1 进入云解析

1. 登录 [阿里云控制台](https://www.aliyun.com/)
2. 进入 **产品** → **域名** → **云解析 DNS**（或直接搜索「云解析」）
3. 在「域名解析列表」中找到你购买的域名，点击 **解析设置**

### 3.2 添加 CNAME 记录（子域名方式）

点击 **添加记录**，按下面填写：

| 配置项 | 填写说明 |
|--------|----------|
| **记录类型** | 选择 **CNAME** |
| **主机记录** | 填子域名的前缀。例如要用 `community.yourdomain.com`，就填 **community**；用 `akashic.yourdomain.com` 就填 **akashic** |
| **解析线路** | 默认选 **默认** 即可 |
| **记录值** | **ugrysjdnbdbdbdkdndbndbdbd-ui.github.io**（不要加 `https://` 或路径） |
| **TTL** | 默认 10 分钟即可，或 600 秒 |

保存后，等待 **5 分钟～48 小时** 生效（通常几分钟内即可）。

### 3.3 验证是否生效

- 在本地执行：
  ```bash
  dig community.yourdomain.com CNAME +short
  ```
  或使用 [站长工具 - CNAME 查询](https://tool.chinaz.com/dns)，看是否解析到 `ugrysjdnbdbdbdkdndbndbdbd-ui.github.io`。
- 在 GitHub **Settings → Pages → Custom domain** 处若不再报错，说明 DNS 已生效。

---

## 四、若要用「根域名」（如 yourdomain.com）

根域名不能直接 CNAME 到 `xxx.github.io`，可选两种方式：

### 方式 A：阿里云「显性 URL 转发」（推荐，最简单）

1. 在阿里云云解析中，为根域名添加一条 **「显性 URL 转发」**（或「URL 转发」）：
   - 主机记录：`@`（表示根域名）
   - 转发地址：`https://ugrysjdnbdbdbdkdndbndbdbd-ui.github.io/community/`
2. 用户访问 `https://yourdomain.com` 会被跳转到上述 GitHub Pages 地址。
3. 注意：**GitHub 的 CNAME 仍填子域名**（如 `community.yourdomain.com`），根域名只做跳转，不填在 GitHub Custom domain 里；若你希望根域名也走 GitHub，需用下面方式 B。

### 方式 B：根域名直接解析到 GitHub（用 A 记录）

1. 在 GitHub **CNAME** 和 **Custom domain** 里填根域名：`yourdomain.com`
2. 在阿里云云解析为根域名添加 **A 记录**（GitHub Pages 官方 IP）：
   - 主机记录：`@`
   - 记录类型：**A**
   - 记录值：  
     `185.199.108.153`  
     `185.199.109.153`  
     `185.199.110.153`  
     `185.199.111.153`  
   （共 4 条 A 记录，每条一条记录值）
3. 再添加一条 **CNAME**：
   - 主机记录：`www`
   - 记录值：`ugrysjdnbdbdbdkdndbndbdbd-ui.github.io`

这样 `yourdomain.com` 和 `www.yourdomain.com` 都可指向 GitHub Pages。

---

## 五、HTTPS（推荐）

- 在 GitHub **Settings → Pages** 里勾选 **Enforce HTTPS**。
- GitHub 会为你的自定义域名自动申请 Let's Encrypt 证书，一般 DNS 生效后几分钟内即可开启。
- 若长时间未生效，检查 CNAME 和阿里云解析是否正确，并确认 80/443 未被其他服务占用。

---

## 六、小结检查清单

- [ ] 仓库根目录有 **CNAME** 文件，内容为你的域名（如 `community.yourdomain.com`）
- [ ] GitHub **Settings → Pages** 中 **Custom domain** 已填该域名并保存
- [ ] 阿里云云解析已添加 **CNAME**：主机记录 = 子域名前缀，记录值 = `ugrysjdnbdbdbdkdndbndbdbd-ui.github.io`
- [ ] 已勾选 **Enforce HTTPS**
- [ ] 等待 DNS 生效后，用浏览器访问你的域名验证

完成后，你的产品就会映射到你在阿里云购买的域名上。

---

**© 2026 社区洞察全景 Akashic**
