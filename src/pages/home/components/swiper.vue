<template class="swiper">
    <mt-swipe :auto="4000" :show-indicators="true">
       <!--循环时，这里报红，加上key即可-->
        <mt-swipe-item v-for="item in swiperList" :key="item.id">
            <img  class="swiper-img" :src="item.url">
        </mt-swipe-item>
    </mt-swipe>  
</template>

<script>
export default {
  name: 'Swiper',
  data(){
      return{
          //swiper的img数据。
         swiperList:[
             {
                 id:0,
                 url:'https://imgs.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_1190x550_15066f34.jpg'
              },
              {
                 id:1,
                 url:'https://imgs.qunarzz.com/sight/p0/1508/ca/4b627c0f2d6c7834280a630101e02edb.water.jpg_1190x550_a2c90d62.jpg'
              },
              {
                 id:2,
                 url:'https://imgs.qunarzz.com/sight/p0/1508/c3/c9f7c607b7b3ff004a84cc9cd90ae4bd.water.jpg_1190x550_ec0115f4.jpg'
              },
         ]
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
