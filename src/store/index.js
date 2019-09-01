import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//实例化一个vuex存储。
export default new Vuex.Store({
    //数据
    state:{
        city:"beijing"
    },
    mutations:{
        //state为数据。city为list.vue页面传来的。
        changeCity(state,city){
            state.city=city
        }
    }
})