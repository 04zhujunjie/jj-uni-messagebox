<template>
	<div class = "mine-box">
		<demoPage></demoPage>
		<div class = "bottom-box" @click = "loadingUserInfo">获取用户信息</div>
	</div>

</template>

<script>
	import demoPage from '../demo/demo.vue'
	import requsetUserInfo from './request.js'

	export default {
		components:{demoPage},
		data(){
			return{
			}
		},
		methods:{
			loadingUserInfo(){
				requsetUserInfo()
			}
		}
	}
</script>



<style scoped>
	.mine-box{
		display: flex;
		flex-direction: column;
	}
	.bottom-box{
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		background: #2C405A;
		color: #fff;
		margin-top: 20px;
		height: 50px;
	}
</style>

