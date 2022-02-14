<template>
	<div>
		<update-version v-if="customData.type === 'updateVersion'" @clickBtn = "clickBtn" :customData="customData" @close = "close"></update-version>
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
			close(){
				this.$emit('close')
			},
			clickBtn(index){
				this.$emit('clickBtn',index)
			},
		}
	}
</script>

<style>
</style>
