<template class="swiper">
    <mt-swipe :auto="4000" :show-indicators="true">
       <!--循环时，这里报红，加上key即可-->
        <mt-swipe-item v-for="item in swiperList" :key="item.id">
            <img  class="swiper-img" :src="item.imgUrl">
        </mt-swipe-item>
    </mt-swipe>  
</template>

<script>
export default {
  name: 'Swiper',
  //从父组件homevue传来的数据。
  props:{
      swiperList:Array
  },
  data(){
      return{
        
      }
  }
}
</script>

<style lang="scss" scoped>
   .mint-swipe{
       height:3.2rem;
       width:100%;
   }
   .mint-swipe img{
       width:100%;
       height:100%;
   }
</style>
