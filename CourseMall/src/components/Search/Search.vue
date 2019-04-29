<template>
	<div>
		<SearchHeader></SearchHeader>
		<SearchCenter></SearchCenter>
	</div>
</template>

<script>
	import SearchHeader from './pages/SearchHeader.vue'
	import SearchCenter from './pages/SearchCenter.vue'
	export default{
		components:{
			SearchHeader,
			SearchCenter
		}
	}
</script>

<style scoped>
	
</style>