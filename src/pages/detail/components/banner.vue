<template>
  <div>
    <div class="banner" @click="handleBanner">
      <img class="bannerImg" src="https://imgs.qunarzz.com/vs_ceph_vs_tts/d2fd1bcb-1ce3-427e-a61c-7c0c41c2196a.jpg_r_390x260x90_733fb20e.jpg">
      <div class="bannerInfo">
        <div class="title">大连海洋馆99超刺激</div>
        <div class="titleImg">
          <span class="iconfont">&#xe6df;</span>
          45
        </div>
      </div>
    </div>
    <!-- 使用公用组件。@close是父组件接受子组件触发的事件监听 -->
    <common-gallary @close="handleClose" :img="list" v-show="showGallary"></common-gallary>
  </div>
</template>

<script>
//引入公用组件画廊。
import commonGallary from '../../../common/gallary/gallary'
export default {
  name: 'Banner',
  data(){
    return{
      //控制画廊显示与隐藏。
      showGallary:false,
      list:[
             {total:3,url:"https://imgs.qunarzz.com/vs_ceph_vs_tts/d2fd1bcb-1ce3-427e-a61c-7c0c41c2196a.jpg_r_390x260x90_733fb20e.jpg",title:1},
             {total:3,url:"https://imgs.qunarzz.com/vs_ceph_vs_tts/d2fd1bcb-1ce3-427e-a61c-7c0c41c2196a.jpg_r_390x260x90_733fb20e.jpg",title:2}
         ]
    }
  },
  components:{
    commonGallary
  },
  methods:{
    handleBanner(){
      this.showGallary=true
    },
    handleClose(){
      this.showGallary=false
    }
  }
}
</script>

<style lang="scss" scoped>
  .banner{
    overflow:hidden;
    height:0;
    padding-bottom: 55%;
    position:relative;
    .bannerImg{
      width:100%;
    }
    .bannerInfo{
      display: flex;
      position:absolute;
      bottom:0;
      left:0;
      right:0;
      height:.6rem;
      //图片底部的线性渐变。
      background:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
      line-height: .6rem;
      .title{
        
        padding:0 .4rem;
        color:#fff;
        flex:1;
        font-size:.32rem;
      }
      .titleImg{
        height:.35rem;
        line-height: .35rem;
        font-size:.18rem;
        color:#fff;
        background: rgba(42, 40, 40, 0.8);
        border-radius:.2rem;
        padding:0 .4rem;
        margin-right:.4rem;
        margin-top:.12rem;
        .iconfont{
          font-size:.18rem;
        }
      }
    }
  }
</style>
