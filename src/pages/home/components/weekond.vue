<template>
  <div class="commend">
    <p class="commend-title">周末去哪儿</p>
    <ul  class="commend-content">
        <li v-for="item in weekendList" :key="item.id" class="item">
            <img :src="item.imgUrl">            
            <div class="item-right">
                <p class="item-right-t1">{{item.title}}</p>
                <p class="item-right-t2">{{item.desc}}</p>
            </div>
        </li>
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
        //    imgList: [{
        //       id:0,
        //       title:"北京，泰国七天跟团",
        //       url:"//imgs.qunarzz.com/vs_ceph_vs_tts/ddc85133-fa85-43d3-b558-143525296312.jpg_r_390x260x90_008f833d.jpg",
        //       info:"牵手普及，pp岛快艇出海，畅快浮游，网红夜市，享受不一样的都市风光。",    
        //   },
        //   {
        //       id:1,
        //       title:"北京，泰国七天跟团",
        //       url:"https://imgs.qunarzz.com/vs_ceph_vs_tts/609f49d0-493a-435c-9af4-9220a89d6842.jpg_r_390x260x90_2a174908.jpg",
        //       info:"牵手普及，pp岛快艇出海，畅快浮游，网红夜市，享受不一样的都市风光。",    
        //   },
        //   {
        //       id:2,
        //       title:"北京，泰国七天跟团",
        //       url:"https://imgs.qunarzz.com/vs_ceph_vs_tts/cf9b8e2e-5e51-4d35-90c4-15e18b6cc498.jpg_r_390x260x90_c52a60ed.jpg",
        //       info:"牵手普及，pp岛快艇出海，畅快浮游，网红夜市，享受不一样的都市风光。",    
        //   },
        //   {
        //       id:3,
        //       title:"北京，泰国七天跟团",
        //       url:"https://imgs.qunarzz.com/vs_ceph_vs_tts/fb007c33-5570-4957-bc31-e7ddef825292.jpg_r_390x260x90_783e1095.jpg",
        //       info:"牵手普及，pp岛快艇出海，畅快浮游，网红夜市，享受不一样的都市风光。",    
        //   }]
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
