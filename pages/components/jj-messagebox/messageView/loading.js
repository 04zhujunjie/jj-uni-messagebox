
import Vue from 'vue';
import {kLoading} from './constant.js'
import {getRef,showMessageBox} from './ref.js'
import processorObj from './processor.js'

import loadingH5 from '../loading/jj-loading.vue';
let jjLoading = Vue.extend(loadingH5); //创建vm实例的构造函数
let jj_loading_instance = null

let getLoadingData = function(loadingData){
	let data = {}
	if(loadingData === undefined || loadingData === null){
		
	}else{
		if (loadingData.constructor === Object) {
			data = {
				...loadingData
			}
		}else{
			data = {
				"message": loadingData+'',
			}
		}
	}
	return data
}

let jj_loading = function(loadingData){
  const data = getLoadingData(loadingData)
  let obj = processorObj(kLoading)
  obj.processDataFun = getLoadingData
	// #ifdef H5
	showLoadingH5(data)
	obj.messageObj = jj_loading_instance
	// #endif
	
	// #ifdef MP
	showMessageBox(function() {
	  obj.messageObj = showLoadingApp_MP(data)
	})
	// #endif
	
	// #ifdef APP-PLUS
	showMessageBox(function() {
		//app 如果是页面的跳转，挂载元素需要时间，那么这里就异步赋值
		obj.messageObj = showLoadingApp_MP(data)
	})
	// #endif
	return obj
}

let showLoadingH5 = function(data){
	let isClose = data['isClose'] || false
	if (jj_loading_instance !== null) {
		jj_loading_instance.close()
		jj_loading_instance.$el.remove()
		jj_loading_instance = null
		
	}
	if(isClose){
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

let showLoadingApp_MP = function(data){
	let loading = getRef(kLoading)
	if (loading !== undefined){
	   loading.isShow = false
	   let isClose = data['isClose'] || false
	   if (isClose){
		   loading.close()
		 return null
	   }
	   loading.show(data)
	   return loading
	}
	return null
}




export default jj_loading