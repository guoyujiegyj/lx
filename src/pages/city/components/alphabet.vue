<template>
  <ul class="list">
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
  </ul>
</template>

<script>
export default {
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
