import {
	kLoading
} from './constant.js'
import {
	getRef,
	showMessageBox
} from './ref.js'
import processorObj from './processor.js'
import loadingH5 from '../loading/jj-loading.vue';

// #ifdef VUE2
import Vue from 'vue';
let jjLoading = Vue.extend(loadingH5); //创建vm实例的构造函数
// #endif

// #ifndef VUE2
import {
	createApp
} from 'vue';
// #ifdef H5
	// 创建一个节点，并将组件挂载上去
	const mountNode = document.createElement('div')
// #endif
// #endif

let jj_loading_instance = null
let jj_loading_h5_app = null
let getLoadingData = function(loadingData) {
	let data = {}
	if (loadingData === undefined || loadingData === null) {

	} else {
		if (typeof loadingData === 'object') {
			data = {
				...loadingData
			}
		} else {
			data = {
				"message": loadingData + '',
			}
		}
	}
	return data
}

let jj_loading = function(loadingData) {
	const data = getLoadingData(loadingData)
	let obj = processorObj(kLoading)
	obj.processDataFun = getLoadingData
	// #ifdef H5
	// #ifdef VUE2
	showLoadingH5(data)
	// #endif
	// #ifndef VUE2
	showLoadingH5_Vue3(data)
	// #endif
	obj.messageObj = jj_loading_instance
	// #endif

	// #ifdef MP
	obj.messageObj = showLoadingApp_MP(data)
	// #endif

	// #ifdef APP-PLUS
	showMessageBox(function() {
		//app 如果是页面的跳转，挂载元素需要时间，那么这里就异步赋值
		let messageData = Object.assign(data,obj.updateData,{isClose:obj.isClose||false})
		obj.messageObj = showLoadingApp_MP(messageData)
	})
	// #endif
	return obj
}

let showLoadingH5 = function(data) {
	let isClose = data['isClose'] || false
	removeLoadingH5()
	if (isClose) {
		return
	}
	let instance = new jjLoading({
		data
	})
	instance.$mount()
	document.body.appendChild(instance.$el)
	instance.show(data)
	jj_loading_instance = instance
}

let showLoadingH5_Vue3 = function(data) {
	let isClose = data['isClose'] || false
	removeLoadingH5()
	if (isClose) {
		return
	}
	
	document.body.appendChild(mountNode)
	const app = createApp(loadingH5, {
		...data
	})
	jj_loading_h5_app = app
	let instance = app.mount(mountNode)
	instance.show(data)
	jj_loading_instance = instance
}

let removeLoadingH5 = function() {
	if (jj_loading_instance !== null) {
		// #ifndef VUE2
		if(jj_loading_h5_app !== null){
			//卸载，消除There is already an app instance mounted on the host container警告⚠️
			jj_loading_h5_app.unmount()
			jj_loading_h5_app = null
		}
		// #endif
		jj_loading_instance.close()
		jj_loading_instance.$el.remove()
		jj_loading_instance = null
	}
}

let showLoadingApp_MP = function(data) {
	let loading = getRef(kLoading)
	if (loading !== undefined) {
		loading.isShow = false
		let isClose = data['isClose'] || false
		if (isClose) {
			loading.quickClose()
			return null
		}
		loading.show(data)
		return loading
	}
	return null
}

export default jj_loading

export  {
	removeLoadingH5
}