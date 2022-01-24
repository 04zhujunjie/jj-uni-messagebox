
import Vue from 'vue';
import {kLoading} from './constant.js'
import {getRef} from './ref.js'

let jj_loading = function(loadingData){
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
	let loading = getRef(kLoading)
	if (loading !== undefined){
	   loading.close()
	   let isClose = data['isClose'] || false
	   if (isClose){ 
		 return
	   }
	   loading.show(data)
	}
	
}

export default jj_loading