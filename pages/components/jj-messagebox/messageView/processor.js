
let processorObj = function (type){
	let obj = new Object()
	obj.type = type
	obj.messageObj = null
	obj.close = function(){
		if (obj.messageObj !== null){
			obj.messageObj.close()
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
				obj.messageObj.close()
			}
		},300)
	}
	return obj
}

export default processorObj