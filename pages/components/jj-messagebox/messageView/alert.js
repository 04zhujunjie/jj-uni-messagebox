import Vue from 'vue';
import {
	kAlert
} from './constant.js'
import {
	getRef,
	showMessageBox
} from './ref.js'

import alertH5 from '../alert/jj-alert.vue';
let jjAlert = Vue.extend(alertH5); //创建vm实例的构造函数
let jj_alert_instance = null

let jj_alert = function(alertData, message, btnTitle) {

	// #ifdef H5
	showAlertH5(alertData, message, btnTitle)
	// #endif

	// #ifdef MP
	showMessageBox(function() {
		showAlertApp_MP(alertData, message, btnTitle)
	})
	// #endif

	// #ifdef APP-PLUS
	showMessageBox(function() {
		showAlertApp_MP(alertData, message, btnTitle)
	})
	// #endif

}

let showAlertApp_MP = function(alertData, message, btnTitle) {
	let alert = getRef(kAlert)
	if (alert !== undefined) {
		alert.isCloseAlert = false
		alert.isShow = false
		const data = getData(alertData, message, btnTitle)
		let isClose = data['isClose'] || false
		if (isClose) {
			alert.close()
			return
		}
		alert.show(data)
	}
}

let showAlertH5 = function(alertData, message, btnTitle) {
	const data = getData(alertData, message, btnTitle)
	let isClose = data['isClose'] || false
	
	if (jj_alert_instance !== null) {
		jj_alert_instance.close()
		jj_alert_instance.$el.remove()
		jj_alert_instance = null
		
	}
	if(isClose){
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

let getData = function(alertData, message, btnTitle) {
	let data = {}
	const isAlertDataNull = (alertData === undefined || alertData === null)
	const isMessageNull = (message === undefined || message === null)
	const isBtnTitileNull = (btnTitle === undefined || btnTitle === null)
	if (isAlertDataNull && isMessageNull && isBtnTitileNull) {
		return {}
	} else {
		if (!isAlertDataNull) {
			if (alertData.constructor === Object) {
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
