<template>
	<div v-if = "isShow">
		<template v-if="position==='bottom' || type === 'sheet'">
				<div class="messagebox-shade"  style="justify-content:end;align-items: flex-end;" :style="[{'background-color':maskColor}]" @touchmove.stop = "" @click="touchClose?close():''">
					<div class="messagebox-main fadelogIn" @click.stop="mainClick" :class="[isCloseAlert?'fadelogOut':'']"  
					style = "margin:0px;border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;" 
					:style="[{'animation-duration':duration+'s','width':alertWidth,'max-height':maxHeight,'background':background,'border-top-left-radius':radius+'px','border-top-right-radius':radius+'px'}]">
						<div class="messagebox-content" :style="[{'padding':padding}]">
							<div v-if = "!isCustomType">
								<div v-if="title.length > 0" class="flexCenter" style="font-size: 1.125rem;" :style="[titleStyle]">
									<span>{{title}}</span>
								</div>
								<div v-if="message.length > 0" class="flexCenter" style="margin-top: 10px;" :style="[messageStyle]">
									<span>{{message}}</span>
								</div>
							</div>
							<div v-if="showClose" class="rightTopClose"  @click="close">
								<image class = "closeImage" :style="[closeStyle]" :src="closeImgUrl"></image>
							</div>
						</div>
						<div v-if = "!isCustomType">
							<div v-if="buttonDirection === 'row'" class="jj-alert-btns flexContentSpaceAround">
								<jj-button class = "jj-alert-btn" v-for="(btn,index) in btns" :key="index" :style="[btnStyle(btn)]" :btnObj="btn" @btnClick = "clickFn(btn)">
								</jj-button>
								
							</div>
							<div v-else class="jj-alert-btns flexContentCenter" v-for="(btn,index) in btns" :key="index">
							  <jj-button  class="jj-sheet-btn" :btnObj="btn" :style="[btnStyle(btn)]" @btnClick = "clickFn(btn)"></jj-button>
							</div>
						</div>
						<div v-else>
							<custom-alert @clickBtn = "clickCustomAlertBtn" :customData="customData"></custom-alert>
						</div>
					</div>
				</div>

		</template>
		
		<template v-else>
				<div class="messagebox-shade" v-if = "isShow" :style="{'background-color':maskColor}" @touchmove.stop = ""  @click="touchClose?close():''">
					<div class="messagebox-main popIn" :class="[isCloseAlert?'popOut':'']" @click.stop="mainClick"
						:style="[{'animation-duration':duration+'s','width':alertWidth,'border-radius':radius+'px','background':background}]">
						<div class="messagebox-content" :style="[{'padding':!isCustomType?padding:'0'}]">
							<div v-if = "!isCustomType">
								<div v-if="title.length > 0" class="flexCenter" style="font-size: 1.125rem;" :style="[titleStyle]">
									<span>{{title}}</span>
								</div>
								<div v-if="message.length > 0" class="flexCenter" style="margin-top: 10px;" :style="[messageStyle]">
									<span>{{message}}</span>
								</div>
							</div>
							<div v-if="showClose" class="rightTopClose"  @click="close">
								<image class = "closeImage" :style="[closeStyle]" :src="closeImgUrl"></image>
							</div>
						</div>
						<div v-if = "!isCustomType">
							<div v-if="buttonDirection === 'row'" class="jj-alert-btns flexContentSpaceAround">
								<jj-button class = "jj-alert-btn" v-for="(btn,index) in btns" :key="index" :style="[btnStyle(btn)]" :btnObj="btn" @btnClick = "clickFn(btn)">
								</jj-button>
								
							</div>
							<div v-else class="jj-alert-btns flexContentCenter" v-for="(btn,index) in btns" :key="index">
							  <jj-button  class="jj-sheet-btn" :btnObj="btn" :style="[btnStyle(btn)]" @btnClick = "clickFn(btn)"></jj-button>
							</div>
						</div>
						<div v-else>
							<custom-alert @clickBtn = "clickCustomAlertBtn" :customData="customData"></custom-alert>
						</div>
						
					</div>
				</div>
		</template>
	</div>

	
</template>

<script>
	import jjButton from './jj-button.vue'
	import customAlert from './custom-alert.vue'
	export default {
		name: 'jj-alert',
		components:{jjButton,customAlert},
		data() {
			return {
				type: 'alert', //有alert和sheet
				position:'center', //有center和bottom
				btnDirection:'row',//按钮的排列方向,row和column
				priority:0,//弹窗的优先级，数字越大，优先级就越高，在同一个页面，优先级低的弹窗不能覆盖掉优先级高的弹窗
				maxHeight:'80%',
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
				width: '', //内容显示框的大小，可以按照窗口的百分比指定大小，也可以是具体px,如300px
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
				customDataObj:{},//自定义数据
			}
		},
		computed:{
			closeImgUrl(){
				if((this.closeImageUrl||'').length > 0){
					return this.closeImageUrl
				}
				return require('../static/jj_close_icon.png') 
			},
			isCustomType(){
				if (this.type === 'alert' || this.type === 'sheet'){
					return false
				}
				return true
			},
			customData(){
				let data = this.$data
				return data
			},
			buttonDirection(){
				if(this.type === 'sheet'){
					return 'column'
				}
				if(this.btnDirection.length > 0 && (this.btnDirection==='row'||this.btnDirection==='column')){
					return this.btnDirection
				}
				return 'row'
			},
			alertWidth(){
				if(this.type === 'sheet'){
					return '100%'
				}
				if(this.width.length > 0){
					return this.width
				}else{
					if(this.position === 'bottom'){
						return '100%'
					}else{
						return '85%'
					}
				}
			  return '100%'
			},
		},
		methods: {
			moveHandle(){
			  // return false	
			},
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
				// console.log(this.$data)
			},
			update(data = {}){
				Object.assign(this.$data,data)
			},
			close() {
				
				if (this.isCloseAlert) {
					return
				}
				this.isCloseAlert = true
				let that = this
				let time = that.duration*1000
				if (time > 30){
					time  = time-30
				}
				setTimeout(function() {
					that.isShow = false
					that.$nextTick(function(){
						that.isCloseAlert = false
					})
					that.$emit('close')
				}, time)

			},
			mainClick() {

			},
			btnStyle(btn) {
				let length = this.btns.length
				let style = {}
				style['width'] = 100 / length + '%'
				if (btn.style instanceof Object) {
					//样式的合并
					Object.assign(style, btn.style)
				}
				if (this.buttonDirection === 'column') {
					style['flex-direction'] = 'column'
					style['width'] = '100%'
					style['border-right'] = '0px'
				}
				return style
			},
			clickCustomAlertBtn(index){
				let btn = this.btns[index]
				if(btn !== undefined){
					this.clickFn(btn)
				}
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
	@import "../jj-fadelog.css";
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
	.jj-sheet-btn{
		flex: 1 0 auto;
		height: 2.75rem;
		display: flex;
		font-size: 1.0625rem;
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
