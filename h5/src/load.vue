<template>
  <div class="bg" style="  background: rgb(82, 193, 75);">
  	<loading :show="show1" :text="text1"></loading>
  </div>
</template>

<script>
import { Loading } from 'vux'
export default {
  components: {
Loading
  },
  data () {
    return {
    	show1:true,
    	text1:"0%"
    }
  },
  created(){
  	this.show1change(true)
  },
  methods:{
  	show1change (val) {
      if (val) {
        tick(0, (percent) => {
          if (percent === 100) {
            this.show1 = false
            this.$router.push("/index")
            return
          }
          this.text1 = `正在加载 ${percent}%`
        })
      }
    }
  }
}
function tick (i, cb) {
  setTimeout(function () {
    i++
    cb(i)
    if (i < 100) {
      tick(i, cb)
    }
  }, 20)
}
</script>

<style>
.bg{
  height: 100%;
}
html,body{
	height: 100%
}
</style>
