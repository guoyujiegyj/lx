<template>
  <div>
    <Header></Header>
    <Swiper></Swiper>
    <Icon></Icon>
    <Commend></Commend>
    <Weekond></Weekond>
    
    
    
  </div>
</template>

<script>
//引入header组件
import Header from './components/header'
//引入轮播组件
import Swiper from './components/swiper'
//引入icon组件（宫格导航）
import Icon from './components/icon'
//引入commend组件
import Commend from './components/commend'
import Weekond from './components/weekond'


export default {
  name: 'Home',
  components:{
      //注册组件
      Header,
      Swiper,
      Icon,
      Commend,
      Weekond
      
    }
  }
</script>

<style>

</style>
