<template>
	<div class = "flex-column update-box">
		<div v-if = 'backgroundImgUrl.length > 0' >
		    <div class = "background-image">
				<image class="image" :src="backgroundImgUrl"></image>
			</div>
		</div>
		<div class = "flex-column flexContentCenter title">
			{{customDataObj.title}}
		</div>
		<div class = "flex-column flex-left marginTop content" style = "font-weight: bold;">
			{{customDataObj.contentTitle}}
		</div>
		<div class = "flex-column flex-left">
			<div class = "content marginTop" v-for="(content,index) in contentList" :key="content" >
				{{content}}
			</div>
		</div>
		
		<div class = "flexContentSpaceAround marginTop" style="margin-top: 20px;">
			<div class = "btn-box" v-for="(btn,index) in btnsList" :key="index">
				<jj-button class="btn"  :btnObj="btn" @btnClick = "clickFn(btn)"></jj-button>
			</div>
		</div>
	</div>
</template>

<script>
	import jjButton from './jj-button.vue'
	export default {
		
		props:{
			customData:{
				type:Object,
				default:function(){
					return{type:''}
				}
			}
		},
		components:{
			jjButton
		},
		computed:{
			btnsList(){
				return this.customData.btns || []
			},
			customDataObj(){
				return this.customData.customDataObj || {}
			},
			contentList(){
			  return this.customDataObj.contentList || []
			},
			backgroundImgUrl(){
				return this.customDataObj.backgroundImgUrl || ''
			}
		},
		mounted() {
		   console.log('-----------')
		},
		data(){
			return{
			}
		},
		methods:{
			clickFn(btn) {
				if (btn.isDisable === true){
					//按钮禁用
					return
				}
				if (btn.touchClose != false) {
					this.$emit('close')
				}
				if (btn.click !== undefined) {
					if (btn.click instanceof Function) {
						btn.click()
					} else {
						console.warn("请传入回调函数")
					}
				}
			},
		}
	}
</script>

<style scoped>
	
	.update-box{
		padding: 20px 20px;
	}
	
	.flex-column{
		display: flex;
		position: relative;
		flex-direction: column;
	}
	
	.flex-left{
		justify-content: flex-start;
		align-items: flex-start;
	}
	.flexContentCenter {
		justify-content: center;
		align-items: center;
	}
	
	.flexContentSpaceAround {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	.marginTop {
		margin-top: 15px;
	}
	.title{
		font-size: 22px;
		text-align: center;
		color: #007AFF;
	}
	.content{
		font-size: 15px;
	}
	.btn-box {
		height: 2.5rem;
		display: flex;
		z-index: 888;
		font-size: 1.0625rem;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-right: 10px;
	}
	.btn{
		width: 80px;
		height: 100%;
		display: flex;
		padding: 0px 10px;
		border: 1px solid #C0C0C0;
		border-radius: 10px;
		
	}
	.background-image{
		display: flex;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
	.image {
		height: 100%;
		width: 100%;
		background-repeat: no-repeat;
		background-size: contain;
	}
</style>
