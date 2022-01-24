import Vue from 'vue'
import App from './App'

import baseView from 'pages/components/baseView/index.vue'

import 'pages/components/jj-messagebox/messageView/index.js'

Vue.config.productionTip = false

Vue.component('base-view',baseView)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
