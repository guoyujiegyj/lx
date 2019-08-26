<template>
  <div>
    <Header></Header>
    <Swiper></Swiper>
    <Icon></Icon>
    
    
    
  </div>
</template>

<script>
//引入header组件
import Header from './components/header'
//引入轮播组件
import Swiper from './components/swiper'
//引入icon组件（宫格导航）
import Icon from './components/icon'


export default {
  name: 'Home',
  components:{
      //注册组件
      Header,
      Swiper,
      Icon
    
      
    }
  }
</script>

<style>

</style>
