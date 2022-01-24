import Vue from 'vue';
import {kAlert} from './constant.js'
import {getRef} from './ref.js'



let jj_alert = function(alertData,message,btnTitle) {
	let alert = getRef(kAlert)
	if (alert !== undefined){
		alert.isCloseAlert = false
		alert.isShow = false
	   const data = getData(alertData,message,btnTitle)
	   let isClose = data['isClose'] || false
	   if (isClose){
		   alert.close()
		   return
	   }
	   alert.show(data)
	}
}

let getData = function(alertData,message,btnTitle){
	let data = {}
	const isAlertDataNull = (alertData === undefined || alertData === null)
	const isMessageNull = (message === undefined || message === null)
	const isBtnTitileNull = (btnTitle === undefined || btnTitle === null)
	if(isAlertDataNull&&isMessageNull&&isBtnTitileNull){
		return {}
	}else{
		if (!isAlertDataNull){
			if (alertData.constructor === Object) {
				data = {
					...alertData
				}
				return data
			}else{
				data['title'] = alertData+''
			}
		}
		
		if(!isMessageNull){
			data['message'] = message + ''
		}
		if(!isBtnTitileNull){
			data['btns'] = [{
				'title':btnTitle
			}] 
		}
		
	}
	return data
}

export default jj_alert

