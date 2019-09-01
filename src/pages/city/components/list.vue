<template>
  <div class="list" ref="wrapper">
      <div >
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{this.$store.state.city}}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper"  v-for="item in hotCity" :key=item.id >
                    <div class="button" @click="handleChange(item.name)">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="area" v-for="(item,key) of city" :key="key" :ref="key">
            <div class="title border-topbottom" >{{key}}</div>
            <div class=item-list v-for="innerItem of item" :key="innerItem.id">
                <div class="item border-bottom" @click="handleChange(innerItem.name)">{{innerItem.name}}</div> 
            </div>
        </div>
        
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'List',
  props:{
      city:Object,
      hotCity:Array,
      //city.vue传来的letter。
      letter:String
  },
  //实例化scroll对象。
  mounted(){
      this.scroll=new Bscroll(this.$refs.wrapper)
  },
  watch:{
      //监听letter属性。只要letter数据发生变化，就会触发此方法。
      letter(){
          if(this.letter){
              //当字母改变时，获取对应字母的元素。
              const area = this.$refs[this.letter][0]
             
              //点击字母时滚动到对应区域。
               this.scroll.scrollToElement(area)
          }
      }
  },
  methods:{
      handleChange(city){
          //这里传递两个参数。在store的index.js里接收并处理。
          this.$store.commit('changeCity',city)
           this.$router.push('/')
      }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/varible.scss';
    .list{
        
        position: absolute;
        top:1.55rem;
        left:0;
        right:0;
        bottom:0;
        font-size:$fontCommonSize;
        overflow: hidden;
        .border-topbottom{
            &::before{
                border-color:#ccc;
            }
            
            &:after{
                border-color: #777;
            }
        }
        .title{
            line-height: .56rem;
            background: #eee;
            padding-left:.2rem;
            padding-top:.1rem;
            padding-bottom:.07rem;
            color:#666;
            font-size: $titleCommonSize;
        }
        .button-list{
            padding:.1rem .6rem .1rem .1rem;
            overflow: hidden;
            .button-wrapper{
                float:left;
                width:33.33%;
                .button{
                    margin:.1rem;
                    text-align: center;
                    border:.02rem solid #ccc;
                    padding:.1rem;
                    border-radius:.06rem;
                }
            }
            
        }
        .item-list{
                .item{
                    line-height:.76rem;
                    color:#666;
                    padding-left:.2rem;
                }
            }
    }
</style>
