import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// 同源策略
/*
http://localhost:8081/
  1.请求头 http://  https://  file://
  2.域名  localhost == 127.0.0.1/www.baidu.com/taobao.com
  3.端口号 :8080 :8081 :5000 :5001

  1 2 3必须一致才是同源  不同源就是跨域
*/ 
//怎么解决跨域问题
/*
 1.在根路径下建一个文件
*/ 