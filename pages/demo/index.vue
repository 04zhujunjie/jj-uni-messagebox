<template>
	<base-view>
		<map style="width: 100%;height: 150px;"></map>
		<div class="flexColumnCenter">
			<div class="flexRow marginTopBottom">
				<button class="btn" @click="showNormalAlert">
					默认Alert
				</button>
				<button class="btn" style="margin-left: 10px;" @click="showCustomAlert('alert',false)">
					没有按钮的Alert
				</button>
				<button class="btn marginLeftRight" @click="showCustomAlert('alert')">
					自定义Alert
				</button>
				<button class="btn marginLeftRight" @click="showCustomAlert('alert',true,'column')">
					按钮竖排Alert
				</button>
				<button class="btn" @click="showCustomAlert('alert',true,'column','bottom')">
					底部弹出Alert
				</button>
				<button class="btn" @click="showCustomAlert('sheet')">
					自定义Sheet
				</button>
			</div>
			<div class="flexRow marginTopBottom">
				<button class="btn" @click="showDialog">Dialog</button>
			</div>
			<div class="flexRow marginTopBottom">
				<button class="btn" @click="showPopup">Popup</button>
			</div>
			<div class="flexRow marginTopBottom">
				<button class="btn" @click="showLoading('default')">Loading</button>
				<button class="btn" style="margin-left: 10px;" @click="showLoading('round')">Loading-round</button>
				<button class="btn marginLeftRight" @click="showLoading('taichi')">Loading-taichi</button>
				<button class="btn" @click="showLoading('custom')">Loading-自定义</button>
			</div>

			<div class="flexRow marginTopBottom">
				<button class="btn" @click="showToast('')">toast</button>
				<button class="btn marginLeftRight" @click="showToast('success')">toast-success</button>
				<button class="btn" @click="showToast('fail')">toast-fail</button>
				<button class="btn marginLeftRight" @click="showToast('warn')">toast-warn</button>
				<button class="btn" style="margin-left: 10px;" @click="showToast('custom')">toast-自定义</button>
			</div>

			<jj-dialog :visible="isShowDialog" :titleStyle="{'color':'red'}" title="提示" message="外层Dialog"
				@close="isShowDialog=false">
				<image slot="backgroundContent" class="image" :src="backgroundImg"></image>
				<div> 自定Dialog内容</div>
				<jj-dialog width="60%" title="内层Dialog" :visible="innerVisible" @close='innerVisible=false'>

				</jj-dialog>
				<div slot="footer">
					<button class="btn" style="margin-bottom: 10px;" @click="innerVisible=true">打开内层Dialog</button>
				</div>
			</jj-dialog>
			<jj-popup :visible="isShowPopup" @close="closePopup" :showClose="true" title="请选择" :touchClose="false">
				<image slot="backgroundContent" class="image" :src="backgroundImg"></image>
				<div> 今天天气不错</div>
			</jj-popup>
		</div>
	</base-view>
</template>

