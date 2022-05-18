
// import Vue from 'vue'
import toast from './toast.js'
import alert from './alert.js'
import loading from './loading.js'

let installPlugin = function(Vue,appUrl){
	Vue.prototype.$jj_loading = loading
	Vue.prototype.$jj_alert = alert
	Vue.prototype.$jj_toast = toast
	setTimeout(function(){
		getApp().globalData.jj_app_message_url = appUrl || ''
		getApp().globalData.$jj_loading = loading
		getApp().globalData.$jj_alert = alert
		getApp().globalData.$jj_toast = toast
	},0)
}

export default installPlugin
