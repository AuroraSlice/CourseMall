<template>
	<div>
		<Header></Header>
		<Swiper></Swiper>
		<Icons></Icons>
		<GoodCourse></GoodCourse>
		<SpecialTopic></SpecialTopic>
		<Worker></Worker>
		<Fix></Fix>
	</div>
	
</template>

<script>
	import Header from './pages/header.vue'
	import Swiper from './pages/swiper.vue'
	import Icons from './pages/icons.vue'
	import GoodCourse from './pages/goodcourse.vue'
	import SpecialTopic from './pages/specialTopic.vue'
	import Worker from './pages/Worker.vue'
	import Fix from './pages/Fix.vue'
	export default{
		components:{
			Header,
			Swiper,
			Icons,
			GoodCourse,
			SpecialTopic,
			Fix,
			Worker
		}
	}
</script>

<style>
	

</style>