<template>
  <div>
       <popup-header  title="小行动，大公益"></popup-header>
    <group title="学校信息选择">
      <cell title="我的学校" :value="dingwei"></cell>
    </group>
      <group title="个人信息选择">
      <x-input title="姓名" v-model="f.xm" placeholder="请输入你的姓名" required :max="9"></x-input>
      <x-input title="宿舍" v-model="f.xb" placeholder="请输入你的宿舍" required :max="20"></x-input>
      <x-input title="电话" v-model="f.dh" placeholder="请输入你的联系方式" required :max="20"></x-input>
       </group>
       <group title="收取选择">
        <Calendar title="空余日期" v-model="f.d" format="YYYY年MM月DD日" start-date="2018-04-01" end-date="2018-08-31" show-popup-header popup-header-title="请选择收取日期" ></Calendar>
      <checklist title="空余时间"  v-model="f.t" required :options="commonList"></checklist>
      </group>
      <group title="">
  <x-button @click.native="comfirm" type="primary">确认信息</x-button>
  </group>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell,Checklist,Calendar,PopupHeader  } from 'vux'
export default {
  components: {
    XInput,PopupHeader,
    XButton,
    Group,
    Cell,
    Checklist,
    Calendar
  },
  data () {
    return {
      f:[],
      dingwei:'正在定位...',
      commonList: [
        '早上(07:00 - 11:00)',
        '中午(11:00 - 15:00)',
        '晚上(15:00 - 19:30)',
        '夜晚(19:30 - 23:00)'
      ]
    }
  },
  created(){
    let _ = this;
    setTimeout(()=>{
      _.dingwei = "正在定位."
    },700)
    setTimeout(()=>{
      _.dingwei = "正在定位.."
    },1400)
    setTimeout(()=>{
      _.dingwei = "正在定位..."
    },2100)
    setTimeout(()=>{
      _.dingwei = "广东石油化工学院"
    },3000)
  },
  methods: {
    comfirm(){
      const _this = this // 需要注意 onCancel 和 onConfirm 的 this 指向
      if(!(_this.f.xm && _this.f.xb && _this.f.dh && _this.f.d && _this.f.t.length)){
      this.$vux.alert.show({
          title: '操作失败',
          content: '你输入的信息不完整',
        })
      return;
      }
      this.$vux.confirm.show({
          title: '确定提交？',
          content: _this.f.xm + "　同学你好，请问是否提交？",
          onCancel () {

          },
          onConfirm () {
            _this.$vux.loading.show({
              text: 'Loading'
            })
            setTimeout(() => {
              _this.$vux.loading.hide()
              _this.$router.push("/success")
            }, 1500)
          }
      })
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
