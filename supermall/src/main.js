import App from './App.vue'
import router from "./router";
import Vue from 'vue';
import store from './store'
//将弹窗以插件的方式导入main.js
import toast from './components/common/toast'
//加入快速点击使移动端应用反应更快
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'



Vue.config.productionTip=false

//添加购物车成功的弹窗 
//添加事件总线对象
Vue.prototype.$bus=new Vue()
//安装tosat插件
Vue.use(toast)
//使用路由懒加载的插件
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})

//解决移动端300ms延迟
FastClick.attach(document.body)



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
