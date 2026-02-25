#!/bin/bash
# 针对截图仍缺的 8 个图标：多域名、多源重试
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ICONS="$ROOT/icons"

try() {
  local name="$1"
  local domain="$2"
  [ -z "$domain" ] && return 1
  local out="$ICONS/${name}.png"
  [ -s "$out" ] && return 0
  curl -sfL --max-time 10 -o "$out" "https://www.google.com/s2/favicons?domain=${domain}&sz=128" && [ -s "$out" ] && return 0
  curl -sfL --max-time 10 -o "$out" "https://www.google.com/s2/favicons?domain=${domain}&sz=64" && [ -s "$out" ] && return 0
  rm -f "$out"
  return 1
}

download_one() {
  local name="$1"
  shift
  local out="$ICONS/${name}.png"
  if [ -s "$out" ]; then
    echo "已存在: $name"
    return 0
  fi
  echo -n "下载 $name ... "
  for domain in "$@"; do
    if try "$name" "$domain"; then
      echo "OK ($domain)"
      return 0
    fi
  done
  echo "失败"
  return 1
}

download_one xiangha    xiangha.com www.xiangha.com
download_one xiaoetong  xiaoe-tech.com xiaoeknow.com xiaoe-tool.com
download_one xiaomi_community  mi.com www.mi.com
download_one xiaomi_youpin     xiaomiyoupin.com www.xiaomiyoupin.com
download_one emuch     emuch.net www.emuch.net
download_one xiaozhu   xiaozhu.com www.xiaozhu.com
download_one xuetangx  xuetangx.edu.cn xuetangx.com www.xuetangx.edu.cn
# xiaomi_pay 使用 xiaomi_community 图标，复制即可
if [ -s "$ICONS/xiaomi_community.png" ] && [ ! -s "$ICONS/xiaomi_pay.png" ]; then
  cp "$ICONS/xiaomi_community.png" "$ICONS/xiaomi_pay.png"
  echo "已复制: xiaomi_pay <- xiaomi_community"
fi
echo "完成。"
