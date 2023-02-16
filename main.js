
import App from './App'

//----------------------版本vue2--start------------------
// #ifdef VUE2
import Vue from 'vue'

import baseView from 'pages/baseView/index.vue'
Vue.component('base-view', baseView)

import messageView from 'pages/components/jj-messagebox/messageView/index.vue'
//注册全局组件，在vue.config.js文件进行配置，根据需求动态插入到小程序的页面中
Vue.component('messageView', messageView)

import installPlugin from 'pages/components/jj-messagebox/messageView/index.js'
//第二个参数只对App有效，App的遮罩层页面的跳转链接url，在pages.json文件那里配置，设置改参数可以覆盖原生组件（导航栏，tabbar,地图等）
installPlugin(Vue,'/pages/components/jj-messagebox/messageView/app-message-view')
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif
//----------------------版本vue2---end--------------------


//====================版本vue3==start===============
// #ifdef VUE3
import baseView from './pages/baseView/index.vue'
import {installPlugin_Vue3} from './pages/components/jj-messagebox/messageView/index.js'
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.component('base-view', baseView)
  //第二个参数只对App有效，App的遮罩层页面的跳转链接url，在pages.json文件那里配置，设置改参数可以覆盖原生组件（导航栏，tabbar,地图等）
  installPlugin_Vue3(app,'/pages/components/jj-messagebox/messageView/app-message-view')
  return {
    app
  }
}
// #endif
//====================版本vue3==end===============

