<template>
  <div class="container">
      <router-link to="/" class="headerBack" tag="div">
          <span class="iconfont back">&#xe696;</span>
      </router-link>
      <div class="headerTitle"></div>
  </div>

</template>

<script>
export default {
    name:'comeBack'
  
}
</script>

<style lang="scss" scoped>
    .container{
        position:relative;
        .headerBack{
            width:.7rem;
            height:.7rem;
            line-height: .7rem;
            background: rgba(0,0,0,.5);
            border-radius: 50%;
            position:absolute;
            top:0;
            left:0;
            z-index:100;
            top:.2rem;
            left:.2rem;
            text-align: center;
            .back{
                color:#fff;
                font-size:.45rem;
            }
        }
    }
</style>
