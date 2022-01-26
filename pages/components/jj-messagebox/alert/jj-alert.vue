<template>
	<div class="messagebox-shade" v-if = "isShow" :style="{'background-color':maskColor}" @click="touchClose?close():''">
		<div class="messagebox-main popIn" :class="[isCloseAlert?'popOut':'']" @click.stop="mainClick"
			:style="[{'animation-duration':duration+'s','width':width,'border-radius':radius+'px'}]">
			<div class="messagebox-content" :style="[{'padding':padding}]">
				<div v-if="showClose" class="rightTopClose"  @click="close">
					<image class = "closeImage" :style="[closeStyle]" :src="closeImgUrl"></image>
				</div>
				<div v-if="title.length > 0" class="flexCenter" style="font-size: 1.125rem;" :style="[titleStyle]">
					<span>{{title}}</span>
				</div>
				<div v-if="message.length > 0" class="flexCenter" style="margin-top: 10px;" :style="[messageStyle]">
					<span>{{message}}</span>
				</div>
			</div>
			<div v-if="type === 'alert'" class="jj-alert-btns flexContentSpaceAround">
				<jj-button class = "jj-alert-btn" v-for="(btn,index) in btns" :key="index" :style="[btnStyle(btn)]" :btnObj="btn" @btnClick = "clickFn(btn)">
				</jj-button>
				
			</div>
			<div v-else class="jj-alert-btns flexContentCenter" v-for="(btn,index) in btns" :key="index">
			  <jj-button  :btnObj="btn" :style="[btnStyle(btn)]" @btnClick = "clickFn(btn)"></jj-button>
			</div>
		</div>
	</div>
</template>

<script>
	import jjButton from './jj-button.vue'
	export default {
		name: 'jj-alert',
		components:{jjButton},
		data() {
			return {
				type: 'alert', //有alert和sheet
				duration: 0.25, //动画时间
				radius: 5, //圆角
				maskColor: "rgba(0, 0, 0, 0.35)", //遮罩层的背景颜色
				background: '#fff', //弹窗的背景
				touchClose: false, //点击背景图层，是否关闭弹框
				isShow:false, //是否显示弹框
				isClose:false, //关闭弹框
				closeStyle: {
					
				}, //右上方关闭按钮的样式
				closeImageUrl:'',
				showClose: false, //是否显示右上角的关闭按钮
				width: '85%', //内容显示框的大小，可以按照窗口的百分比指定大小，也可以是具体px,如300px
				padding: '20px',
				title: "",
				titleStyle: {},
				// titleStyle:{"justify-content":'left',"display": "flex","color":'#fe2','text-align':'left'},
				message: "",
				messageStyle: {},
				btns: [{
					title: "确认",
					activeBackground: "transparent",
					activeColor: '',
					style: {
						"color": '#000',
						'background': '#fff'
					},
					touchClose: true, //点击按钮，是否自动关闭弹框
					isDisable:false,
					click: () => {
						// console.log("按钮被点击")
					},
				}],
				isCloseAlert: false,
				originalData:null,
			}
		},
		computed:{
			closeImgUrl(){
				if((this.closeImageUrl||'').length > 0){
					return this.closeImageUrl
				}
				return require('../static/jj_close_icon.png') 
			},
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
			},
			close() {
				
				if (this.isCloseAlert) {
					return
				}
				this.isCloseAlert = true
				let that = this
				let time = that.duration*1000
				if (time > 20){
					time  = time-20
				}
				setTimeout(function() {
					that.isCloseAlert = false
					that.isShow = false
					that.$emit('close')
				}, time)

			},
			mainClick(e) {

			},
			btnStyle(btn) {
				let length = this.btns.length
				let style = {}
				style['width'] = 100 / length + '%'
				if (btn.style instanceof Object) {
					//样式的合并
					Object.assign(style, btn.style)
				}
				if (this.type === 'sheet') {
					style['flex-direction'] = 'column'
					style['width'] = '100%'
					style['border-right'] = '0px'
				}
				return style
			},
			clickFn(btn) {
				if (btn.isDisable === true){
					//按钮禁用
					return
				}
				if (btn.touchClose != false) {
					this.close()
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
	@import "../jj-messagebox.css";
	@import "../jj-pop.css";
	.messagebox-shade-box{
		width: 100%;
		height: 100%;
		position: absolute;
		bottom: 0;
		right: 0;
		top: -100px;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 999;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.flexCenter {
		display: flex;
		justify-content: center;
	}

	.flexContentCenter {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.flexContentSpaceAround {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.jj-alert-btns {

		box-sizing: border-box;
		border-top: 1px solid #E8E6EF;
	}

	.jj-alert-btn {
		flex: 1 0 auto;
		height: 2.75rem;
		display: flex;
		font-size: 1.0625rem;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-right: 1px solid #E8E6EF;
	}

	.jj-alert-btn:last-child {
		border-right: none;
	}
</style>
