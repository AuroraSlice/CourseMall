<template>
	<div>
		<Header></Header>
		<Swiper></Swiper>
		<Icons></Icons>

	</div>
	
</template>

<script>
	import Header from './pages/header.vue'
	import Swiper from './pages/swiper.vue'
	import Icons from './pages/icons.vue'
	export default{
		components:{
			Header,
			Swiper,
			Icons
		}
	}
</script>

<style>
	

</style>