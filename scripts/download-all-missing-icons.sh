#!/bin/bash
# 批量下载缺失的 case 图标到 icons 文件夹（与 localIconFileMap 一致）
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ICONS="$ROOT/icons"
mkdir -p "$ICONS"

# 缺失图标：每行 "文件名 域名"（已存在的会跳过）
PAIRS="
huajiao huajiao.cn
huawei_fans huawei.com
hundun hundun.ac
huolala lalamove.com
kaola kaola.com
koubei koubei.com
geekbang time.geekbang.org
jianshu jianshu.com
jicore gcores.com
jisilu jisilu.com
oschina oschina.net
autohome autohome.com.cn
babytree babytree.com
cnblogs cnblogs.com
dxy dxy.cn
emuch emuch.net
imooc imooc.com
kuan kuan.com
lagou lagou.com
mafengwo mafengwo.com
moegirl zh.moegirl.org.cn
momo immomo.com
nga nga.cn
niuke nowcoder.com
pmcaff pmcaff.com
segmentfault segmentfault.com
shimo shimo.im
smzdm smzdm.com
tencent_docs docs.qq.com
tencent_meeting meeting.tencent.com
tianya tianya.cn
tieba tieba.baidu.com
xianyu goofish.com
xueqiu xueqiu.com
youdao_note note.youdao.com
yuepao yuepao.com
yuque yuque.com
zcool zcool.com.cn
molttalk molttalk.com
moltools moltools.fun
tongcheng lvye.com
tonghuashun 10jqka.com.cn
tuchong tuchong.com
tujia tujia.com
tuniu tuniu.com
bean wondercell.com
yanxuan you.163.com
netease_study study.163.com
acfun acfun.cn
baicizhan baicizhan.com
boss zhipin.com
caocao caocao.com
changba changba.com
daily_yoga dailyyoga.com
damai damai.cn
dazhong_dianying maoyan.com
dify dify.ai
dingdong 100.me
fastgpt fastgpt.cn
full_truck fulltruck.com
hellobike hellobike.com
hema hema.com
huaban huaban.com
huya huya.com
inke inke.com
kugou kugou.com
lanrenting lanrenting.com
liepin liepin.com
liulishuo liulishuo.com
lvmama lvmama.com
maoyan maoyan.com
meilishuo meilishuo.com
meizu_community meizu.com
migu migu.cn
mobike mobike.com
mogujie mogujie.com
mubu mubu.com
nuomi nuomi.com
qiancheng 51job.com
qianliao qianliao.com
qunar qunar.com
qyer qyer.com
runoob runoob.com
shanbay shanbay.com
soul soulapp.cn
suning suning.com
tantan tantan.cn
taopiaopiao taopiaopiao.com
tencent_ke ke.qq.com
uisdc uisdc.com
wuba 58.com
xiami xiami.com
xiaoetong xiaoe-tool.com
xiaozhu xiaozhu.com
xuetangx xuetangx.edu.cn
yiche yiche.com
yinxiang yinxiang.com
ymatou ymatou.com
zhanqi zhanqi.tv
zhaopin zhaopin.com
zhuanzhuan zhuanzhuan.com
coze_cn coze.cn
dingdong 100.me
qq_music y.qq.com
t3 t3go.cn
taocaicai taocaicai.com
xiangha xiangha.com
yizhibo yizhibo.com
mamawang mamawang.com
qingting qingting.fm
qmkg qmkg.com.cn
longzhu longzhu.com
quickdog kuaigou.com
"

download_one() {
  local name="$1"
  local domain="$2"
  local out="$ICONS/${name}.png"
  if [ -f "$out" ] && [ -s "$out" ]; then
    echo "已存在，跳过: $name.png"
    return 0
  fi
  echo "下载: $name -> $domain"
  if curl -sfL --max-time 12 -o "$out" "https://logo.clearbit.com/${domain}"; then
    if [ -s "$out" ]; then
      echo "  已保存: $out"
      return 0
    fi
    rm -f "$out"
  fi
  if curl -sfL --max-time 12 -o "$out" "https://www.google.com/s2/favicons?domain=${domain}&sz=128"; then
    if [ -s "$out" ]; then
      echo "  已保存 (favicon): $out"
      return 0
    fi
    rm -f "$out"
  fi
  echo "  下载失败: $name"
  return 0
}

echo "$PAIRS" | while read -r name domain; do
  [ -z "$name" ] && continue
  download_one "$name" "$domain" || true
done
echo "完成。"
