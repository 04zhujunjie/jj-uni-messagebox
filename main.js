import Vue from 'vue'
import App from './App'

import baseView from 'pages/baseView/index.vue'
Vue.component('base-view', baseView)
import installPlugin from 'pages/components/jj-messagebox/messageView/index.js'
//第二个参数只对App有效，App的遮罩层页面的跳转链接url，在pages.json文件那里配置，设置改参数可以覆盖原生组件（导航栏，tabbar,地图等）
installPlugin(Vue, '/pages/components/jj-messagebox/messageView/app-message-view')



Vue.config.productionTip = false


App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
