<template>
  <div class="parentIcon">
      <div class="icon">
        <div v-for="item in iconList" :key="item.id">
            <img :src="item.url" alt="">
            <span>{{item.title}}</span>
        </div>
       
    </div>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  data(){
      return{
          iconList:[
              {
                  id:0,
                  url:"//s.qunarzz.com/homenode/images/touchheader/hotel.png",
                  title:"酒店"
              },
              {
                  id:1,
                  url:"//s.qunarzz.com/homenode/images/touchheader/flight.png",
                  title:"机票"
                  
              },
              {
                  id:2,
                  url:"//s.qunarzz.com/homenode/images/touchheader/package.png",
                  title:"度假"
              },
              {
                  id:3,
                  url:"//s.qunarzz.com/homenode/images/touchheader/train.png",
                  title:"火车票"
              },
              {
                  id:4,
                  url:"//s.qunarzz.com/homenode/images/touchheader/piao.png",
                  title:"景点门票"
              },
              {
                  id:5,
                  url:"//s.qunarzz.com/homenode/images/touchheader/group.png",
                  title:"特惠酒店"
              },
              
              {
                  id:6,
                  url:"//s.qunarzz.com/homenode/images/touchheader/bargainflight.png",
                  title:"查找"
              },
              {
                  id:7,
                  url:"//s.qunarzz.com/homenode/images/touchheader/piao.png",
                  title:"景点门票"
              },
              {
                  id:8,
                  url:"//s.qunarzz.com/homenode/images/touchheader/group.png",
                  title:"特惠酒得sss到店"
              },
              
              {
                  id:9,
                  url:"//s.qunarzz.com/homenode/images/touchheader/bargainflight.png",
                  title:"查找"
              }
          ]
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
