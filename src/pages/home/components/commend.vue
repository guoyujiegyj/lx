<template>
  <div class="commend">
    <p class="commend-title">热销推荐</p>
    <ul  class="commend-content">
        <li v-for="item in commendList" :key="item.id" class="item">
            <img :src="item.imgUrl">            
            <div class="item-right">
                <p class="item-right-t1">{{item.title}}</p>
                <p class="item-right-t2">{{item.desc}}</p>
                <button class="item-right-t3">查看详情</button>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Commend',
  props:{
      commendList:Array
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
        padding-left:.2rem;
        }
        .commend-content{
            .item{
                display: flex;
                height:1.8rem;
                padding:.1rem .1rem .2rem .1rem;
                border-bottom: 1px solid #ddd;
                img{
                    width:30%;
                    height:100%;
                    padding:.1rem;
                }
                .item-right{
                    width:70%;
                    font-size:$fontCommonSize;
                    padding:.1rem 0;
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
