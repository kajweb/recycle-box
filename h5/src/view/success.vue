<template>
  <div>
      <msg title="操作成功" description="你的请求，我们已经记录。我们正在火速前往" :buttons="buttons" icon="success"></msg>
  </div>
</template>

<script>
import { Msg } from 'vux'
export default {
  components: {
Msg
  },
  data () {
    return {
      buttons: [{
        type: 'primary',
        text: '确认',
        onClick: this.go
      }]
    }
  },
  created(){

  },
  methods: {
    go(){
      this.$router.push("/index")
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
