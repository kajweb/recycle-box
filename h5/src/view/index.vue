<template>
  <div>
    <router-link to="/add">
      <img src="../assets/box.png" class="png">
    </router-link>
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
.png{
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform:  translate(-50%,-50%);
}
</style>
