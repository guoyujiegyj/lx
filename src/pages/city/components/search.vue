<template class="search">
  <div class="search">
   <input placeholder="请输入城市或字母"></input>
  </div>
</template>

<script>
export default {
  name: 'Search',
  
}
</script>

<style lang="scss" scoped>
@import '../../../assets/varible.scss';
  .search{
    background:$bgColor;
    height:.56rem;
    padding:0 .1rem;
    
    input{
      text-align:center;
      width:100%;
      padding:.05rem .1rem;
      border-radius:.05rem;
      box-sizing:border-box;
      font-size:$littleCommenSize;
    }
  }
        
      
</style>
