<template>
	<div class="SpecialBox">
	<p>专题</p>
	<div class="Special">

		<div class="SpecialItem"><img src="@/assets/picture/c1.png"></div>
		<div class="SpecialItem"><img src="@/assets/picture/c2.png"></div>
		<div class="SpecialItem"><img src="@/assets/picture/c3.png"></div>
		</div>
	</div>
</template>

<script>
	
	
    
</script>

<style scoped>
	.SpecialBox{
		width: 100%;
		height: 37rem;
		border-top: 1rem solid #f2f4f7;
	}

	.SpecialBox p{
		font-size: 1.2rem;
		margin:1rem 1rem;
		font-weight: bold;
	}
	.Special{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		
	}

	.Special img{
		width: 100%;
		height: 100%;
		
	}

	.SpecialItem{
		width: 90%;
		height: 10rem;
		margin-top: 1rem;
	}
</style>