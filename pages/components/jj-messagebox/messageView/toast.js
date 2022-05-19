import {
	kToast
} from './constant.js'
import {
	getRef,
	showMessageBox
} from './ref.js'
import processorObj from './processor.js'
import toastH5 from '../toast/jj-toast.vue';

// #ifndef VUE3
import Vue from 'vue';
let jjToast = Vue.extend(toastH5); //创建vm实例的构造函数
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

let jj_toast_instance = null

let getData = function(toastData, type, duration) {
	let data = {}
	const isToastDataNull = (toastData === undefined || toastData === null)
	const isTypeNull = (type === undefined || type === null)
	const isDurationNull = (duration === undefined || duration === null)
	if (isToastDataNull && isTypeNull && isDurationNull) {
		return {}
	} else {
		if (!isToastDataNull) {
			if (typeof toastData === 'object') {
				data = {
					...toastData
				}
				return data
			} else {
				data['message'] = toastData + ''
			}
		}

		if (!isTypeNull) {
			data['type'] = type + ''
		}
		if (!isDurationNull) {
			if (duration.constructor === Number) {
				data["duration"] = duration
			}
		}
	}
	return data
}


let jj_toast = function(toastData, type, duration) {
	const data = getData(toastData, type, duration)
	let obj = processorObj(kToast)
	obj.processDataFun = getData
	// #ifdef H5
	// #ifndef VUE3
	showToastH5(data)
	// #endif
	// #ifdef VUE3
	showToastH5_Vue3(data)
	// #endif
	obj.messageObj = jj_toast_instance
	// #endif

	// #ifdef MP
	showMessageBox(function() {
		obj.messageObj = showToastApp_MP(data)
	})
	// #endif

	// #ifdef APP-PLUS
	showMessageBox(function() {
		//app 如果是页面的跳转，挂载元素需要时间，那么这里就异步赋值
		obj.messageObj = showToastApp_MP(data)
	})
	// #endif
	return obj
}

let showToastH5 = function(data) {
	let isClose = data['isClose'] || false
	removeToastH5()
	if (isClose) {
		return
	}
	let instance = new jjToast({
		data
	})
	instance.$mount()
	document.body.appendChild(instance.$el)
	instance.show(data)
	jj_toast_instance = instance
}

let showToastH5_Vue3 = function(data) {
	let isClose = data['isClose'] || false
	removeToastH5()
	if (isClose) {
		return
	}
	document.body.appendChild(mountNode)
	const app = createApp(toastH5, {
		...data
	})
	let instance = app.mount(mountNode)
	instance.show(data)
	jj_toast_instance = instance
}

let removeToastH5 = function() {
	if (jj_toast_instance !== null) {
		if (jj_toast_instance.jj_time !== null) {
			clearTimeout(jj_toast_instance.jj_time)
			jj_toast_instance.jj_time = null
		}
		jj_toast_instance.close()
		jj_toast_instance.$el.remove()
		jj_toast_instance = null
	}
}

let showToastApp_MP = function(data) {
	let toast = getRef(kToast)
	// console.log('------',toast,data)
	if (toast !== undefined) {
		if (toast.jj_time !== null) {
			clearTimeout(toast.jj_time)
			toast.jj_time = null
		}
		toast.isShow = false
		let isClose = data['isClose'] || false
		if (isClose) {
			toast.close()
			return null
		}
		toast.show(data)
		return toast
	}
	return null
}

export default jj_toast
