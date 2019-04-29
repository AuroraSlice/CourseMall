<template>
	<div class="MineHeader">
		<div class="MinePic"><span class="iconfont">&#xe63a;</span></div>
		<div class="MineLogin">
			<p>注销/切换</p>
		</div>
	</div>
</template>

<script></script>

<style scoped>
	.MineHeader{
		width: 100%;
		height: 5rem;
		border-bottom: 0.0625rem solid #ccc;
		
	}

	.MinePic{
		float: left;
		width: 20%;
		height: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.MinePic span{
		font-size: 2.5rem;
	}

	.MineLogin{
		width: 80%;
		height: 5rem;
		float: left;
		font-size: 1.15rem;
		display: flex;
		align-items: center;
	}
</style>