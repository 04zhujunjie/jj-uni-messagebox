<template>
	<base-view class = "flexColumnCenter">
		<button class="btn marginTopBottom" @click="showAlert">
			页面跳转
		</button>
		<button class="btn marginTopBottom" @click="showPopup">
			showPopup
		</button>
		<map v-if="isShowMap" class="marginTopBottom" style="width: 100%;height: 150px;margin-top: 250px;"></map>
	</base-view>
</template>

<script>
	import {
		jj_app_message_url
	} from '@/pages/components/jj-messagebox/messageView/ref.js'
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
		},
		onLoad() {
	
		},
		computed:{
			isShowMap(){
				return jj_app_message_url().length
			}
		},
		methods: {
			showAlert(){
				//#ifdef APP-PLUS
				
				let that = this
				let alert = this.$jj_alert({
					type: 'alert', //弹窗的类型有alert和sheet
					position: 'center', //有center和bottom
					btnDirection: 'row', //按钮的排列方向,row和column
					width: '90%', //设置弹窗的宽度
					padding: '20px 30px', //设置内容的上下左右偏移
					maskColor: "rgba(0, 0, 0, 0.6)", //遮罩层的背景颜色
					touchClose: true, //点击背景图层，是否关闭弹框
					showClose: true, //是否显示右上角的关闭按钮
					radius:10,//设置圆角
					title: '提示', //标题
					titleStyle: {
						'color': '#fb2408',
						'font-size': '20px'
					}, //标题的样式
					isUseHTMLString: true, //是否将 message 属性作为 HTML 片段处理
					message: "<strong>这是 <i>HTML</i> 片段,<span style='color:orange;margin:0px 8px'>页面跳转演示</span></strong>", //内容
					messageStyle: {
						"justify-content": 'center',
						"display": "flex",
						"color": '#8a8a8a',
						'text-align': 'left'
					}, //内容的样式
					btns: [{
						title: "取消",
						activeBackground: '#2A8AFF',
						activeColor: "#fff",
						click: () => {
							console.log("点击Cancel")
						}
					}, {
						title: "关闭弹窗跳转",
						style: {
							'color': 'red',
							'font-size': '15px'
						},
						touchClose: false, //点击按钮时，是否自动关闭弹窗
						click: () => {
							console.log("点击关闭弹窗跳转")
							/*closeAll方法是将所有的提示（alert,toast,loading）关闭后，执行的回调函数
							注意⚠️，在app平台下，如果配置了URL，那么回调函数是异步的，有一定的延时，
							它是等配置的URL页面（app-message-view）隐藏后，再执行的函数
							如果要‘关闭弹窗’并且使用navigateTo进行页面跳转，一定要放在closeAll回调函数内进行跳转，否则可能会导致路由丢失
							*/
							alert.closeAll(function(){
								uni.navigateTo({
								    url: '/pages/demo/index',
									animationDuration:0,
								})
							})
						},
						
					}, {
						title: "保留弹窗跳转",
						activeBackground: '#2f2',
						style: {
							'background': '#2A8AFF',
							'color': '#fff',
						},
						touchClose: false, //点击按钮时，是否自动关闭弹窗
						click: ()=> {
							uni.navigateTo({
							    url: '/pages/demo/index',
								animationDuration:0,
							})
						}
					}]
				})
				
				//#endif
			},
			showPopup(){
				//#ifdef APP-PLUS
				uni.navigateTo({
				    url: '/pages/app/popup-view?id=1',
					animationType:'fade-in',//设置fade-in动画
					animationDuration:0,//设置动画时间
				})
				//#endif
			},
		}
	}
</script>


<style scoped>

	.flexColumnCenter {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}


	.marginTopBottom {
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.marginLeftRight {
		margin-right: 10px;
		margin-left: 10px;
	}

	.btn {
		border-radius: 5px;
		background-color: #2A8AFF;
		border-color: #FFFFFF;
		color: #FFFFFF;
		padding: 0px 20px;
		height: 44px;
		}
</style>
