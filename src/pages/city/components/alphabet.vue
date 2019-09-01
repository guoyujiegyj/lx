<template>
  <ul class="list">
      <li v-for="(item,key) in city" :key=key>{{key}}</li>
  </ul>
</template>

<script>
export default {
  props:{
    city:Object
  },
  name: 'Alphabet',

}
</script>

<style lang="scss" scoped>
@import '../../../assets/varible.scss';
 .list{
     position:absolute;
     li{
         height:.6rem;
     }
     height:100%;
     display: flex;
     flex-direction: column;
     
     justify-content: center;
     color:$bgColor;
     
     font-size:$titleCommonSize;
     right:.2rem;
    //  f
 }
</style>
