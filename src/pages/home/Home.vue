<template>
  <div>
    <Header></Header>
    <Swiper></Swiper>
  </div>
</template>

<script>
//引入header组件
import Header from './components/header'
//引入轮播组件
import Swiper from './components/swiper'
export default {
  name: 'Home',
  components:{
      //注册组件
      Header,
      Swiper
    }
  }
</script>

<style>

</style>
