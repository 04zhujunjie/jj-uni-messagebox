import Vue from 'vue'
import App from './App'

import baseView from 'pages/components/baseView/index.vue'
Vue.component('base-view', baseView)
import installPlugin from 'pages/components/jj-messagebox/messageView/index.js'
installPlugin(Vue, '/pages/components/jj-messagebox/messageView/app-message-view')



Vue.config.productionTip = false


App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
