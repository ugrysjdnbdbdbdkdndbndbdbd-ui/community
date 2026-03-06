# 全站优化说明：交互、文案、细节、微动效与全局 Debug

**更新日期：** 2026-03

---

## 一、全局 Debug

- **逻辑：** 在非本地环境（非 localhost/127.0.0.1）下，自动静默 `console.log` / `console.debug` / `console.info` / `console.warn`，仅保留 `console.error`，减少线上控制台噪音。
- **本地或需调试时：** 在控制台执行 `localStorage.setItem('akashic_debug','1')` 后刷新，即可恢复全部 console 输出。
- **位置：** 社区推导看板 `社区推导看板.html` 内，Main App Logic 前注入；数据管理后台未改 console，可按需复用同一逻辑。

---

## 二、微动效

- **入场：** 新增 `animate-in`、`animate-in-slow`、`animate-fade-in` 及 `stagger-1`～`stagger-4` 延迟类，用于首屏或区块出现。
- **首页：** `#view-home` 增加 `animate-in`，首屏轻微上浮淡入。
- **按钮：** 全局按钮/可点击项增加 `:active` 按下态（scale 0.98），过渡 150ms。
- **Toast：** 沿用原有 `toastSlideIn` / `toastSlideOut`，未改。
- **无障碍：** 使用 `@media (prefers-reduced-motion: reduce)` 关闭上述动效，避免影响敏感用户。

---

## 三、交互与细节

- **焦点环：** 为 `input/select/textarea/button/[tabindex]` 增加 `:focus-visible` 样式，使用主题色/品牌色 3px 外描边，仅键盘聚焦时显示，不干扰鼠标点击。
- **搜索框：** `#global-search`、`#ai-chat-input` 增加 `focus-ring` 与 `aria-label`，便于无障碍与键盘导航。
- **列表/导航：** `.search-result-item`、`.nav-19d-item`、`[data-view]`、`.card`、`.feature-card` 统一过渡（transform、box-shadow、background-color），悬停反馈更一致。
- **数据管理后台：** 同步增加 `focus-visible` 与按钮 `:active` 按下态，并支持 `prefers-reduced-motion`。

---

## 四、文案优化

- **占位符：**
  - 全局搜索：`搜索案例、理论… 输入 ? 可 AI 提问`
  - 7 维筛选：`输入序号或关键词快速筛选维度…`
  - 工具箱搜索：`搜索工具箱内的功能…`
  - AI 输入框：`输入你的问题，如：B站和抖音的差异…`
- **空状态：**
  - 维度无匹配：`暂无匹配的维度，试试其他关键词`
  - 数据未加载提示：`请确认 community_cases.js 已放在同目录并已加载`
- **加载态：**
  - 统一为 `加载中，请稍候…`，并配合 `animate-pulse` 使用。

---

## 五、涉及文件

| 文件 | 修改内容 |
|------|----------|
| `社区推导看板.html` | Debug 注入、微动效 CSS、焦点环、占位符/空状态/加载文案、首页 animate-in、搜索与 AI 输入 aria-label |
| `数据管理后台.html` | 焦点环与按下态 CSS、`prefers-reduced-motion` |

---

**© 2026 社区洞察全景 Akashic**
