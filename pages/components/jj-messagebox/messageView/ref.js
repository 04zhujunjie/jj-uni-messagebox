
import Vue from 'vue'

let refMessageObj = function (){
	let obj = Vue.prototype.$refMessageObj
	if (obj !== undefined){
		return obj
	}
	Vue.prototype.$refMessageObj = {}
	return Vue.prototype.$refMessageObj
}

let currentPageRoute = function () {
	let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
	let curRoute = routes[routes.length - 1].route
	return curRoute
}

let getRef = function(refId){
	let route = currentPageRoute()
	let currentObj = refMessageObj()[route]
	if(currentObj !== undefined){
		let ref = currentObj[refId]
		if(ref !== undefined){
			return ref
		}
	}
	return currentObj
}

let addRefObj = function(refId,ref){
	let route = currentPageRoute()
	let currentObj = refMessageObj()[route]
	if(currentObj !== undefined){
		currentObj[refId] = ref
	}else{
		let obj = {}
		obj[refId] = ref
	    refMessageObj()[route] = obj
	}
}

let removeRefObj = function(){
	let route = currentPageRoute()
	let currentObj = refMessageObj()[route] 
	if(currentObj !== undefined){
		delete refMessageObj()[route]
	}
}

export {
	refMessageObj,
	currentPageRoute,
	getRef,
	addRefObj,
	removeRefObj,
}