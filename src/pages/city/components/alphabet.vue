<template>
  <ul class="list">
      <li @click="handleClick" v-for="(item,key) in city" :key=key>{{key}}</li>
  </ul>
</template>

<script>
export default {
  props:{
    city:Object
  },
  name: 'Alphabet',
  methods:{
    handleClick(e){
      //子组件向父组件传值。
      //点击字母时，触发change事件，传去参数。
      this.$emit('change',e.target.innerHTML)
      
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/varible.scss';
 .list{
     position:absolute;
     li{
         height:.45rem;
     }
     display: flex;
     flex-direction: column;
      // justify-content: center;
     top:2.5rem;
     color:$bgColor;
     
     font-size:$titleCommonSize;
     right:.2rem;
    //  f
 }
</style>
