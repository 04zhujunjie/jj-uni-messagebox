<template>
	<div class = "flexColumnCenter">
		<button class="btn marginTopBottom" @click="showAlert">
			showAlert
		</button>
		<button class="btn marginTopBottom" @click="showPopup">
			showPopup
		</button>
		<map class="marginTopBottom" style="width: 100%;height: 200px;"></map>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
		},
		onLoad() {
	
		},
		methods: {
			showAlert(){
				//#ifdef APP-PLUS
				this.$jj_alert('提示', '时间就像海绵里的水,\n只要愿挤总还是有的。', '知道了')
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
