<template>
  <div class="detail">
    <comeBack v-show="comeBackShow"></comeBack>
    <Header :style="opacityStyle" :headerInfo="headerInfo"  class="header"></Header>
    <Banner></Banner>
    <div class="contant"></div>
  </div>
</template>

<script>
import Banner from './components/banner'
//引入公共组件header
import Header from '../../common/header/header'
//引入banner的返回组件。
import comeBack from './components/comeBack'

export default {
  name: 'Detail',
  components:{
    Banner,
    Header,
    comeBack
  },
  data(){
    return {
      headerInfo:{
        title:'景点详情',
        path:'/'
      },
      headerShow:false,
      comeBackShow:true,
      opacityStyle:{
        opacity:0
      }
    }
  },
  methods:{
    handleScroll(){
      //获得页面滚动距离顶部的距离。
      const top=document.documentElement.scrollTop
      //滚动时，计算透明度。
        let opacity=top/160
        this.opacityStyle={
          opacity
        }
    }
  },
  activated(){
    //为scroll绑定事件监听。
    window.addEventListener('scroll',this.handleScroll)
  }
  
}
</script>

<style lang="scss" scoped>
  .detail{
      .header{
        position:fixed;
        top:0;
        left:0;
        right:0;
        z-index:100;
      }
  }
 .contant{
   height:15rem;
 }
</style>
