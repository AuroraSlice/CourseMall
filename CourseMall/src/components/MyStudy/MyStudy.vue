<template>
	<div>
		<MyHeader></MyHeader>
		<CourseCenter></CourseCenter>
		<Fix></Fix>
	</div>
</template>

<script>
	import MyHeader from './pages/MyHeader.vue'
	import Fix from '../Home/pages/Fix.vue'
	import CourseCenter from './pages/courseCenter'

	export default{
		components:{
			MyHeader,
			Fix,
			CourseCenter
		}
	}
</script>

<style></style>