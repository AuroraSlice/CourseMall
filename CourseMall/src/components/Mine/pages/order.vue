<template>
	<div class="header">
	<router-link to="/Mine">
		<div class="header-left">
			<span class="iconfont">
				&#xe600;
			</span>
		</div>
	</router-link>
		
		<div class="header-search">
			
			<button>我的订单</button>
			
		</div>

		<div class="header-right">
			<span class="iconfont">
				&#xe639;
			</span>
		</div>
	</div>
</template>

<script></script>

<style scoped>
	.header{
		display: flex;
		height: 3rem;
	}

	.header-left{
		padding: 1rem 0.4rem;
	}

	.header-right{
		padding: 0.7rem 0.3rem;
	}

	.header-search{
		display: inline-block;
		
		flex: 1;


	}

	.header-search button{
		width: 100%;
		height: 2rem;
		margin-top: 0.5rem;
		border-radius: 1rem;
		outline: none;
		border: 1px solid transparent;
	}

</style>