<template>
	<div @click = "close">
		<message-view @close = "close"></message-view>
	</div>
</template>

<script>
	import messageView from './index.vue'
	import {getRefList} from './ref.js'
	export default {
		name:'app-message-view',
		components:{
			messageView,
		},
		mounted(){
			this.currentIndex = this.getCurrentIndex()
		},
		data(){
			return{
				currentIndex:-99,
			}
		},
		methods:{
			getCurrentIndex(){
				let routes = getCurrentPages()||[]; // 获取当前打开过的页面路由数组
				let index = routes.length - 1 //上一页
				if(index > -1){
					return index
				}
				return -99
			},
			close(type){
				let refList = getRefList()
				let back = refList.every(item => item.isShow===false)
				console.log('--===')
				if(back){
					//计算返回的页数 = 总页数 - 当前页数
					let delta = getCurrentPages().length - this.currentIndex
					console.log('delta-----',delta)
					uni.navigateBack({
						delta:delta //返回的页数
					})
				}
			}
		},
	}
</script>

<style>
	page {
		background: transparent;
		background-color: transparent;
	}
</style>
