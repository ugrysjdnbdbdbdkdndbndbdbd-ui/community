#!/bin/bash
# 继续下载仍缺失的 11 个图标，多源多域名重试
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ICONS="$ROOT/icons"

# 仍缺失的：文件名 主域名（已成功的会跳过；以下 8 个若仍失败可稍后重试或手动放入 icons/）
MISSING="
hundun hundun.ac
kaola kaola.com
jisilu jisilu.com
babytree babytree.com
emuch emuch.net
kuan kuan.com
lagou lagou.com
tianya tianya.cn
yuepao yuepao.com
yuque yuque.com
moltools moltools.fun
"

try_download() {
  local name="$1"
  local domain="$2"
  local out="$ICONS/${name}.png"
  [ -z "$domain" ] && return 1
  # 源1: Google favicon
  curl -sfL --max-time 10 -o "$out" "https://www.google.com/s2/favicons?domain=${domain}&sz=128" && [ -s "$out" ] && return 0
  # 源2: Google 64px
  curl -sfL --max-time 10 -o "$out" "https://www.google.com/s2/favicons?domain=${domain}&sz=64" && [ -s "$out" ] && return 0
  # 源3: favicon0
  curl -sfL --max-time 10 -o "$out" "https://favicon0.com/ico/${domain}" && [ -s "$out" ] && return 0
  # 源4: favicon.id
  curl -sfL --max-time 10 -o "$out" "https://favicon.id/${domain}" && [ -s "$out" ] && return 0
  rm -f "$out"
  return 1
}

echo "$MISSING" | while read -r name domain1 domain2; do
  [ -z "$name" ] && continue
  out="$ICONS/${name}.png"
  if [ -f "$out" ] && [ -s "$out" ]; then
    echo "已存在: $name.png"
    continue
  fi
  echo -n "下载 $name ... "
  try_download "$name" "$domain1" && echo "OK ($domain1)" && continue
  [ -n "$domain2" ] && try_download "$name" "$domain2" && echo "OK ($domain2)" && continue
  # 备用域名
  case "$name" in
    hundun) try_download "$name" "hundunxueyuan.com" && echo "OK (hundunxueyuan)" && continue ;;
    kaola)  try_download "$name" "kaola.com" && echo "OK" && continue ;;
    lagou)  try_download "$name" "lg.com" && echo "OK (lg)" && continue ;;
    yuque)  try_download "$name" "www.yuque.com" && echo "OK (www)" && continue ;;
  esac
  echo "失败"
done
echo "完成。"
