import Vue from 'vue';
import {kToast} from './constant.js'
import {getRef,showMessageBox} from './ref.js'

import toastH5 from '../toast/jj-toast.vue';
let jjToast = Vue.extend(toastH5); //创建vm实例的构造函数
let jj_toast_instance = null

let getData = function(toastData,type,duration){
	let data = {}
	const isToastDataNull = (toastData === undefined || toastData === null)
	const isTypeNull = (type === undefined || type === null)
	const isDurationNull = (duration === undefined || duration === null)
	if(isToastDataNull&&isTypeNull&&isDurationNull){
		return {}
	}else{
		if (!isToastDataNull){
			if (toastData.constructor === Object) {
				data = {
					...toastData
				}
				return data
			}else{
				data['message'] = toastData+''
			}
		}
		
		if(!isTypeNull){
			data['type'] = type + ''
		}
		if(!isDurationNull){
			if (duration.constructor === Number){
				data["duration"] = duration
			}
		}
	}
	return data
}


let jj_toast = function(toastData,type,duration) {
	
	// #ifdef H5
	showToastH5(toastData,type,duration)
	// #endif
	
	// #ifdef MP
	showMessageBox(function() {
		showToastApp_MP(toastData,type,duration)
	})
	// #endif
	
	// #ifdef APP-PLUS
	showMessageBox(function() {
		showToastApp_MP(toastData,type,duration)
	})
	// #endif
	
	// showMessageBox(function(){
	// 	let toast = getRef(kToast)
	// 	if (toast !== undefined){
	// 		if (toast.jj_time !== null){
	// 			clearTimeout(toast.jj_time)
	// 			toast.jj_time  = null
	// 		}
	// 	   toast.isShow = false
	// 	   let data = getData(toastData,type,duration)
	// 	   let isClose = data['isClose'] || false
	// 	   if (isClose){
	// 		   toast.close()
	// 		   return
	// 	   }
	// 	   toast.show(data)
	// 	}
	// })
	
}

let showToastH5 = function (toastData,type,duration){
	const data = getData(toastData,type,duration)
	let isClose = data['isClose'] || false
	if (jj_toast_instance !== null) {
		if (jj_toast_instance.jj_time !== null){
			clearTimeout(jj_toast_instance.jj_time)
			jj_toast_instance.jj_time  = null
		}
		jj_toast_instance.close()
		jj_toast_instance.$el.remove()
		jj_toast_instance = null
	}
	
	if(isClose){
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

let showToastApp_MP = function (toastData,type,duration){
	let toast = getRef(kToast)
	if (toast !== undefined){
		if (toast.jj_time !== null){
			clearTimeout(toast.jj_time)
			toast.jj_time  = null
		}
	   toast.isShow = false
	   let data = getData(toastData,type,duration)
	   let isClose = data['isClose'] || false
	   if (isClose){
		   toast.close()
		   return
	   }
	   toast.show(data)
	}
}

export default jj_toast

