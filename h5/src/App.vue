<template>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}


body {
  background-color: #fbf9fe;
}

.app{

}

.router-view {
  width: 100%;
  /*top: 46px;*/
}
</style>
