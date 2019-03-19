<template>
	<div class="butBox">
		<router-link to="/Home">
			<input type="button" class="but" value="登录">
		</router-link>
		<p class="check">忘记密码？</p>
	</div>
</template>

<script></script>

<style>
	.butBox{
		margin-top: 2rem;
	}

	.but{
		font-size: 1rem;
		background-color: #4CAF50;
		color: white;
		padding: 1rem 2rem;
		width: 24rem;
		text-align: center;
		text-decoration: none;
		display: inline-block;
    	cursor: pointer;
    	outline: none;
    	border-radius: 2rem;
	}

	.check{
		font-size: 0.5rem;
		color: #4CAF50;
		text-align: center;
		margin-top: 1rem;
		
	}

	.check:hover{
		cursor: pointer;
	}
</style>