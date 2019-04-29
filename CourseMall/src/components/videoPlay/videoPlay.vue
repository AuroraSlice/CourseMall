<template>
	<div>
	<videoPlay></videoPlay>
	<center></center>
	<page></page>
	<Buy></Buy>
	</div>
</template>

<script>
	import videoPlay from "./pages/plays.vue"
	import center from "./pages/center.vue"
	import page from "./pages/page.vue"
	import Buy from "./pages/Buy.vue"

	export default{
		components:{
			videoPlay,
			center,
			page,
			Buy
		}
	}
</script>

<style scoped>
	
</style>