<template>
  <div>
    <Header></Header>
    <Search></Search>
    <List></List>
    <Alphabet></Alphabet>
  </div>
</template>

<script>
//引入头部组件。
import Header from './components/header'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'
export default {
  name: 'City',
  //注册组件
   components:{
     Header,
     Search,
     List,
     Alphabet
   }
}
</script>

<style>

</style>
