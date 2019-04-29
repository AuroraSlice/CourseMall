<template>
	<div>
		<MineHeader></MineHeader>
		<MineCenter></MineCenter>
		<Fix></Fix>
	</div>
</template>

<script>
	import MineHeader from './pages/MineHeader.vue'
	import MineCenter from './pages/MineCenter.vue'
	import Fix from '../Home/pages/Fix.vue'

	export default{
		components:{
			MineHeader,
			Fix,
			MineCenter
		}
		
	}
</script>

<style scoped></style>