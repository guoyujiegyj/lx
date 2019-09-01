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
            <span class="city">{{this.$store.state.city}}</span>
            <span class="iconfont">&#xe62e;</span>
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
@import '../../../assets/varible.scss';
@import '../../../assets/textHidden.scss';
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
            display: flex;
            justify-content: space-between;
            text-align: center;
            .iconfont{
                font-size: .2rem;;
                margin-right: .1rem;
            }
            .city{
                padding:0 .1rem;
            }
        }
    }
</style>
