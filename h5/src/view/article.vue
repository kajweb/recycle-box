<template>
  <div>
<popup-header  :title="articel.title" class="head"></popup-header>
<popup-header  :title="articel.time"></popup-header>
<div class="c">{{articel.c}}</div>
  </div>
</template>

<script>
import { PopupHeader } from 'vux'
export default {
  components: {
    PopupHeader
  },
  data () {
    return {
      articel: []
    }
  },
  created(){
    switch(this.$route.params.id){
      case "1":
        this.articel.title="关于我们";
        this.articel.time="2018-04-01　作者：小谭";
        this.articel.c="文章没有内容。看不爽？自己写啊";
      break;
      case "2":
        this.articel.title="绿色环保";
        this.articel.time="2018-04-04　作者：小谭";
        this.articel.c="2005年，一场“环保风暴”在中国内地刮起，30个总投资达1179亿多元的在建项目被国家环保总局叫停，其中包括同属正部级单位的三峡总公司的三个项目。理由是，这些项目未经环境影响评价，属于未批先建的违法工程。 环境恶化无路可退中国的环境问题并非始自今日。早在上世纪90年代，环境污染问题就已非常严重。如淮河流域。在上世纪90年代五类水质就占到了80%，整个淮河常年就如同一条巨大的污水沟。1995年，由环境污染造成的经济损失达到1875亿元。 据中科院测算，由环境污染和生态破坏造成的损失已占到GDP总值的15%，这意味着一边是9%的经济增长，一边是15%的损失率。环境问题，已不仅仅是中国可持续发展的问题，已成为吞噬经济成果的恶魔。 中国的荒漠化土地已达267.4万多平方公里；全国18个省区的471个县、近4亿人口的耕地和家园正受到不同程度的荒漠化威胁，而且荒漠化还在以每年1万多平方公里的速度在增长。";
      break;
      case "3":
        this.articel.title="小盒子|大行动";
        this.articel.time="2018-04-06　作者：小谭";
        this.articel.c="大学生拿回快递回到宿舍，在我们的平台上登记快递盒子信息，根据平台后台数据，我们组织相关的青协人员到所在宿舍回收快递盒子。再卖盒子给快递公司或者其他商家，赚取的利润用于社会扶贫。";
      break;
      case "5":
        this.articel.title="森林保护";
        this.articel.time="2018-04-04　作者：小谭";
        this.articel.c="2005年，一场“环保风暴”在中国内地刮起，30个总投资达1179亿多元的在建项目被国家环保总局叫停，其中包括同属正部级单位的三峡总公司的三个项目。理由是，这些项目未经环境影响评价，属于未批先建的违法工程。 环境恶化无路可退中国的环境问题并非始自今日。早在上世纪90年代，环境污染问题就已非常严重。如淮河流域。在上世纪90年代五类水质就占到了80%，整个淮河常年就如同一条巨大的污水沟。1995年，由环境污染造成的经济损失达到1875亿元。 据中科院测算，由环境污染和生态破坏造成的损失已占到GDP总值的15%，这意味着一边是9%的经济增长，一边是15%的损失率。环境问题，已不仅仅是中国可持续发展的问题，已成为吞噬经济成果的恶魔。 中国的荒漠化土地已达267.4万多平方公里；全国18个省区的471个县、近4亿人口的耕地和家园正受到不同程度的荒漠化威胁，而且荒漠化还在以每年1万多平方公里的速度在增长。";
      break;
      default:
      console.log(this.$route.params.id)
        this.articel.title="文章未找到";
        this.articel.time="";
        this.articel.c="无法找到该文章";
    }
  },
  methods: {

  }
}
</script>

<style>
.c{
  margin:10px;
  text-indent:2em;
}
.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>
