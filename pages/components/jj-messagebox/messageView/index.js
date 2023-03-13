
import jj_toast from './toast.js'
import jj_alert from './alert.js'
import jj_loading from './loading.js'

let installPlugin = function(Vue,appUrl){
	Vue.prototype.$jj_loading = jj_loading
	Vue.prototype.$jj_alert = jj_alert
	Vue.prototype.$jj_toast = jj_toast
	setupGlobalData(appUrl)
}

export let installPlugin_Vue3 = function(app,appUrl){
	app.config.globalProperties.$jj_loading = jj_loading;
	app.config.globalProperties.$jj_alert = jj_alert;
	app.config.globalProperties.$jj_toast = jj_toast;
	setupGlobalData(appUrl)
}

let setupGlobalData = function  (appUrl) {
	setTimeout(function(){
		getApp().globalData.$jj_app_message_url = appUrl || ''
		getApp().globalData.$jj_loading = jj_loading
		getApp().globalData.$jj_alert = jj_alert
		getApp().globalData.$jj_toast = jj_toast
	},0)
}

export default installPlugin
