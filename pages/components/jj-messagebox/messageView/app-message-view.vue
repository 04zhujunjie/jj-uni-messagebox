<template>
	<div>
		<message-view @close="close"></message-view>
	</div>
</template>

<script>
	import messageView from './index.vue'
	import {
		getRefList,
		route_uidKey
	} from './ref.js'
	export default {
		name: 'app-message-view',
		components: {
			messageView,
		},
		mounted() {
			this.setupRouteUid()
		},
		onBackPress(options) {
			if (options.from === 'navigateBack') {
				return false;
			}
			// 返回值为 true, 表示阻止该返回事件,页面不会被销毁，不执行默认的返回
			return !this.isBack;
		},
		data() {
			return {
				route_uid: '',
				isBack:false,
			}
		},
		methods: {
			setupRouteUid() {
				let routes = getCurrentPages() || []; // 获取当前打开过的页面路由数组
				let currentPage = routes[routes.length - 1]
				this.route_uid = route_uidKey(currentPage)
				// console.log('===------',this.route_uid)
			},
			getCurrentIndex() {
				let routes = getCurrentPages() || []; // 获取当前打开过的页面路由数组
				for (let i = routes.length - 1; i >= 0; i--) {
					let page = routes[i]
					const route_uid = route_uidKey(page)
					if (this.route_uid === route_uid) {
						return i
					}
				}
				return -99
			},
			close(type) {
				let refList = getRefList(this.route_uid)
				let back = refList.every(item => item.isShow === false)
				// console.log('--===')
				if (back) {
					this.backPage()
				}
			},
			backPage(completeFun) {
				if(this.isBack){
					return
				}
				this.isBack = true
				//计算返回的页数 = 总页数 - 当前页数
				let pages = getCurrentPages()
				let currentIndex = this.getCurrentIndex()
				let delta = pages.length - currentIndex
				// console.log('--++++---')
				uni.navigateBack({
					delta: delta, //返回的页数
					animationDuration: 0, //窗口关闭动画的持续时间
					animationType: 'fade-out', //窗口关闭的动画效果
					complete: () => {
						if (typeof completeFun === 'function') {
							setTimeout(() => {
								//需要做延时操作，否则在路由跳转的时候可能会丢失路由
								completeFun()
							}, 250)
						}
					}
				})
			},
		},
		destroyed() {
			// console.log('---destroyed-----')
		},
		unmounted() {
			// console.log('----unmounted----')
		}
	}
</script>

<style>
	page {
		background: transparent;
		background-color: transparent;
	}
</style>
