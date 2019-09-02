<template>
  <div class="container">
      <div class="item border-bottom" v-for="(item,index) in list" :key="index" >
          <span class="titleIcon"></span>
          <span class="">{{item.title}}</span>
          <!--递归组件，判断如果有子对象，则继续使用当前组件。-->
          <div v-if="item.children" class="itemChildren">
               <List :list=item.children></List>
          </div>
      </div>
      
  </div>

</template>

<script>
export default {
    props:{
        list:Array
        
    },
    name:'List'
  
}
</script>

<style lang="scss" scoped>
    .container{
        .item{
            line-height: .8rem;
            font-size:.32rem;
            .titleIcon{
                display:inline-block;
                width:.36rem;
                height:.36rem;
                position:relative;
                top:.06rem;
                margin-right: .1rem;
                left:.1rem;
                background: url('//s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat;
                background-size: .4rem 3rem;
            }
            .itemChildren{
                padding-left:.5rem;
            }
        }
    }
</style>
