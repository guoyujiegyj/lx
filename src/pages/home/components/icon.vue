<template>
  <div class="parentIcon">
      <div class="icon">
        <div v-for="item in iconList" :key="item.id">
            <img :src="item.imgUrl" alt="">
            <span>{{item.desc}}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props:{
      iconList:Array
  },
  data(){
      return{
       
      }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/varible.scss';
@import '../../../assets/textHidden.scss';
    .parentIcon{
        >.icon{
            //内容横向布局：
            display: -webkit-box;
            //内容溢出时，内容隐藏，可以滚动。hidden内容隐藏，不能滚动。
            overflow-x: scroll;
            //手指离开屏幕时，是否立即停止。touch是不停止。
             -webkit-overflow-scrolling:touch;     
            >div{
                width:25%;
                display: flex;
                box-sizing: border-box;
                padding:.15rem 0;
                flex-direction: column;
                align-items: center;
                text-align: center;
                img{
                    width:70%;
                }
                span{
                    color:$darkTextColor;
                    // display: inline-block;
                    width:100%;
                    margin-top: .2rem;
                    font-size:$fontCommonSize;
                    //引入混合器,设置溢出文本...隐藏。
                    @include textHidden;
                    
                }
            }
         }
    }
        
    
</style>
