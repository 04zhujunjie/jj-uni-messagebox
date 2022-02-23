<template>
	<div>
		<update-version v-if="customData.type === 'updateVersion'" @clickBtn = "clickBtn" :customData="customData"></update-version>
	</div>
</template>

<script>
	import updateVersion from './update-version-alert.vue'
	export default {
		components:{
			updateVersion
		},
		props:{
			type:{
				type:String,
				default:''
			},
			customData:{
				type:Object,
				default:function(){
					return{type:''}
				}
			}
		},
		mounted() {	
		},
		methods:{
			clickBtn(index){
				//需要将按钮的点击事件，放在jj-alert.vue文件处理，否则在小程序上点击事件回调函数会失效
				this.$emit('clickBtn',index)
			},
		}
	}
</script>

<style>
</style>
