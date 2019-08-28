<template>
  <div class="header">
    <div class="header-left">
        <span class="iconfont">&#xe696;</span>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe62b;</span>
        请输入...</div>
    <router-link to="/city">
        <div class="header-right">
            {{city}}<span class="iconfont">&#xe62e;</span>
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props:{
      city:String
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/varible.scss';
    .header{
        height: $headerHeight;
        line-height: $headerHeight;
        display: flex;
        color:#fff;
        background-color:$bgColor;
        .header-left{
            width:.64rem;
            margin:0 .2rem;
            text-align: center;
        }
        a{
            color:#fff;
        }
        .header-input{
            flex:1;
            line-height:.6rem;
            background: #fff;
            border-radius: .1rem;
            height:.6rem;
            margin-top:.12rem;
            color:#ccc;
            margin-right:.2rem;
            padding-left:.1rem;
        }
        .header-right{
            width:1.24rem;

            text-align: center;
            .iconfont{
                font-size: .2rem;;
                margin-left: .06rem;
            }
        }
    }
</style>
