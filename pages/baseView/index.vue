<template>
	<div>
		<message-view></message-view>
		<slot></slot>
	</div>
</template>

<script>
	import messageView from '../components/jj-messagebox/messageView/index.vue'
	
	export default {
		name:'base-view',
		components:{
			messageView,
		},
		data(){
			return{
				
			}
		},
		mounted() {
			
		},
		methods:{

		},
		beforeDestroy() {
			
		},
	}
</script>

<style>
</style>
