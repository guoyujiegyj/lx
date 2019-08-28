<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont comeback">
        &#xe696;
    </span>
    </router-link>
    <div class="title">选择城市</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  
}
</script>

<style lang="scss" scoped>
@import '../../../assets/varible.scss';
    .header{
        position:relative;
        height: $headerHeight;
        line-height: $headerHeight;
        display: flex;
        color:#fff;
        background-color:$bgColor;
        justify-content:center;
        .comeback{
          //返回箭头是绝对定位。
            position:absolute;
            width:.64rem;
            margin:0 .2rem;
            top:0;
            left:0;
            color:#fff;
            text-align:center;
        }
        
        
        
    }
</style>
