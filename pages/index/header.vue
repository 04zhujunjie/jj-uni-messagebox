<template>
	<div class = "header-box">
		
		<button class="btn" @click="showToast('')">toast</button>
		<button class="btn" @click="showToast('success')">toast-success</button>
		<button class="btn" @click="updateVersion">更新版本</button>
	</div>
</template>

<script>
	export default {
		methods:{
			showToast(type){
				let message = '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈。。。'
				if(type.length > 0) {
					//第一个参数为提示信息文本，第二个参数为提示类型，第三个参数为显示的时长
					this.$jj_toast(message,type,1)
				}else{
					this.$jj_toast(message)
				}
			},
			updateVersion(){
				let  btnStyle = {
					'padding':'0px 15px',
					'border': '1px solid #C0C0C0',
					'font-size': '15px',
					'border-radius': '10px',
				}
			let customDataObj = {
						title:'发现新版本1.2.6',
						contentTitle:'更新内容:',
						backgroundImgUrl:require('../../static/bg_custom_update.png'),
						contentList:[
							'1、修复部分bug',
							"2、新增新玩法",
							"3、优化"
						]
					}
			let updateAlert = this.$jj_alert({
					type:'updateVersion',
					width:'280px',//设置弹窗的宽度
					background: 'transparent', //弹窗的背景
					priority:1000,//弹窗的优先级，数字越大，优先级就越高，在同一个页面，优先级低的弹窗不能覆盖掉优先级高的弹窗
					customDataObj:customDataObj,
					btns:[
						{
							title: "以后再说",
							style: {
								...btnStyle
							},
							click: () => {
								console.log("以后再说")
							}
						}, {
							title: "立即更新",
							touchClose: false,//点击按钮时，是否自动关闭弹窗
							activeBackground: '#2A8AFF',
							activeColor: "#fff",
							style: {
								 'background':'transparent',
								 'color':'#2A8AFF',
								 ...btnStyle
							},
							click: () => {
								console.log("立即更新")
								customDataObj.title = "正在更新 ‘版本1.2.6’ "
								//更新弹框的内容
								updateAlert.update({customDataObj:customDataObj})
								//手动关闭
							   let loading = this.$jj_loading({
								   message:'加载 0 %',
								   width:'110px',
							   })
							   let count = 0
							   let interval = setInterval(function(){
								   //模拟加载更新数据
									count+= Math.round(Math.random()*10)
									if (count > 100){
										count = 100
									}
									let message = "加载"+count+'%'
									//更新加载的信息
									loading.update(message)
									if (count===100){
										//清除定时器
										clearInterval(interval)
										setTimeout(function(){
											//关闭加载框
											loading.close()
											//关闭更新提示框
											updateAlert.close()
											getApp().globalData.$jj_toast('更新完成')
										},500)

									}
								},200)
							}
						}
					]
				})
				this.$jj_alert({
					message:'尝试覆盖掉已有的弹窗',
					// priority:1001,//弹窗的优先级，数字越大，优先级就越高，在同一个页面，优先级低的弹窗不能覆盖掉优先级高的弹窗
				})
			}
		}
	}
</script>

<style scoped>
	.header-box{
		display: flex;
		flex-direction: column;
		padding: 20px 0px;
	}
	
	.btn {
		margin-top: 20px;
		margin-right: 10px;
		margin-left: 10px;
		border-radius: 5px;
		background-color: #2A8AFF;
		border-color: #FFFFFF;
		color: #FFFFFF;
		padding: 0px 20px;
		height: 44px;
	}
</style>
