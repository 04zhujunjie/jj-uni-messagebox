import {
	kAlert,
	kToast,
	kLoading
} from './constant.js'

let processorObj = function (type){
	const appDuration = 300
	let obj = new Object()
	obj.type = type
	obj.isClose = false
	obj.messageObj = null
	obj.processDataFun = null
	obj.close = function(){
		if (obj.isClose){
			return
		}
		if (obj.messageObj !== null){
			removeData()
		}else{
			// #ifdef APP-PLUS
			//app 如果是页面的跳转，挂载元素需要时间，如果是立马调用关闭，可能messageObj为null,稍做延时关闭
			closeApp()
			// #endif
			
		}
	}
	let closeApp = function(){
		setTimeout(function(){
			if (obj.messageObj !== null){
				removeData()
			}
		},appDuration)
	}
	
	let removeData = function(){
		obj.isClose = true
		obj.messageObj.close()
		obj.messageObj = null
	}
	
	obj.update = function(param1, param2, param3){
		if (obj.isClose){
			return
		}
		if (obj.processDataFun !== null){
			if (obj.messageObj !== null){
				updateData(param1, param2, param3)
			}else{
				// #ifdef APP-PLUS
				//app 如果是页面的跳转，挂载元素需要时间，如果是立马调用更新，可能messageObj为null,稍做延时更新
				updateApp(param1, param2, param3)
				// #endif
				
			}
			
		}
	}
	
	let updateApp = function(param1, param2, param3){
		setTimeout(function(){
			if (obj.messageObj !== null){
				updateData(param1, param2, param3)
			}
		},appDuration)
	}
	
	let updateData = function(param1, param2, param3){
		
		let data = {}
		if (obj.type === kAlert){
			data = obj.processDataFun(param1, param2, param3)
		}else if (obj.type === kLoading){
			data = obj.processDataFun(param1)
		} else if (obj.type === kToast){
			data = obj.processDataFun(param1, param2, param3)
		}else{
			return
		}
		obj.messageObj.update(data)
	}
	
	return obj
}

export default processorObj