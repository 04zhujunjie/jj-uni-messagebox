<template>
	<div class = "jj-btn-box" :style = "[btnStyle()]" @click.stop="click()" @touchstart="touchstart()" @touchend="touchend()">
		{{btnObj.title}}
	</div>
</template>

<script>
	export default {
		props:{
			btnObj:{
				type:Object,
				default:function(){
					return {
					title: "",
					activeBackground: "transparent",
					activeColor: '',
					style: {
						"color": '#000',
						'background': '#fff'
					},
					touchClose: true, 
					isDisable:false,
					click: () => {
						
					},
				}
				}
			}
		},
		data(){
			return {
				isTouching:false,
			}
		},
		methods:{
			click(){
				this.$emit('btnClick')
			},
			
			btnStyle() { 
				let style = {
					background:'#fff',
					color:'#000'
				}
				if (this.btnObj.style instanceof Object) {
					//样式的合并
					Object.assign(style, this.btnObj.style)
				}
				const activeBackground = this.btnObj.activeBackground || 'rgba(0, 0, 0, 0.1)'
				const activeColor = this.btnObj.activeColor || ''
				if (this.isTouching){
					if (activeBackground.length > 0) {
						style.background = activeBackground
					}
					if (activeColor.length > 0) {
						style.color = activeColor
					}
				}
				return style
			},
			
			touchstart(){
				this.isTouching = true
			},
			touchend(){
				this.isTouching = false
			},
		},
	}
</script>

<style scoped>
	.jj-btn-box {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

</style>
