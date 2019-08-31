<template>
  <div>
    <Header></Header>
    <Search></Search>
    <List></List>
    
  </div>
</template>

<script>
//引入头部组件。
import Header from './components/header'
import Search from './components/Search'
import List from './components/List'
export default {
  name: 'City',
  //注册组件
   components:{
     Header,
     Search,
     List
   }
}
</script>

<style>

</style>
