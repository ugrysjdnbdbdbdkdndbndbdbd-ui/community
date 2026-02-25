#!/bin/bash
ICONS="$(cd "$(dirname "$0")/.." && pwd)/icons"
try() { curl -sfL --max-time 6 -o "$ICONS/$1.png" "https://favicon.id/$2" && [ -s "$ICONS/$1.png" ] && echo "OK $1"; }

while read -r name domain; do
  [ -z "$name" ] && continue
  [ -s "$ICONS/${name}.png" ] && continue
  try "$name" "$domain" || true
done << 'EOF'
bean wondercell.com
caocao caocao.com
damai damai.cn
hellobike hellobike.com
hundun hundun.ac
jisilu jisilu.com
kaola kaola.com
kuan kuan.com
lanrenting lanrenting.com
lvmama lvmama.com
mamawang mamawang.com
mobike mobike.com
moltools moltools.fun
nuomi nuomi.com
ofo ofo.com
qianliao qianliao.com
qingju qingju.didichuxing.com
t3 t3go.cn
tantan tantan.cn
taopiaopiao taopiaopiao.com
tencent_ke ke.qq.com
tianya tianya.cn
tongcheng lvye.com
yizhibo yizhibo.com
ymatou ymatou.com
yuepao yuepao.com
yunshanfu yunshanfu.com
emuch emuch.net
EOF
echo "done"
