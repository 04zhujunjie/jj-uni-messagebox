<script>
	import alert from './pages/components/jj-messagebox/messageView/alert.js'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			setTimeout(function(){
				
				alert({
					type:'updateVersion',
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
							activeBackground: '#2A8AFF',
							activeColor: "#fff",
							click: () => {
								console.log("点击Cancel")
							}
						}, {
							title: "立即更新",
							style: {
								'color': 'red',
								'font-size': '15px'
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
