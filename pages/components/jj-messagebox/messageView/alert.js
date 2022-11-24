import {
	kAlert
} from './constant.js'
import {
	getRef,
	showMessageBox
} from './ref.js'
import processorObj from './processor.js'
import alertH5 from '../alert/jj-alert.vue';

// #ifndef VUE3
import Vue from 'vue';
let jjAlert = Vue.extend(alertH5); //创建vm实例的构造函数
// #endif

// #ifdef VUE3
import {
	createApp
} from 'vue';
// #ifdef H5
	// 创建一个节点，并将组件挂载上去
	const mountNode = document.createElement('div')
// #endif
// #endif

let jj_alert_instance = null
let jj_alert_h5_app = null
let jj_alert = function(alertData, message, btnTitle) {
   const data = getData(alertData, message, btnTitle)
   let obj = processorObj(kAlert)
   obj.processDataFun = getData
	// #ifdef H5
	// #ifndef VUE3
	showAlertH5(data)
	// #endif
	// #ifdef VUE3
	showAlertH5_Vue3(data)
	// #endif
	obj.messageObj = jj_alert_instance
	// #endif

	// #ifdef MP
	showMessageBox(function() {
		obj.messageObj = showAlertApp_MP(data)
	})
	// #endif

	// #ifdef APP-PLUS
	showMessageBox(function() {
		//app 如果是页面的跳转，挂载元素需要时间，那么这里就异步赋值
		obj.messageObj = showAlertApp_MP(data)
	})
	// #endif
	return obj
}
let showAlertApp_MP = function(data) {
	let alert = getRef(kAlert)
	if (alert !== undefined) {
		
		let isClose = data['isClose'] || false
		if (isClose) {
			alert.close()
			return null
		}
		let priority = data['priority'] || 0
		let alertPriority = alert.priority
		
		if (alertPriority > priority&&alert.isShow){
			//比较已有弹窗的优先级，如果已经展示的弹窗的优先级比较高，就不往下执行
			return
		}
		alert.isCloseAlert = false
		alert.isShow = false
		alert.show(data)
		return alert
	}
	return null
}
let showAlertH5 = function(data) {
	let isClose = data['isClose'] || false
	if(removeAlertH5(data) || isClose){
		return
	}
	let instance = new jjAlert({
		data
	})
	instance.$mount()
	document.body.appendChild(instance.$el)
	instance.show(data)
	jj_alert_instance = instance
}

let showAlertH5_Vue3 = function(data){
	let isClose = data['isClose'] || false
	if(removeAlertH5(data) || isClose){
		return
	}
	document.body.appendChild(mountNode)
	const app = createApp(alertH5, {
		...data
	})
	jj_alert_h5_app=app
	let instance = app.mount(mountNode)
	instance.show(data)
	jj_alert_instance = instance
}

let removeAlertH5 = function(data){
	if (jj_alert_instance !== null) {
		let priority = data['priority'] || 0
		let alertPriority = jj_alert_instance.priority
		if (alertPriority > priority && jj_alert_instance.isShow){
			//比较已有弹窗的优先级，如果已经展示的弹窗的优先级比较高，就不往下执行
			return true
		}
		// #ifdef VUE3
		if(jj_alert_h5_app !== null){
			//卸载，消除There is already an app instance mounted on the host container警告⚠️
			jj_alert_h5_app.unmount()
			jj_alert_h5_app = null
		}
		// #endif
		jj_alert_instance.close()
		jj_alert_instance.$el.remove()
		jj_alert_instance = null
		
	}
	return false
}

let getData = function(alertData, message, btnTitle) {
	let data = {}
	const isAlertDataNull = (alertData === undefined || alertData === null)
	const isMessageNull = (message === undefined || message === null)
	const isBtnTitileNull = (btnTitle === undefined || btnTitle === null)
	if (isAlertDataNull && isMessageNull && isBtnTitileNull) {
		return {}
	} else {
		if (!isAlertDataNull) {
			if (typeof alertData === 'object') {
				data = {
					...alertData
				}
				return data
			} else {
				data['title'] = alertData + ''
			}
		}

		if (!isMessageNull) {
			data['message'] = message + ''
		}
		if (!isBtnTitileNull) {
			data['btns'] = [{
				'title': btnTitle
			}]
		}

	}
	return data
}
export default jj_alert
