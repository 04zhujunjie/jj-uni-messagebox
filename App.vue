<script>
	import alert from './pages/components/jj-messagebox/messageView/alert.js'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			setTimeout(function(){
				
				alert({
					type:'updateVersion',
					showClose: true, //是否显示右上角的关闭按钮
					customDataObj:{
						title:'发现新版本',
						contentTitle:'更新内容:',
						backgroundImgUrl:require('./static/background_image.jpeg'),
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
								'padding':'0px 15px',
								'border': '1px solid #C0C0C0',
								'border-radius': '10px',
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
								'padding':'0px 15px',
								'color': '#007AFF',
								'font-size': '15px',
								'border': '1px solid #C0C0C0',
								'border-radius': '10px',
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
