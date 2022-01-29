<template>
	<div>
		<update-version v-if="type === 'updateVersion'" :customData="customData" @close = "close"></update-version>
	</div>
</template>

<script>
	import updateVersion from './update-version-alert.vue'
	export default {
		components:{
			updateVersion
		},
		props:{
			customData:{
				type:Object,
				default:function(){
					return{type:''}
				}
			}
		},
		computed:{
			type(){
				return this.customData.type || ''
			}
		},
		methods:{
			close(){
				this.$emit('close')
			}
		}
	}
</script>

<style>
</style>
