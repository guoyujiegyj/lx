<template>
  <div class="banner">
    <img class="bannerImg" src="https://imgs.qunarzz.com/vs_ceph_vs_tts/d2fd1bcb-1ce3-427e-a61c-7c0c41c2196a.jpg_r_390x260x90_733fb20e.jpg">
    <div class="bannerInfo">
      <div class="title">大连海洋馆99超刺激</div>
      <div class="titleImg">
        <span class="iconfont">&#xe6df;</span>
        45
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
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
