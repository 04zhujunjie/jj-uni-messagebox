<template>
	<div class = "header-box">
		<button class="btn" @click="showToast('')">toast</button>
		<button class="btn" @click="showToast('success')">toast-success</button>
	</div>
</template>

<script>
	import jj_toast from '../components/jj-messagebox/messageView/toast.js'
	export default {
		methods:{
			showToast(type){
				let message = '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈。。。'
				if(type.length > 0) {
					//第一个参数为提示信息文本，第二个参数为提示类型，第三个参数为显示的时长
					this.$jj_toast(message,type,1)
				}else{
					jj_toast(message)
				}
			},
		}
	}
</script>

<style scoped>
	.header-box{
		display: flex;
		flex-direction: row;
		margin-top: 20px;
		padding: 20px 0px;
	}

	.btn {
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
