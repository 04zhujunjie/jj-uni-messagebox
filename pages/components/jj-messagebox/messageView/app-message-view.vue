<template>
	<message-view @show = "show" @close = "close"></message-view>
</template>

<script>
	import messageView from './index.vue'
	import {getRefList} from './ref.js'
	export default {
		name:'app-message-view',
		components:{
			messageView,
		},
		mounted() {
		},
		data(){
			return{
				
			}
		},
		methods:{
			show(type){
				
			},
			close(type){
				let refList = getRefList()
				let back = refList.every(item => item.isShow===false)
				if(back){
					uni.navigateBack({
						
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
