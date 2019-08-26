// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/border.css'
import './assets/reset.css'
import fastClick from 'fastclick'
//引入字体文件
import './assets/iconfont.css'
//mintui的轮播
import { Swipe, SwipeItem } from 'mint-ui';
//注册轮播
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//引入轮播样式
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
fastClick.attach(document.body)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
