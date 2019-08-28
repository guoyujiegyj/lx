<template>
  <div>
    <Header></Header>
    <Search></Search>
  </div>
</template>

<script>
//引入头部组件。
import Header from './components/header'
import Search from './components/Search'
export default {
  name: 'City',
  //注册组件
   components:{
     Header,
     Search
   }
}
</script>

<style>

</style>
