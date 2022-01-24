<template>
	<base-view>
		<view class="content">
			<view>
				<header-view></header-view>
				<button style="margin-top: 20px;" @click="goDemo()">Demo</button>
			</view>
			
		</view>
	</base-view>
</template>

<script>
	import headerView from './header.vue'
	export default {
		components:{
			headerView,
		},
		data() {
			return {
			}
		},
		mounted() {
			
		},
		onLoad() {

		},
		methods: {
			goDemo(){
				uni.navigateTo({
				    url: '/pages/demo/index'
				})
			},
		}
	}
</script>

<style>
	page {
		background: #2C405A;
		/* background-color: transparent; */
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.coverView-box{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 99999;
		background: rgba(0, 0, 0, 0.5);
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
</style>
