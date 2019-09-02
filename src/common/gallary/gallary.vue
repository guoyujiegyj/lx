<template>
<!--fade里的代码对应fade组件里的插槽。-->
  <Fade>
    <div class="container" @click=handleGallary>
        <mt-swipe :auto="4000" :show-indicators="true" class="swip">
            <mt-swipe-item v-for="item of img" :key="item.id">
                <img  class="swiper-img" :src="item.url">
                <span class="swiperPage">{{item.title}}/{{item.total}}</span>
            </mt-swipe-item>
        </mt-swipe> 
    </div>
  </Fade>

</template>

<script>
//引人动画组件。
import Fade from '../animation/fade'
export default {
    props:{
        img:Array
    },
    name: 'Gallary',
    components:{
        Fade
    },
    data(){
        return {
        
        }
   },
 methods:{
     handleGallary(){
         //子组件向父组件数据，传close事件。
         this.$emit('close')
     }
 }
  
}
</script>

<style lang="scss" scoped>
    .container{
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:#000;
        width:100%;
        height:100%;
        z-index:1002;
        .swip{
            padding-top:18%;
            top:100px;
            box-sizing: border-box;
        }
        .swiperPage{
            margin-top: .1rem;
            display:flex;
            justify-content: center;
            font-size: .4rem;
            color:#fff;
        }
    }
</style>
