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