<template>
  <div class="commend">
    <p class="commend-title">周末去哪儿</p>
    <ul  class="commend-content">
        <router-link :to="'/detail?id='+item.id" tag="li"  v-for="item in weekendList" :key="item.id" class="item">
            <img :src="item.imgUrl">            
            <div class="item-right">
                <p class="item-right-t1">{{item.title}}</p>
                <p class="item-right-t2">{{item.desc}}</p>
            </div>
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekond',
  props:{
      weekendList:Array
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
    .commend{
        .commend-title{
        line-height: .8rem;
        //标题高度
        height:.8rem;
        //标题字体大小
        font-size: $titleCommonSize;
        background: #eee;
        //文字颜色
        color: $darkTextColor;
        margin-top: .1rem;
        padding-left:.2rem;
        }
        .commend-content{
            .item{
                display: flex;
                flex-direction: column;
                padding:.2rem .2rem 0 .2rem;
                border-bottom: 1px solid #ddd;
                img{
                    width:100%;
                }
                .item-right{
                    width:100%;
                    font-size:$fontCommonSize;
                    padding:.1rem;
                    .item-right-t1,.item-right-t2{
                        height:.6rem;
                        line-height: .6rem;
                        
                    }
                    .item-right-t2{
                        width:96%;
                        @include textHidden;
                        color:#bbb;
                    }
                    .item-right-t3{
                        padding:0 .4rem;
                        border-radius: .1rem;
                        background: #ff9300;
                        font-size:.31rem;
                    }
                }
            }
        }
    }
</style>
