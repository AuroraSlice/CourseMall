<template>
	<div>
		<MyHeader></MyHeader>
		<Little></Little>
		<Fix></Fix>
	</div>
</template>

<script>
	import MyHeader from './pages/MyHeader.vue'
	import Fix from '../Home/pages/Fix.vue'
	import Little from './pages/Little.vue'

	export default{
		components:{
			MyHeader,
			Fix,
			Little
		}
	}
</script>

<style></style>