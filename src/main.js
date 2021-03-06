/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-01-01 14:51:28
 * @LastEditTime: 2021-01-01 16:11:42
 * @LastEditors: mTm
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './plugins/element.js'

// 导入全局样式表
import './assets/css/global.css'
// 富文本样式
import './assets/css/quill.snow.min.css'
// 隐藏类
import 'element-ui/lib/theme-chalk/display.css'
// 导入Nprogress包对应的js和css
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// 操作cookie函数
import { setCookie, getCookie, delCookie } from './assets/js/cookie.js'
Vue.prototype.$http = axios
// axios根路径
axios.defaults.baseURL = 'https://api.isdream.cn/'
Vue.prototype.imgUrl = 'https://api.isdream.cn/img/'
Vue.prototype.$cookieStore = { setCookie, getCookie, delCookie }
// 默认头像的颜色
Vue.filter('hashColor', function (email) {
  const colours = [
    '#1abc9c',
    '#2ecc71',
    '#3498db',
    '#9b59b6',
    '#34495e',
    '#16a085',
    '#27ae60',
    '#2980b9',
    '#8e44ad',
    '#2c3e50',
    '#f1c40f',
    '#e67e22',
    '#e74c3c',
    '#ecf0f1',
    '#95a5a6',
    '#f39c12',
    '#d35400',
    '#c0392b',
    '#bdc3c7',
    '#7f8c8d'
  ]
  // 定义hashCode变量
  const str = email.slice(0, 6)
  let hashCode = 0
  // 霍纳法则，来计算hashCode的值
  // cats => Unicode编码
  for (let i = 0; i < str.length; i++) {
    hashCode = 37 * hashCode + str.charCodeAt(i)
  }
  // 取余操作
  const index = hashCode % 19
  return colours[index]
})

// 在request 拦截器中，展示进度条 Nprogress.start()
axios.interceptors.request.use(config => {
  Nprogress.start()
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须return config
  return config
})
// 在response 拦截器中，隐藏进度条 Nprogress.done()
axios.interceptors.response.use(config => {
  Nprogress.done()
  return config
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
