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
2、在.js或者.nvue文件中可以用getApp().globalData.$jj_alert形式调用弹框   
3、小程序无法覆盖原生的导航栏和tabBar,并且需要在显示弹窗的页,引入jj-messagebox/messageView/index.vue 组件，否则无法显示弹窗    


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
小程序需要显示弹框，需引用jj-messagebox/messageView/index.vu组件
，一个页面只需要引用一次即可，引用方式有以下两种：    

1）、引用方式一：在需要显示弹窗页面手动注册弹窗组件，并引用弹窗组件，或者创建一个页面根组件（如项目中base-view组件），在根组件进行注册弹窗组件
将根组件注册成全局组件，需要显示的弹窗页面用根组件base-view进行包裹起来，如果页面中很多页面需要用到弹窗，建议使用根组件包裹的形式，方便维护。

```
import baseView from 'pages/baseView/index.vue'
Vue.component('base-view', baseView)
import installPlugin from 'pages/components/jj-messagebox/messageView/index.js'
installPlugin(Vue
```
2）、引用方式二：该方式支持vue2，不支持vue3，它是通过配置vue.config.js文件，在编译模版时，获取页面路径，通过页面路径筛选，动态将全局注册弹窗组件messageView注入到要显示的页面中。如果是旧项目并且很多页面使用弹窗，可以使用该方式。

在main.js注册全局组件
```
import messageView from 'pages/components/jj-messagebox/messageView/index.vue'
//注册全局组件，在vue.config.js文件进行配置，根据需求动态插入到小程序的页面中
Vue.component('messageView', messageView
```
vue.config.js文件配置
```
module.exports = {
	chainWebpack: config => {
		config.module.rule('vue').use('vue-loader').loader('vue-loader').tap(options => {
			const compile = options.compiler.compile
			options.compiler.compile = (template, ...args) => {
				//只支持小程序平台，在小程序平台resourcePath才有值，h5和app平台的值为undefined
				const resourcePath = args[0].resourcePath
				if (resourcePath !== undefined) {
					// console.log(" 编译模版的页面路径：-------", resourcePath)
					//根据页面路径进行筛选，在pages/mp目录的.vue文件进行动态插入弹窗组件，
					if (resourcePath.indexOf('pages/mp') !== -1) {
						//小程序在编译模版前，动态插入messageView组件视图，messageView要注册为全局组件
						template = template.replace(/[\s\S]+?<[\d\D]+?>/, _ => `${_}
		       <messageView></messageView>
		     `)
					}
				}
				return compile(template, ...args)
			}
			return options
		})

	}
}
```

#### 3、App
app有两种使用方式，1、和小程序的用法1一样，但是无法覆盖原生组件，2、配置跳转url页面，可以覆盖原生组件。   
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
			"animationType": "fade-in", // 设置fade-in淡入动画，为最合理的动画类型
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
			"animationType": "fade-in",
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
let updateAlert = getApp().globalData.$jj_alert({
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
