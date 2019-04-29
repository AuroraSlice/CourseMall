<template>
	<div class="header">
	<router-link to="/Home">
		<div class="header-left">
			<span class="iconfont">
				&#xe600;
			</span>
		</div>
	</router-link>
		
		<div class="header-search">
			
			<input class="iconfont" type="search" value="行业专家亲授，直击就业痛点">
		</div>
		<div class="header-right">
			<p>搜索</p>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.header{
		display: flex;
		height: 3rem;
		background:#f6f6f6;
	}

	.header-left{
		width: 10%;
		padding: 1rem 0.4rem;
	}

	.header-right{
		width: 10%;
		padding: 0.8rem 0.3rem;
	}

	.header-right p{
		color: #2CC17B;
	}

	.header-search{
		display: inline-block;
		width: 80%;
		flex: 1;


	}

	.header-search input{
		width: 95%;
		height: 2rem;
		margin-top: 0.5rem;
		border-radius: 1rem;
		color: #3C4A55;
		border: 1px solid #ccc;
	}

	input::-webkit-input-placeholder {
       color: #aab2bd;
       font-size: 12px;
    }


</style>