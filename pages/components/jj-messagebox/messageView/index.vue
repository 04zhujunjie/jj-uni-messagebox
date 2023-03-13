<template>
	<div>
		<jj-alert :ref="ref.kAlert" @show = "show(ref.kAlert)" @close = "close(ref.kAlert)"></jj-alert>
		<jj-toast :ref="ref.kToast" @show = "show(ref.kToast)" @close = "close(ref.kToast)"></jj-toast>
		<jj-loading :ref="ref.kLoading" @show = "show(ref.kLoading)" @close = "close(ref.kLoading)"></jj-loading>
		<slot></slot>
	</div>
</template>

<script>
	
	import {kToast,kAlert,kLoading} from './constant.js'
	import {refMessageObj,refRouteKey,addRefObj,removeRefObj} from './ref.js'
	import jjToast from '../toast/jj-toast.vue'
	import jjAlert from '../alert/jj-alert.vue'
	import jjLoading from '../loading/jj-loading.vue'
	
	export default {
		name:'message-view',
		components:{
			jjToast,
			jjAlert,
			jjLoading,
		},
		data(){
			return{
				ref:{
					kToast,
					kAlert,
					kLoading,
				},
				route_uid:'',
			}
		},
		mounted() {
			this.addRef()
		},
		methods:{
			addRef(){
				let refKey = refRouteKey()
				let refObj = refMessageObj()
				if(refKey.length > 0 && refObj[refKey] !== undefined){
					return
				}
				this.route_uid = refKey
				for (let key in this.ref) {
					let refValue = this.ref[key]
					let refV = this.$refs[refValue]
					refV.route_uid = refKey
					addRefObj(refValue,refV)
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
		beforeUnmount() {
			removeRefObj()
		}
	}
</script>

<style>
</style>
