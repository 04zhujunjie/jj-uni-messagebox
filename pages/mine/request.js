
let requsetUserInfo = function() {
	//全局方式调用
	let load =  getApp().globalData.$jj_loading()
	setTimeout(function(){
		load.close()
		getApp().globalData.$jj_toast('成功获取用户信息。。。。。。哈哈😄😄')
	},3000)
}

export default requsetUserInfo