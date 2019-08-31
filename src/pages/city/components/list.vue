<template>
  <div class="list" ref="wrapper">
      <div >
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div>
                
                </div>
                
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div>
                
                </div>
                <div class="button-wrapper">
                    <div class="button">北京</div>
                
                </div>
                <div class="button-wrapper">
                    <div class="button">北京</div>
                
                </div>
                <div class="button-wrapper">
                    <div class="button">北京</div>
                
                </div>
                <div class="button-wrapper">
                    <div class="button">北京</div>
                
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">A</div>
            <div class=item-list>
                <div class="item border-bottom">阿拉善</div>
                <div class="item border-bottom">阿拉善</div>
                <div class="item border-bottom">阿拉善</div>
                <div class="item border-bottom">阿拉善</div>
                <div class="item border-bottom">阿拉善</div>
                <div class="item border-bottom">阿拉善</div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">B</div>
            <div class=item-list>
                <div class="item border-bottom">阿拉善</div>
                <div class="item border-bottom">阿拉善</div>
                <div class="item border-bottom">阿拉善</div>
                <div class="item border-bottom">阿拉善</div>
                <div class="item border-bottom">阿拉善</div>
                <div class="item border-bottom">阿拉善</div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">C</div>
            <div class=item-list>
                <div class="item border-bottom">阿拉善</div>
                <div class="item border-bottom">阿拉善</div>
                <div class="item border-bottom">阿拉善</div>
                <div class="item border-bottom">阿拉善</div>
                <div class="item border-bottom">阿拉善</div>
                <div class="item border-bottom">阿拉善</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'List',
  //实例化scroll对象。
  mounted(){
      this.scroll=new Bscroll(this.$refs.wrapper)
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
