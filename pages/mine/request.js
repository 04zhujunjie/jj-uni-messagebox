
import Vue from 'vue'
import loading from '../components/jj-messagebox/messageView/loading.js'
let requsetUserInfo = function() {
	//引入文件方式调用
	let load =  loading()
	setTimeout(function(){
		load.close()
		//使用单例方法调用
		Vue.prototype.$jj_toast('成功获取用户信息。。。。。。哈哈😄😄')
	},3000)
}

export default requsetUserInfo