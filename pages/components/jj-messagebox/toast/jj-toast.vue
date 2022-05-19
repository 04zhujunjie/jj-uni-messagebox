<template>
	<div class="messagebox-shade" v-if = "isShow"
		:style="[{'background-color':maskColor,'pointer-events': 'none'}]" @touchmove.stop = "">
		<div class="messagebox-main"
			:style="[{'width':'auto','minWidth':minWidth,'maxWidth':maxWidth,'background':background,'border-radius':radius+'px'}]">
			<div class="messagebox-content" :style="[{'padding':padding}]">
				<div v-if="imgUrl.length > 0" class="flexContentCenter">
					<div style="margin-bottom: 6px;" :style="[setImageSize]">
						<image class="image" :src="imgUrl"></image>
					</div>
				</div>
				<div class="flexContentCenter">
					<span class="message" :style="[messageStyle]">{{message}}</span>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import {success_icon,fail_icon,warn_icon} from '../static/image.js'
	export default {
		name: 'jj-toast',
		data() {
			return {
				type: '', //有success，fail，warn
				duration: 2.5, //动画时间
				radius: 5, //圆角
				isShow:false, //是否显示弹框
				isClose:false, //关闭弹框
				maskColor: "transparent", //遮罩层的背景颜色
				background: 'rgba(0, 0, 0, 0.8)', //弹窗的背景
				padding: '12px',
				imageSize: {
					width: '32px',
					height: '32px'
				},
				imageUrl: "",
				maxWidth: '80%', //弹窗的大小
				minWidth: '85px',
				message: "", //弹窗的内容
				messageStyle: {}, //内容的样式
				originalData:null,
			}
		},
		mounted() {

		},
		computed: {
			setImageSize() {
				let size = {}
				size.width = this.imageSize.width || '32px'
				size.height = this.imageSize.height || '32px'
				return size
			},
			//图片采用base64位，为了兼容小程序，app，vue3
			imgUrl() {
				if ((this.imageUrl || '').length > 0) {
					return this.imageUrl
				}
				if (this.type === 'success') {
					return success_icon()
				} else if (this.type === 'fail') {
					return fail_icon()
				} else if (this.type === 'warn') {
					return warn_icon()
				}
				return ''
			}
		},
		methods: {
			show(data={}){
			data['isShow'] = true
			let orData = Object.assign({},this.$data)
			delete orData['originalData']
			this.$emit('show')
			if (this.originalData === null){
				this.originalData = orData
				Object.assign(this.$data,data)
			}else{
				Object.assign(this.$data,this.originalData,data)
			}
				if (this.duration > 0){
					let that = this
					this.jj_time = setTimeout(function() {
						that.jj_time = null
						that.close()
					}, that.duration * 1000)
				}
			},
			update(data={}){
				Object.assign(this.$data,data)
			},
			close() {
				this.isShow = false
				this.$emit('close')
			},
		},
		beforeCreate() {
			if (this.jj_time !== null){
				clearTimeout(this.jj_time)
			}
		}
	}
</script>

<style scoped>
	@import "../jj-messagebox.css";

	.flexContentCenter {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.message {
		color: #FFFFFF;
		font-size: 14.5px;
		word-break: break-all;
		text-align: center;
		white-space: pre-wrap;
	}
</style>
