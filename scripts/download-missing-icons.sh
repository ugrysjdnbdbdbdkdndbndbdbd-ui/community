#!/bin/bash
# 将缺失的 case 图标从网络下载到本地 icons 文件夹
# 映射表为 null 的 caseKey 对应文件名为 caseKey.png；与 社区推导看板.html 一致
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ICONS="$ROOT/icons"
mkdir -p "$ICONS"

# 可能缺失的图标：每行 "文件名 域名"（与 localIconFileMap 一致；已存在的会跳过）
# 含映射为 null 的 caseKey 及部分国内品牌
PAIRS="
grindr grindr.com
okcupid_lgbtq okcupid.com
bumble_bff bumble.com
kling klingai.com
openart openart.ai
jd jd.com
meituan meituan.com
pinduoduo pinduoduo.com
taobao taobao.com
tmall tmall.com
ctrip ctrip.com
dianping dianping.com
didi didiglobal.com
eleme ele.me
netease_music music.163.com
eastmoney eastmoney.com
dongchedi dongchedi.com
dongqiudi dongqiudi.com
douyu douyu.com
duozhuayu duozhuayu.com
fandeng fanshu.cn
feishu_ai feishu.cn
fliggy fliggy.com
ganji ganji.com
codoon codoon.com
"

download_one() {
  local name="$1"
  local domain="$2"
  local out="$ICONS/${name}.png"
  if [ -f "$out" ]; then
    echo "已存在，跳过: $name.png"
    return 0
  fi
  echo "下载: $name -> $domain"
  if curl -sfL --max-time 10 -o "$out" "https://logo.clearbit.com/${domain}"; then
    if [ -s "$out" ]; then
      echo "  已保存: $out"
      return 0
    fi
    rm -f "$out"
  fi
  if curl -sfL --max-time 10 -o "$out" "https://www.google.com/s2/favicons?domain=${domain}&sz=128"; then
    if [ -s "$out" ]; then
      echo "  已保存 (favicon): $out"
      return 0
    fi
    rm -f "$out"
  fi
  echo "  下载失败: $name"
  return 1
}

echo "$PAIRS" | while read -r name domain; do
  [ -z "$name" ] && continue
  download_one "$name" "$domain" || true
done
echo "完成。"
