<template>
	<div class = "flex-column update-box">
		<div v-if = 'backgroundImgUrl.length > 0' >
		    <div class = "background-image">
				<image class="image" :src="backgroundImgUrl"></image>
			</div>
		</div>
		<div class = "flex-column flexContentCenter title" :style="[{'margin-top':backgroundImgUrl.length > 0?'100px':'0'}]">
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
				<jj-button class="btn" :btnObj="btn" @btnClick = "clickFn(index)"></jj-button>
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
			//通过计算属性，来获取最新数据
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
		},
		data(){
			return{
			}
		},
		methods:{
			clickFn(index) {
				//需要将按钮的点击事件，放在jj-alert.vue文件处理，否则在小程序上点击事件回调函数会失效
				this.$emit('clickBtn',index)
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
		font-size: 1.0625rem;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-right: 10px;
	}
	.btn{
		height: 100%;
		display: flex;
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
