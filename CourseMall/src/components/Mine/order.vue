<template>
	<div>
		<Order></Order>
		<Order1></Order1>
		<Fix></Fix>
	</div>
</template>

<script>
	
	
	import Order from './pages/order.vue'
	import Order1 from './pages/order1.vue'
	import Fix from '../Home/pages/Fix.vue'
	export default{
		components:{
			
			Order,
			Order1,
			Fix
		}
		
	}
</script>

<style scoped></style>