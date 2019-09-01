<template>
  <div>
    <Header></Header>
    <Swiper :swiperList="swiperList"></Swiper>
    <Icon :iconList="iconList"></Icon>
    <Commend :commendList="commendList"></Commend>
    <Weekond :weekendList="weekendList"></Weekond>
  </div>
</template>

<script>
//引入header组件
import Header from './components/header'
//引入轮播组件
import Swiper from './components/swiper'
//引入icon组件（宫格导航）
import Icon from './components/icon'
//引入commend组件
import Commend from './components/commend'
import Weekond from './components/weekond'
//引入axios
import axios from 'axios'

export default {
  name: 'Home',
  components:{
      //注册组件
      Header,
      Swiper,
      Icon,
      Commend,
      Weekond
  },
  data(){
    return{
      // city:"",
      swiperList:[],
      iconList:[],
      commendList:[],
      weekendList:[],
      lastCity:''
    }
  },
  methods:{
      getHomeData(){
        //请求数据，带去参数当前城市
        axios.get('/api/index.json?city='+this.$store.state.city)
        .then(this.getHomeDataSucc)
      },
      getHomeDataSucc(res){
         res=res.data
         if(res.ret && res.data){
           //整个home的数据为res.data,为各个组件数据赋值
          //  this.city=res.data.city
           this.swiperList=res.data.swiperList
           this.iconList=res.data.iconList
           this.commendList=res.data.recommendList
           this.weekendList=res.data.weekendList
         }
       
      }
  },
  mounted(){
    //页面初次挂载时。
    this.getHomeData()
    //记录初次渲染时的城市。
    this.lastCity=this.$store.state.city
  },
  //当使用《keep-alive》时会有此生命周期，在app.vue里用了keepalive.
  //每次刷新页面时都会执行此周期。
  activated(){
    //为了实现当城市没变时，不发送ajax请求，如果城市变化，则请求。
    if(this.lastCity!=this.$store.state.city){
      this.lastCity=this.$store.state.city
       this.getHomeData()
    }
  }
}
</script>

<style>

</style>
