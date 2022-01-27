<template>
	<div>
		<alert :ref="ref.kAlert" @show = "show(ref.kAlert)" @close = "close(ref.kAlert)"></alert>
		<toast :ref="ref.kToast" @show = "show(ref.kToast)" @close = "close(ref.kToast)"></toast>
		<loading :ref="ref.kLoading" @show = "show(ref.kLoading)" @close = "close(ref.kLoading)"></loading>
		<slot></slot>
	</div>
</template>

<script>
	
	import {kToast,kAlert,kLoading} from './constant.js'
	import {refMessageObj,currentPageRoute,addRefObj,removeRefObj} from './ref.js'
	import toast from '../toast/jj-toast.vue'
	import alert from '../alert/jj-alert.vue'
	import loading from '../loading/jj-loading.vue'
	
	export default {
		name:'message-view',
		components:{
			toast,
			alert,
			loading,
		},
		data(){
			return{
				ref:{
					kToast,
					kAlert,
					kLoading,
				},
			}
		},
		mounted() {
			this.addRef()
		},
		methods:{
			addRef(){
				let route = currentPageRoute()
				let refObj = refMessageObj()
				if(route.length > 0 && refObj[route] !== undefined){
					return
				}
				for (let key in this.ref) {
					let refValue = this.ref[key]
					addRefObj(refValue,this.$refs[refValue])
				}
			},
			show(type){
				this.$emit('show',type)
			},
			close(type){
				this.$emit('close',type)
			},
		},
		beforeDestroy() {
			removeRefObj()
		},
	}
</script>

<style>
</style>
