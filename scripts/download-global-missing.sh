#!/bin/bash
# 全局缺失图标：按 Node 比对结果，多源下载（Clearbit -> Google 128/64 -> favicon.id）
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ICONS="$ROOT/icons"
mkdir -p "$ICONS"

try_one() {
  local name="$1"
  local domain="$2"
  [ -z "$domain" ] && return 1
  local out="$ICONS/${name}.png"
  [ -s "$out" ] && return 0
  curl -sfL --max-time 10 -o "$out" "https://logo.clearbit.com/${domain}" && [ -s "$out" ] && return 0
  curl -sfL --max-time 10 -o "$out" "https://www.google.com/s2/favicons?domain=${domain}&sz=128" && [ -s "$out" ] && return 0
  curl -sfL --max-time 10 -o "$out" "https://www.google.com/s2/favicons?domain=${domain}&sz=64" && [ -s "$out" ] && return 0
  curl -sfL --max-time 10 -o "$out" "https://favicon.id/${domain}" && [ -s "$out" ] && return 0
  rm -f "$out"
  return 1
}

download_one() {
  local name="$1"
  local out="$ICONS/${name}.png"
  if [ -s "$out" ]; then
    echo "已存在: $name"
    return 0
  fi
  echo -n "下载 $name ... "
  shift
  while [ -n "$1" ]; do
    if try_one "$name" "$1"; then
      echo "OK ($1)"
      return 0
    fi
    shift
  done
  echo "失败"
  return 1
}

# 按固定顺序处理
ORDER="alipay_app baidu_group bean bilibili_pay caocao damai emuch hellobike hundun jisilu kaola kuan lanrenting longzhu lvmama mamawang mobike moltools moonshot nuomi ofo oneplus_community oppo_community qianliao qingju qmkg quickdog qyer realme_community soul t3 tantan taopiaopiao tencent_ke tianya tongcheng uisdc vip vivo_community yinxiang yizhibo ymatou yuepao yunshanfu zhanqi"
for name in $ORDER; do
  out="$ICONS/${name}.png"
  [ -s "$out" ] && continue
  case "$name" in
    alipay_app) download_one "$name" alipay.com || true ;;
    baidu_group) download_one "$name" baidu.com || true ;;
    bean) download_one "$name" wondercell.com || true ;;
    bilibili_pay) download_one "$name" bilibili.com || true ;;
    caocao) download_one "$name" caocao.com || true ;;
    damai) download_one "$name" damai.cn || true ;;
    emuch) download_one "$name" emuch.net || true ;;
    hellobike) download_one "$name" hellobike.com || true ;;
    hundun) download_one "$name" hundun.ac || true ;;
    jisilu) download_one "$name" jisilu.com || true ;;
    kaola) download_one "$name" kaola.com || true ;;
    kuan) download_one "$name" kuan.com || true ;;
    lanrenting) download_one "$name" lanrenting.com || true ;;
    longzhu) download_one "$name" longzhu.com || true ;;
    lvmama) download_one "$name" lvmama.com || true ;;
    mamawang) download_one "$name" mamawang.com || true ;;
    mobike) download_one "$name" mobike.com || true ;;
    moltools) download_one "$name" moltools.fun || true ;;
    moonshot) download_one "$name" moonshot.cn || true ;;
    nuomi) download_one "$name" nuomi.com || true ;;
    ofo) download_one "$name" ofo.com || true ;;
    oneplus_community) download_one "$name" oneplus.com || true ;;
    oppo_community) download_one "$name" oppo.com || true ;;
    qianliao) download_one "$name" qianliao.com || true ;;
    qingju) download_one "$name" qingju.com qingju.didichuxing.com || true ;;
    qmkg) download_one "$name" qmkg.com.cn kg.qq.com || true ;;
    quickdog) download_one "$name" kuaigou.com suyun.daojia.com || true ;;
    qyer) download_one "$name" qyer.com || true ;;
    realme_community) download_one "$name" realme.com || true ;;
    soul) download_one "$name" soulapp.cn || true ;;
    t3) download_one "$name" t3go.cn || true ;;
    tantan) download_one "$name" tantan.cn || true ;;
    taopiaopiao) download_one "$name" taopiaopiao.com || true ;;
    tencent_ke) download_one "$name" ke.qq.com || true ;;
    tianya) download_one "$name" tianya.cn || true ;;
    tongcheng) download_one "$name" lvye.com tongcheng.com || true ;;
    uisdc) download_one "$name" uisdc.com || true ;;
    vip) download_one "$name" vip.com || true ;;
    vivo_community) download_one "$name" vivo.com || true ;;
    yinxiang) download_one "$name" yinxiang.com evernote.com || true ;;
    yizhibo) download_one "$name" yizhibo.com || true ;;
    ymatou) download_one "$name" ymatou.com || true ;;
    yuepao) download_one "$name" yuepao.com || true ;;
    yunshanfu) download_one "$name" yunshanfu.com || true ;;
    zhanqi) download_one "$name" zhanqi.tv || true ;;
    *) ;;
  esac
done
echo "完成。"
