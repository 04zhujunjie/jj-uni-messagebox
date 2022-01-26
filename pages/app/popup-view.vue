<template>
	<div>
		<jj-popup :visible="isShowPopup" @close="closePopup" :showClose="true"
			title="请选择" :titleStyle="{color:'red'}" :touchClose="false">
			<image slot = "backgroundContent" class = "image" :src = "backgroundImg"></image>
			<div style = "color: #007AFF;margin-top: 10px;"> 今天天气不错</div>
		</jj-popup>
	</div>
</template>

<script>
	import jjPopup from '../components/jj-messagebox/popup/jj-popup.vue'
	export default {
		components:{
			jjPopup
		},
		data() {
			return {
				isShowPopup:false,
				backgroundImg: require('../../static/background_image.jpeg')
			}
		},
		mounted() {
			this.isShowPopup = true
			
		},
		onLoad(options) {
		 //获取传过来的参数
	     console.log('------上一个页面传过来的参数-----',options)
		},
		methods: {
			closePopup(){
				uni.navigateBack({
				})
			}
		}
	}
</script>

<style>
	page {
		background: transparent;
		background-color: transparent;
	}
</style>

<style scoped>
	.image {
		height:100%;
		width:100%;
		background-repeat: no-repeat;
		background-size: contain;
	}
</style>
