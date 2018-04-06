<template>
  <div>
      <masker style="border-radius: 2px;margin: 10px;" @click.native="id(3)" >
        <div class="m-img" style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          小盒子|大行动
          <br/>
          <span class="m-time">2018-04-06</span>
        </div>
      </masker>

      <masker style="border-radius: 2px;margin: 10px; margin-top:20px;" color="4ff00" @click.native="id(2)">
        <badge text="●" class="bb"></badge>
        <div class="m-img" style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          绿色环保
          <br/>
          <span class="m-time">2018-04-04</span>
        </div>
      </masker>

      <masker style="border-radius: 2px;margin: 10px; margin-top:20px;" color="4ff00" @click.native="id(5)">
        <div class="m-img" style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          森林保护
          <br/>
          <span class="m-time">2018-04-02</span>
        </div>
      </masker>

      <masker style="border-radius: 2px;margin: 10px; margin-top:20px;" color="F9C90C" @click.native="id(1)">
        <div class="m-img" style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          关于我们
          <br/>
          <span class="m-time">2018-04-01</span>
        </div>
      </masker>
  </div>
</template>

<script>
import { Masker,Badge } from 'vux'
export default {
  components: {
    Masker,Badge
  },
  data () {
    return {

    }
  },
  created(){

  },
  methods: {
    id(e){
      this.$router.push("/article/" + e)
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
.bb{
  float: right;
  margin:5px;
}
</style>
