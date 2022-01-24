
import Vue from 'vue'
import toast from './toast.js'
import alert from './alert.js'
import loading from './loading.js'

Vue.prototype.$jj_loading = loading
Vue.prototype.$jj_alert = alert
Vue.prototype.$jj_toast = toast