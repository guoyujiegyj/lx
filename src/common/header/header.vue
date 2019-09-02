<template>
  <div class="header">
    <router-link :to="headerInfo.path">
      <span class="iconfont comeback">
        &#xe696;
    </span>
    </router-link>
    <div class="title">{{headerInfo.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props:{
      headerInfo:Object
  },
  data(){
      return{
          
      }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/varible.scss';
    .header{
        position:relative;
        height: $headerHeight;
        line-height: $headerHeight;
        display: flex;
        color:#fff;
        background-color:$bgColor;
        justify-content:center;
        z-index:1001;
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
        .title{
          font-size:$fontCommonSize;
        }
    }
</style>
