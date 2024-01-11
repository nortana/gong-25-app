
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import {router,RouterMount} from '@/router/index.js'  //路径换成自己的
import http from '@/common/request/request.js'  //request
import Mylink from './node_modules/uni-simple-router/dist/link.vue'  





Vue.component('my-link',Mylink)
Vue.use(router)
Vue.prototype.$http = http
Vue.config.productionTip = false
Vue.prototype.baseurl= 'http://app.gong25.com'; 
//uni.setStorageSync('token', '2token_app59012A4617F9E1068503B0656AA4F7');
uni.setStorageSync('token', '3token_appF1ECD70C4DDC6154151B1B3A68F1D018');

App.mpType = 'app'

const app = new Vue({
    ...App
})

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
	RouterMount(app,router,'#app')
// #endif

app.$mount()
// #endif




// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif