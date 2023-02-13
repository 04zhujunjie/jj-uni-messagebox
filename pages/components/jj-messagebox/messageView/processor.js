import {
	kAlert,
	kToast,
	kLoading
} from './constant.js'
import {
	getRefList,
	route_uidKey,
	jj_app_message_url
} from './ref.js'
import {
	removeAlertH5
} from "./alert.js"
import {
	removeLoadingH5
} from "./loading.js"
import {
	removeToastH5
} from "./toast.js"

let processorObj = function(type) {
	let obj = new Object()
	obj.type = type
	obj.isClose = false
	obj.messageObj = null
	obj.processDataFun = null
	obj.updateData = {}
	//isAnimation为false时，表示关闭没有动画效果
	obj.close = function(isAnimation = true) {
		if (obj.isClose) {
			return
		}
		if (obj.messageObj !== null) {
			removeData(isAnimation)
		} else {
			obj.isClose = true
		}
	}
	obj.closeAll = function(fun) {
		if (obj.messageObj !== null) {
			// #ifdef H5
			removeAlertH5()
			removeLoadingH5()
			removeToastH5()
			if (typeof fun === 'function') {
				fun()
			}
			// #endif

			// #ifdef MP
			quickCloseVmFun()
			if (typeof fun === 'function') {
				fun()
			}
			// #endif

			// #ifdef APP-PLUS
			if (jj_app_message_url().length) {
				setupAppCloseFun(obj.messageObj.route_uid, fun)
			}else{
				quickCloseVmFun()
				if (typeof fun === 'function') {
					fun()
				}
			}
			// #endif
		}
	}
	let quickCloseVmFun = function() {
		let refList = getRefList(obj.messageObj.route_uid)
		for (let i = 0; i < refList.length; i++) {
			const ref = refList[i]
			ref.quickClose()
		}
	}
	let setupAppCloseFun = function(uid, fun) {
		let routes = getCurrentPages() || []; // 获取当前打开过的页面路由数组
		let length = routes.length
		let index = 0 //遮罩层路由的索引
		for (let i = length - 1; i >= 0; i--) {
			let page = routes[i]
			const route_uid = route_uidKey(page)
			if (uid === route_uid) {
				index = i
				break;
			}
		}
		let curprocessorVM = routes[index].$vm //遮罩层组件对象
		//调用返回上一页面方法
		curprocessorVM.backPage(()=>{
			if (typeof fun === 'function') {
				obj.messageObj = null
				fun()
			}
		})
		
	}
	let removeData = function(isAnimation) {
		obj.isClose = true
		if (isAnimation) {
			obj.messageObj.close()
		} else {
			obj.messageObj.quickClose()
		}
		obj.messageObj = null
	}

	obj.update = function(param1, param2, param3) {
		if (obj.isClose) {
			return
		}
		if (obj.processDataFun !== null) {
			let updateData = updateDataFun(param1, param2, param3)
			if (obj.messageObj !== null) {
				obj.messageObj.update(updateData)
			} else {
				obj.updateData = updateData
			}

		}
	}
	let updateDataFun = function(param1, param2, param3) {
		let data = {}
		if (obj.type === kAlert) {
			data = obj.processDataFun(param1, param2, param3)
		} else if (obj.type === kLoading) {
			data = obj.processDataFun(param1)
		} else if (obj.type === kToast) {
			data = obj.processDataFun(param1, param2, param3)
		}
		return data
	}

	return obj
}

export default processorObj
