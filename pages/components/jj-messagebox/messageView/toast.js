import Vue from 'vue';
import {kToast} from './constant.js'
import {getRef} from './ref.js'


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

