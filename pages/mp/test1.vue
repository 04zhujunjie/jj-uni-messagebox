<template>
	<div></div>
</template>

<script>
	export default {
		mounted() {
			this.$jj_alert({
				title: '提示', //标题
				isUseHTMLString: true, //是否将 message 属性作为 HTML 片段处理
				message:"<span>该页面能显示弹窗,是因为在<span style='color:red;margin:0px 5px'>vue.config.js</span>配置文件，动态插入<span style='color:red;margin:0px 5px'>messageView</span>视图</span>",
			})
		},
	}
</script>

<style>
</style>