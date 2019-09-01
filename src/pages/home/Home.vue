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
      weekendList:[]
    }
  },
  methods:{
      getHomeData(){
        axios.get('/api/index.json')
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
    this.getHomeData()
  }
}
</script>

<style>

</style>
