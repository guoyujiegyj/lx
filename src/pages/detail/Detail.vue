<template>
  <div class="detail">
    <Header :headerInfo="headerInfo" class="header"></Header>
    <Banner></Banner>
      <div class="contant"></div>
  </div>
</template>

<script>
import Banner from './components/banner'
//引入公共组件header
import Header from '../../common/header/header'

export default {
  name: 'Detail',
  components:{
    Banner,
    Header
  },
  data(){
    return {
      headerInfo:{
        title:'景点详情',
        path:'/'
      }
    }
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
