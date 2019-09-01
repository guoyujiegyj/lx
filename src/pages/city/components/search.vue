<template class="search">
  <div>
    <div class="search">
      <input v-model="keyword" placeholder="请输入城市或字母"> </input>
    </div>
    <!--通过keyword是否有值来控制建议列表的显示隐藏-->
    <div class="suggestBox"  v-show="keyword" ref="search">
      <ul>
      <li  v-for="item of list" class="border-bottom" :key="item.id">{{item.name}}</li>
      <!--当list为空时让其显示-->
      <li class="border-bottom" v-show="hasList">未找到匹配数据</li>
    </ul>
    </div>
  </div>
</template>

<script>

import Bscroll from 'better-scroll'
export default {
  name: 'Search',
  //接收city.vue传来的数据
  props:{
    city:Object
  },
  data(){
    return{
      keyword:'',
      list:[],
      timer:null
    }
  },
  computed:{
    hasList(){
      return !this.list.length
    }
  },
  watch:{
    //监听keyword
    keyword(){
      if(this.timer){
        clearTimeout(this.timer)
      }
      //当keyword为空时。让建议列表清空。
      if(!this.keyword){
        this.list=[]
        return;
      }
      this.timer=setTimeout(()=>{
        const result=[]
        //遍历city对象。
        for(let i in this.city){
          ///一层遍历结果是A,B,等字母。
          this.city[i].forEach(element => {
            //二层遍历结果是对象。
            if(element.spell.indexOf(this.keyword.toLowerCase())>-1 ||
             element.name.indexOf(this.keyword)>-1){
               result.push(element)
            }
          })
        }
        this.list=result
        
      },200)
    }
  },
   mounted(){
      this.scroll=new Bscroll(this.$refs.search)
  },
}
</script>

<style lang="scss" scoped>

@import '../../../assets/varible.scss';
  .search{
    background:$bgColor;
    height:.7rem;
    padding:0 .1rem;
    input{
      text-align:center;
      width:100%;
      padding:.05rem .1rem;
      border-radius:.05rem;
      box-sizing:border-box;
      font-size:$littleCommenSize;
      line-height: .5rem;
    }
  }
  .suggestBox{
    position:absolute;
    background: #eee;
    top:1.5rem;
    left:0;
    right:0;
    bottom:0;
    overflow: hidden;
    z-index:10;
    li{
      line-height:.65rem;
      padding-left:.4rem;
      color:#666;
      background:#fff;
    }
  }   
</style>
