<template>
	<div class="Fix">
		<router-link to="/Home">
		<div class="Menu">
			
			<span class="iconfont">&#xe627;</span>
			<p>首页</p>
			
		</div>
		</router-link>

		<router-link to="/MyStudy">
		<div class="Menu">
			
			<span class="iconfont">&#xe603;</span>
			<p>我的学习</p>
			
		</div>
		</router-link>

		<router-link to="/Mine">
		<div class="Menu">
			<span class="iconfont">&#xe658;</span>
			<p>我的</p>
		</div>
	    </router-link>
		
		
		

	</div>
</template>


<script></script>



<style scoped>
	.Fix{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 3.3rem;
		background:#fff;
		border-top: 0.0625rem solid #ccc;
	}

	.iconfont{
		font-size: 1.7rem;

	}

	.Menu{
		width: 33.333%;
		height: 3.3rem;
		float: left;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.Menu p{
		font-size: 0.4rem;
		margin-top: 0.1rem;
	}

</style>