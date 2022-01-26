
// import Vue from 'vue'
import toast from './toast.js'
import alert from './alert.js'
import loading from './loading.js'

let installPlugin = function(Vue,appUrl){
	Vue.prototype.$jj_loading = loading
	Vue.prototype.$jj_alert = alert
	Vue.prototype.$jj_toast = toast
	Vue.prototype.jj_app_message_url = appUrl || ''
}

export default installPlugin
