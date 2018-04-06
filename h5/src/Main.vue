<template>
  <div class="limit">
    <view-box ref="viewBox" body-padding-bottom="55px">
      <x-header>小盒公益</x-header>
      <router-view></router-view>
    <tabbar>
      <tabbar-item :link="{path:'/index'}">
        <img slot="icon" src="./assets/box.png">
        <span slot="label">提交小盒</span>
      </tabbar-item>
      <tabbar-item show-dot :link="{path:'/info'}">
        <img slot="icon" src="./assets/info.png">
        <span slot="label">关于我们</span>
      </tabbar-item>
    </tabbar>
  </view-box>
  </div>
</template>

<script>
import { Tabbar, TabbarItem,ViewBox,XHeader } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,ViewBox,XHeader
  },
  data () {
    return {

    }
  }
}
</script>

<style>
.limit{
	max-width: 800px;
  margin: 0px auto;
  height: 100%;
}

</style>
