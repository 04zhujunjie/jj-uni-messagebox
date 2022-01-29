<script>
	import alert from './pages/components/jj-messagebox/messageView/alert.js'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			setTimeout(function(){
				let  btnStyle = {
					'padding':'0px 15px',
					'border': '1px solid #C0C0C0',
					'font-size': '15px',
					'border-radius': '10px',
				}
				alert({
					type:'updateVersion',
					width:'280px',//设置弹窗的宽度
					background: 'transparent', //弹窗的背景
					customDataObj:{
						title:'发现新版本1.2.6',
						contentTitle:'更新内容:',
						backgroundImgUrl:require('./static/bg_custom_update.png'),
						contentList:[
							'1、修复部分bug',
							"2、新增新玩法",
							"3、优化"
						]
					},
					btns:[
						{
							title: "以后再说",
							style: {
								...btnStyle
							},
							click: () => {
								console.log("点击Cancel")
							}
						}, {
							title: "立即更新",
							activeBackground: '#2A8AFF',
							activeColor: "#fff",
							style: {
								 'background':'transparent',
								 'color':'#2A8AFF',
								 ...btnStyle
							},
							click: () => {
								console.log("点击Destructive")
							}
						}
					]
				})
			},2000)
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