<script>
	import jjDialog from '../components/jj-messagebox/dialog/jj-dialog.vue'
	import jjPopup from '../components/jj-messagebox/popup/jj-popup.vue'
	import {
		logo,
		background_image,
		loading_custom
	} from '@/static/image.js'
	export default {
		components: {
			jjPopup,
			jjDialog
		},
		data() {
			return {
				isShowDialog: false,
				innerVisible: false,
				isShowPopup: false,
				//图片采用base64位，为了兼容小程序，app，vue3
				// backgroundImg: background_image()
			}
		},
		computed: {
			backgroundImg() {
				return background_image()
			}
		},
		methods: {
			showNormalAlert() {
				let alert = this.$jj_alert('提示', '时间就像海绵里的水,\n只要愿挤总还是有的。', '知道了')
				let loading = this.$jj_loading()
				let that = this
				setTimeout(function() {
					loading.close()
					that.$jj_toast('已经更新 Alert 数据')
					//更新数据
					alert.update({
						isQuickClose: true, //是否开启快速关闭，设置true时，关闭时没有动画效果
						titleStyle: {
							'color': 'red',
							'font-size': '18px'
						},
						btns: [{
							title: "确定",
							activeBackground: '#2A8AFF',
							activeColor: "#fff",
							style: {
								'color': '#4CD964',
							},
							click: () => {
								console.log("点击-----确定")
							}
						}]
					})
				}, 2000)
			},
			showCustomAlert(type, isShowBtn = true, btnDirection = 'row', position = 'center') {
				let isUseHTMLString = false //是否将 message 属性作为 HTML 片段处理
				let message = "事实上确实是当我们失去的时候，才知道自己曾经拥有；但有没有注意到当有些东西来临的时候，我们已错过。"
				if (type === 'sheet') {
					isUseHTMLString = true
					message = "<strong>这是 <i id='test11'>HTML</i> 片段</strong>"
				} else {
					if (btnDirection !== 'row') {
						message += message
					}
				}
				let that = this
				let alert = this.$jj_alert({
					type: type, //弹窗的类型有alert和sheet
					position: position, //有center和bottom
					btnDirection: btnDirection, //按钮的排列方向,row和column
					width: '90%', //设置弹窗的宽度
					padding: '12px 15px', //设置内容的上下左右偏移
					maskColor: "rgba(0, 0, 0, 0.55)", //遮罩层的背景颜色
					touchClose: true, //点击背景图层，是否关闭弹框
					showClose: true, //是否显示右上角的关闭按钮
					radius: 10, //设置圆角
					// closeStyle: {
					// 	'height': '0.85rem',
					// 	'width': '0.85rem'
					// },
					title: '提示', //标题
					titleStyle: {
						'color': '#fb2408',
						'font-size': '20px'
					}, //标题的样式
					isUseHTMLString: isUseHTMLString, //是否将 message 属性作为 HTML 片段处理
					message: message, //内容
					messageStyle: {
						"justify-content": 'left',
						"display": "flex",
						"color": '#8a8a8a',
						'text-align': 'left',
						'maxHeight': '100px', //内容的最大高度
						'overflow': 'auto', //如果文本高度大于maxHeight就以滚动形式显示
					}, //内容的样式
					btns: isShowBtn === false ? [] : [{
						title: "Cancel",
						activeBackground: '#2A8AFF',
						activeColor: "#fff",
						click: () => {
							console.log("点击Cancel")
						}
					}, {
						title: "Destructive",
						style: {
							'color': 'red',
							'font-size': '15px',
							height:'44px',
						},
						touchClose: false, //点击按钮时，是否自动关闭弹窗
						click: () => {
							console.log("点击Destructive")
							//无动画关闭弹窗
							alert.close(false)
							uni.switchTab({
								url: '/pages/index/index',
								animationDuration: 0,
							})
						}
					}, {
						title: "Confirm",
						activeBackground: '#2f2',
						style: {
							'background': '#2A8AFF',
							'color': '#fff',
						},
						touchClose: false, //点击按钮时，是否自动关闭弹窗
						click: function() {
							/*
							有时候需要进行网络请求处理后，在是否进行关闭弹窗
							这时候可以选择手动关闭弹窗
							注意：click这个方法，不要使用箭头函数=>方法，使用function方法，这时候this表示的当前按钮对象
							*/
							that.simulateNetworkRequest(this, alert)

						}
					}]
				})
			},

			simulateNetworkRequest(btn, alert) {
				//进行网络模拟，请求网络时候，禁止按钮再次点击，等结果回来后，在考虑是否启用按钮点击事件和是否关闭弹框
				this.count = this.count || 0
				this.$jj_toast('按钮被禁用,网络请求中...')
				btn.isDisable = true
				// console.log(btn)
				let that = this
				if (this.count % 2 === 0) {
					setTimeout(function() {
						//启用按钮点击事件
						btn.isDisable = false
						that.$jj_toast('请求失败，请点击按钮重新请求')
					}, 2000)
				} else {
					setTimeout(function() {
						that.$jj_toast('网络请求成功')

						/*closeAll方法是将所有的提示（alert,toast,loading）关闭后，执行的回调函数
						注意⚠️，在app平台下，如果配置了URL，那么回调函数是异步的，有一定的延时，
						它是等配置的URL页面（app-message-view）隐藏后，再执行的函数
						如果要‘关闭弹窗’并且使用navigateTo进行页面跳转，一定要放在closeAll回调函数内进行跳转，否则可能会导致路由丢失
						*/
						alert.closeAll(function() {
							uni.navigateTo({
								url: '/pages/demo/index',
								animationDuration: 0,
							})
						})
					}, 2000)
				}
				this.count += 1
			},
			showDialog() {
				this.isShowDialog = true
			},
			showPopup() {
				uni.hideTabBar()
				this.isShowPopup = true
			},
			closePopup() {
				uni.showTabBar()
				this.isShowPopup = false
			},
			showLoading(type) {

				if (type === 'default') {
					let loading = this.$jj_loading('加载中...')
					setTimeout(function() {
						loading.update('Update...')
					}, 2000)
					setTimeout(function() {
						loading.close()
					}, 4000)
				} else {
					const loadingData = {
						imageSize: {
							width: '32px',
							height: '32px'
						}, //设置图片的大小
						userInteractionEnabled: true, //是否启用用户交互，默认是false,启用后，遮罩层下的图层事件允许点击
						type: type //设置加载框的类型，有default、round、taichi三种
					}
					if (type === 'custom') {
						// loadingData['imageUrl'] = require('../../static/loading_custom.png') //图片链接
						//图片采用base64位，为了兼容小程序，app，vue3
						loadingData['imageUrl'] = loading_custom()
						loadingData['background'] = '#fff' //设置弹框内容的背景色
						loadingData['width'] = '120px'
						loadingData['message'] = '自定义Loading' //自定义文本
						loadingData['messageStyle'] = {
							color: '#2A8AFF',
							'font-size': '14px'
						} //修改文本样式
						loadingData['maskColor'] = 'rgba(0, 0, 0, 0.5)' //设置遮罩层的背景色
					} else if (type === 'round') {
						loadingData['message'] = 'round...'
					} else if (type === 'taichi') {
						loadingData['message'] = 'taichi...'
					}
					let loading = this.$jj_loading(loadingData)
					setTimeout(() => {
						loading.close()
					}, 5000)
				}
			},
			showToast(type) {
				let message = '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈。。。'
				const toastData = {
					duration: -1, //不自动关闭，需要手动关闭
					radius: 3
				}
				if (type === 'custom') {
					//自定义
					toastData['message'] = message
					toastData['background'] = '#f24'
					toastData['maxWidth'] = '60%'
					toastData['messageStyle'] = {
						'color': '#fe2',
						'text-align': 'center'
					}
					toastData['padding'] = '20px'
					toastData["imageSize"] = {
						width: '60px',
						height: '60px'
					}
					// toastData["imageUrl"] = require('../../static/logo.png')
					toastData["imageUrl"] = logo()
					let toast = this.$jj_toast(toastData)
					setTimeout(function() {
						toast.close()
					}, 5000)

				} else if (type.length > 0) {

					//第一个参数为提示信息文本，第二个参数为提示类型，第三个参数为显示的时长
					this.$jj_toast(type, type, 1)
				} else {
					this.$jj_toast(message)
				}

			}

		}
	}
</script>



<style scoped>
	.flexColumnCenter {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.flexRow {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
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

	.image {
		height: 100%;
		width: 100%;
		background-repeat: no-repeat;
		background-size: contain;
	}
</style>
