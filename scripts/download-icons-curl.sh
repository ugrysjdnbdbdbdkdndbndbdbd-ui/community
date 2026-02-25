#!/bin/bash
# 从 Google Favicon 下载缺失的 case 图标到 icons/
# 用法: bash scripts/download-icons-curl.sh
set -e
ICONS_DIR="$(dirname "$0")/../icons"
mkdir -p "$ICONS_DIR"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"

download() {
  local name="$1"
  local domain="$2"
  local out="$ICONS_DIR/${name}.png"
  if [[ -f "$out" ]]; then
    echo "已存在: $out"
    return 0
  fi
  echo "下载: $name <- $domain"
  curl -sSL -A "$UA" "https://www.google.com/s2/favicons?domain=${domain}&sz=128" -o "$out" || true
  if [[ -s "$out" ]]; then
    echo "  已保存: $out"
  else
    rm -f "$out"
    echo "  失败: $domain"
  fi
}

# 国内主案例（与 localIconFileMap 一致）
download jd jd.com
download meituan meituan.com
download pinduoduo pinduoduo.com
download taobao taobao.com
download tmall tmall.com
download ctrip ctrip.com
download dianping dianping.com
download didi didi.global
download eleme ele.me
download netease_music music.163.com
download douyin douyin.com
download xiaohongshu xiaohongshu.com
download alipay alipay.com
download wechat weixin.qq.com
download qq qq.com
download weibo weibo.com
download zhihu zhihu.com
download Bilibili bilibili.com
download kuaishou kuaishou.com
download douban douban.com
download feishu feishu.cn
download dingtalk dingtalk.com
download Tencent_video v.qq.com
download iqiyi iqiyi.com
download youku youku.com
echo "完成."
