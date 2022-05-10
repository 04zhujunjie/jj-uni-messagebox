## 效果图
![image](https://github.com/04zhujunjie/jj-uni-messagebox/blob/main/screenshot/jj-messagebox.gif)
#### 优势
---
1、兼容H5,小程序，App    
2、app可以覆盖原生组件（导航栏，tabBar, 地图，播放器等）   
3、可以在任意的.js文件调用   
4、可以根据业务需求定制全局的alert弹窗
#### 注意
---
1、只适用uni-app项目，如果是其他H5网页的Vue项目可以使用 [jj-messagebox](https://github.com/04zhujunjie/jj-messagebox)   
2、如果使用nvue，以getApp().globalData.$jj_alert形式调用弹框   
3、小程序无法覆盖原生的导航栏和tabBar,并且需要在显示弹窗的页面，手动引入jj-messagebox/messageView/index.vue 组件，否则无法显示弹窗    


### 安装
---
下载该项目，将项目jj-messagebox文件夹（路径：pages/components/jj-messagebox）拷贝到项目中

### 使用
-------
在main.js文件全局引入

#### 1、H5
```
import installPlugin from 'pages/components/jj-messagebox/messageView/index.js'
installPlugin(Vue)

```
#### 2、小程序
小程序因为无法动态插入视图元素，所以需要显示弹框的页面中，手动引入jj-messagebox/messageView/index.vue 组件
，一个页面只需要引用一次即可，建议放在每个页面的根元素，该项目是放在base-view根组件中。
```
import baseView from 'pages/baseView/index.vue'
Vue.component('base-view', baseView)
import installPlugin from 'pages/components/jj-messagebox/messageView/index.js'
installPlugin(Vue)

```

#### 3、App
app有两种使用方式，1、和小程序的用法一样，但是无法覆盖原生组件，2、配置跳转url页面，可以覆盖原生组件。   
如果两种方式都配置了，优先使用第二种，以下是第二种配置，使用app-message-view（路径：pages/components/jj-messagebox/messageView/app-message-view）页面作为弹框显示页面

1）、在main.js文件引入，并且配置跳转路径
```
import installPlugin from 'pages/components/jj-messagebox/messageView/index.js'
//第二个参数只对App有效，App的遮罩层页面的跳转链接url，在pages.json文件那里配置，设置该参数可以覆盖原生组件（导航栏，tabbar,地图等）
installPlugin(Vue, '/pages/components/jj-messagebox/messageView/app-message-view')
```
2）、在pages.json文件中，配置跳转页面
```
{
	"path": "pages/components/jj-messagebox/messageView/app-message-view",
	"style": {
		// "navigationBarTextStyle":"white",//设置状态栏颜色
		"navigationStyle": "custom", // 取消本页面的导航栏
		"background": "transparent", // 背景透明
		"app-plus": {
			"animationType": "none", // 设置fade-in淡入动画，为最合理的动画类型
			"background": "transparent", // 背景透明
			"backgroundColor": "transparent", // 背景透明
			"webviewBGTransparent": true,
			"mask": "none",
			"popGesture": "none" // 关闭IOS屏幕左边滑动关闭当前页面的功能

		}
	}
}
```

3）、自定义其他遮罩层，可以参照popup-view.vue文件（路径：pages/app/popup-view），主要需要进行以下两点配置    
    
  1、在popup-view设置背景样式为透明，注意：不要使用scoped    
  
   ```
 <style>
	page{
		background: transparent;
		background-color: transparent;
	    }
 </style>
   ```
   2、在pages.json文件中，配置popup-view跳转页面
 ```
 {
	"path": "pages/app/popup-view",
	"style": {
		// "navigationBarTextStyle":"white",//设置状态栏颜色
		"navigationStyle": "custom", // 取消本页面的导航栏
		"background": "transparent", // 背景透明
		"app-plus": {
			"animationType": "none",
			"background": "transparent", // 背景透明
			"backgroundColor": "transparent", // 背景透明
			"webviewBGTransparent": true,
			"mask": "none",
			"popGesture": "none" // 关闭IOS屏幕左边滑动关闭当前页面的功能

		}
	}
}
 ```

#### 4、三个平台（H5，小程序，App）一起使用

```
import baseView from 'pages/baseView/index.vue'
Vue.component('base-view', baseView)
import installPlugin from 'pages/components/jj-messagebox/messageView/index.js'
//第二个参数只对App有效，App的遮罩层页面的跳转链接url，在pages.json文件那里配置，设置该参数可以覆盖原生组件（导航栏，tabbar,地图等）
installPlugin(Vue, '/pages/components/jj-messagebox/messageView/app-message-view')

```
### 自定义全局alert
-------
如果提供的alert无法满足自己的需求，可以根据自己的需求进行自定义，可参照update-version-alert.vue，主要有以下步骤：		  

1、自定义一个type标识，不能是alert和sheet，如updateVersion，在自定义的组件中定一个customData来接收数据，		  
按钮的点击事件通过custom-alert.vue回调到jj-alert.vue处理，否则在小程序上，按钮点击事件无法捕捉到。  	
在custom-alert.vue文件中引入自定义的组件		

```
<update-version v-if="customData.type === 'updateVersion'" @clickBtn = "clickBtn" :customData="customData"></update-version>
```

2、如何进行数据传递，通过customDataObj对象属性进行传递，按钮通过btns数组属性进行传递，
如果要获取customData的实时数据，可以通过计算属性方法computed来获取,可参照update-version-alert.vue		
下面是如何调用自定义的组件

```
let updateAlert = alert({
			type:'updateVersion',//自定义type标识
			width:'280px',//设置弹窗的宽度
			background: 'transparent', //弹窗的背景
			priority:1000,//弹窗的优先级，数字越大，优先级就越高，在同一个页面，优先级低的弹窗不能覆盖掉优先级高的弹窗
			customDataObj:customDataObj,//自定义数据传参数
			btns:[ //自定义按钮
			    {
			     title: "以后再说",
			     style: {
				  ...btnStyle
				   },
			     click: () => {
				console.log("以后再说")
				  }
				}, 
			   {
			   title: "立即更新",
			   touchClose: false,//点击按钮时，是否自动关闭弹窗
			    activeBackground: '#2A8AFF',
			    activeColor: "#fff",
			    style: {
			    'background':'transparent',
			    'color':'#2A8AFF',
			      ...btnStyle
				},
			    click: () => {
				console.log("立即更新")
                              updateAlert.close()
				}
			    }
			 ]
			})
```

### 参数说明
---
alert，loading，toast，popup,dialog使用,可以参照 [jj-messagebox](https://github.com/04zhujunjie/jj-messagebox)
