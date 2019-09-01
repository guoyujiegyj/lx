<template>
  <div>
    <Header></Header>
    <Search :city="city"></Search>
    <List :city="city" :hotCity="hotCity" :letter="letter"></List>
    <Alphabet @change="handleChange" :city="city"></Alphabet>
  </div>
</template>

<script>
//引入axios模块
import axios from 'axios'
//引入头部组件。
import Header from './components/header'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'
export default {
  name: 'City',
  //注册组件
    components:{
      Header,
      Search,
      List,
      Alphabet
    },
    data(){
      return{
        hotCity:[],
        city:{},
        //letter是子组件传来的字母
        letter:""
      }
    },
    mounted(){
      this.getData()
      
    },
    methods:{
        getData(){
          axios.get('/api/city.json')
          .then(this.getDataInfo)
        },
        getDataInfo(res){
          var res=res.data
          // console.log(res)
          if(res.ret && res.data){
              this.hotCity=res.data.hotCities
              this.city=res.data.cities
          }
        },
        handleChange(letter){
          this.letter=letter
        }
    }
}
</script>

<style>

</style>
