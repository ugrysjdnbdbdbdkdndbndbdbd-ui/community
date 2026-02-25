#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
从网络下载缺失的 case 图标到本地 icons 文件夹。
逻辑与 社区推导看板.html 中的 localIconFileMap 一致：映射值为字符串时用该名，为 null 时用 caseKey。
"""
import os
import re
import urllib.request
import urllib.error
from pathlib import Path

# 项目根目录与 icons 目录
ROOT = Path(__file__).resolve().parent.parent
ICONS_DIR = ROOT / "icons"
HTML_FILE = ROOT / "社区推导看板.html"

# 从 HTML 中解析出的 localIconFileMap（与看板中一致）
# 仅列出映射表中「值为 null」或需要按 caseKey 找文件的项，以及可能缺失的项
# 其余由下面解析 HTML 得到
ICON_MAP_NULL_KEYS = [
    "discord", "devto", "facebook", "duolingo", "coursera", "eventbrite",
    "zalo", "grindr", "okcupid_lgbtq", "bumble_bff", "mirror", "devin", "v0",
    "luma_ai", "kling", "deepseek", "flowgpt", "promptbase", "openart", "seaart"
]

# 缺失图标对应的域名（用于 Clearbit / favicon 下载）
DOMAIN_MAP = {
    "discord": "discord.com",
    "devto": "dev.to",
    "facebook": "facebook.com",
    "duolingo": "duolingo.com",
    "coursera": "coursera.org",
    "eventbrite": "eventbrite.com",
    "zalo": "zalo.me",
    "grindr": "grindr.com",
    "okcupid_lgbtq": "okcupid.com",
    "bumble_bff": "bumble.com",
    "mirror": "mirror.xyz",
    "devin": "devin.ai",
    "v0": "v0.dev",
    "luma_ai": "lumalabs.ai",
    "kling": "klingai.com",
    "deepseek": "deepseek.com",
    "flowgpt": "flowgpt.com",
    "promptbase": "promptbase.com",
    "openart": "openart.ai",
    "seaart": "seaart.ai",
    "npm": "npmjs.com",
    "qiyeweixin": "work.weixin.qq.com",
    "yingxionglianmeng": "leagueoflegends.com",
    "KakaoTalk": "kakaocorp.com",
    "lizhi_fm": "lizhi.fm",
    "huxiu": "huxiu.com",
    "qdaily": "qdaily.com",
    # 国内主案例（logo.clearbit 或 favicon）
    "jd": "jd.com",
    "meituan": "meituan.com",
    "pinduoduo": "pinduoduo.com",
    "taobao": "taobao.com",
    "tmall": "tmall.com",
    "ctrip": "ctrip.com",
    "dianping": "dianping.com",
    "didi": "didi.global",
    "eleme": "ele.me",
    "netease_music": "music.163.com",
    "douyin": "douyin.com",
    "xiaohongshu": "xiaohongshu.com",
    "alipay": "alipay.com",
    "wechat": "weixin.qq.com",
    "qq": "qq.com",
    "weibo": "weibo.com",
    "zhihu": "zhihu.com",
    "bilibili": "bilibili.com",
    "kuaishou": "kuaishou.com",
    "baidu": "baidu.com",
    "tencent_video": "v.qq.com",
    "iqiyi": "iqiyi.com",
    "youku": "youku.com",
}


def parse_icon_map_from_html():
    """从 社区推导看板.html 解析 localIconFileMap，返回 { caseKey: baseName or None }"""
    text = HTML_FILE.read_text(encoding="utf-8")
    # 定位 localIconFileMap = { ... };
    start = text.find("const localIconFileMap = {")
    if start == -1:
        return {}
    start += len("const localIconFileMap = {")
    depth = 1
    i = start
    while i < len(text) and depth:
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
        i += 1
    block = text[start : i - 1]
    # 解析 'key': 'value' 或 'key': null
    pattern = r"'([^']+)':\s*(?:'([^']*)'|null)"
    result = {}
    for m in re.finditer(pattern, block):
        key, val = m.group(1), m.group(2)
        if val is not None:
            result[key] = val  # 可能含尾部空格如 "Lens_Protocol "
        else:
            result[key] = None
    return result


def get_expected_basenames(icon_map):
    """返回期望的图标 basename 集合（用于比对的规范化名 + 用于保存的原始名）。"""
    normalized_to_original = {}  # normalized -> 保存时用的名字（取第一个出现的原始名）
    for case_key, value in icon_map.items():
        if value is not None and value.strip():
            base = value.strip()
        else:
            base = case_key
        norm = base.lower().strip()
        if norm not in normalized_to_original:
            normalized_to_original[norm] = base
    return normalized_to_original


def get_existing_basenames():
    """返回 icons 目录下已有文件的 basename（小写）集合。"""
    if not ICONS_DIR.exists():
        return set()
    exts = {".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".ico", ".bmp"}
    existing = set()
    for f in ICONS_DIR.iterdir():
        if f.is_file() and f.suffix.lower() in exts:
            existing.add(f.stem.lower())
    return existing


def find_missing(icon_map):
    """
    返回缺失列表：[(caseKey, saveBasename), ...]
    saveBasename 为保存到 icons 时使用的文件名（无扩展名），与看板逻辑一致。
    """
    expected = get_expected_basenames(icon_map)
    existing = get_existing_basenames()
    missing = []
    for norm, original in expected.items():
        if norm in existing:
            continue
        # 带空格的名称（如 "Lens_Protocol "）用 original 作为保存名
        case_key = None
        for k, v in icon_map.items():
            if v == original or (v is None and k == original):
                case_key = k
                break
            if v is not None and v.strip() == original.strip():
                case_key = k
                break
        if case_key is None:
            case_key = original
        missing.append((case_key, original))
    return missing


def download_logo(domain: str, save_path: Path, size: int = 128) -> bool:
    """优先 Clearbit，失败则尝试 Google favicon。"""
    # Clearbit（若已关停可能失败）
    urls = [
        f"https://logo.clearbit.com/{domain}",
        f"https://www.google.com/s2/favicons?domain={domain}&sz={size}",
    ]
    for url in urls:
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; IconDownload/1.0)"})
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = resp.read()
            if len(data) < 100:
                continue
            save_path.write_bytes(data)
            return True
        except Exception:
            continue
    return False


def main():
    icon_map = parse_icon_map_from_html()
    if not icon_map:
        print("未能在 HTML 中解析到 localIconFileMap，请检查路径与格式。")
        return
    missing = find_missing(icon_map)
    if not missing:
        print("没有缺失的图标。")
        return
    print(f"缺失图标数量: {len(missing)}")
    ICONS_DIR.mkdir(parents=True, exist_ok=True)
    for case_key, save_basename in missing:
        # 决定域名：先 case_key，再 save_basename
        domain = DOMAIN_MAP.get(case_key) or DOMAIN_MAP.get(save_basename)
        if not domain:
            # 常见转换：驼峰/下划线 -> 域名
            d = (save_basename if save_basename else case_key).lower().replace("_", ".")
            if d.endswith(".ai"):
                domain = d
            else:
                domain = f"{d}.com"
        save_path = ICONS_DIR / f"{save_basename}.png"
        if save_path.exists():
            print(f"已存在，跳过: {save_basename}.png")
            continue
        print(f"下载: {case_key} -> {save_basename}.png (domain: {domain})")
        if download_logo(domain, save_path):
            print(f"  已保存: {save_path}")
        else:
            print(f"  下载失败: {domain}")


if __name__ == "__main__":
    main()
