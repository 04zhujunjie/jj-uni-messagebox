
let appShowing = false
let appShowFnList = []

let refMessageObj = function (){
   let obj = getApp().globalData.$jj_refMessageObj
   if (obj !== undefined){
   	return obj
   }
   getApp().globalData.$jj_refMessageObj = {}
   return getApp().globalData.$jj_refMessageObj
}


let jj_app_message_url = function(){
	return getApp().globalData.$jj_app_message_url || ''
}

let currentPageRoute = function () {
	let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
	//H5 页面刷新后，返回上一页，会返回空数组
	if(routes.length === 0){
		return ''
	}
	let curRoute = routes[routes.length - 1].route
	return curRoute
}
let refRouteKey = function(){
	let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
	//H5 页面刷新后，返回上一页，会返回空数组
	if(routes.length === 0){
		return ''
	}
	let rKey = route_uidKey(routes[routes.length - 1])
	// console.log('--------',rKey)
	return rKey
}

let route_uidKey = function (page) {
	let uid = 0
	// #ifdef VUE3
	 //vue3 页面的id
	 uid = page.$page.id
	// #endif
	
	// #ifndef VUE3
	//vue2 页面的id
	uid = page.$vm._uid
	// #endif
	return  page.route + '/' + uid
}
let isShowAppMessageView = function (){
	let curRoute = currentPageRoute()
	let url = jj_app_message_url()
	if (url.indexOf(curRoute) === -1){
	  return false
	}else{
		return true
	}
}

let showMessageBox = function(showFn){
	
	//#ifdef APP-PLUS
	appShowMessageBox(showFn)
	// #endif
	
	// #ifdef H5
	  showFn()
	// #endif
	// #ifdef MP
	  showFn()
	// #endif
}

let appShowMessageBox = function (showFn){
	let url = jj_app_message_url()
	
	if (url.length > 0){
		if(appShowing){
			//说明进入页面跳转，但是页面并没有挂载完成，需要放入队列中缓存起来
			appShowFnList.push(showFn)
			return
		}
		// console.log(appShowFnList)
		let isShowAppView = isShowAppMessageView()
		if (!isShowAppView){
			//标记页面跳转
			appShowing = true
			uni.navigateTo({
			    url: jj_app_message_url(),
				animationType:'fade-in',
				animationDuration:0,
				success() {
					//页面已经加载完成，显示弹框
					appShowFn(showFn)
				},
				fail() {
					appShowing = false
				}
			 })
		  return 
		}
	}
	appShowFn(showFn)
}
//循环调用，显示队列里面的方法
let appShowFn = function(showFn){
	showFn()
	appShowing = false
	if(appShowFnList.length >0){
		let fn = appShowFnList[0]
		//删除数组中的第一个元素
		appShowFnList.splice(0,1)
		appShowFn(fn)
	}
}

let getRef = function(refId){
	let refKey = refRouteKey()
	let refObj = refMessageObj()
	let currentObj = refObj[refKey]
	if(currentObj !== undefined){
		let ref = currentObj[refId]
		if(ref !== undefined){
			return ref
		}
	}
	return currentObj
}

let addRefObj = function(refId,ref){
	let refKey = refRouteKey()
	let refObj = refMessageObj()
	let currentObj = refObj[refKey]
	if(currentObj !== undefined){
		currentObj[refId] = ref
	}else{
		let obj = {}
		obj[refId] = ref
	    refObj[refKey] = obj
	}
}

let removeRefObj = function(){
	let refKey = refRouteKey()
	let refObj = refMessageObj()
	let currentObj = refObj[refKey] 
	if(currentObj !== undefined){
		delete refObj[refKey]
	}
}

let getRefList = function (route_uid){
	let refList = []
	let refKey = route_uid
	if(refKey===undefined){
		refKey = refRouteKey()
	}
	let currentObj = refMessageObj()[refKey]
	if(currentObj !== undefined){
		let refObj = refMessageObj()[refKey]
		for (let key in refObj) {
			refList.push(refObj[key])
		}
	}
	return refList
}

export {
	refMessageObj,
	refRouteKey,
	currentPageRoute,
	isShowAppMessageView,
	jj_app_message_url,
	showMessageBox,
	route_uidKey,
	getRef,
	addRefObj,
	removeRefObj,
	getRefList,
}