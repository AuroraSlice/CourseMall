<template>
	<div>
		<div class="First">
			<div class="Icon">
				<span class="iconfont">&#xe61b;</span>
			</div>
			<div class="IconContent">
				<p>开通VIP会员</p>
			</div>
		</div>
		<div>
			<div class="icons">
				<span class="iconfont">&#xe636;</span>
			</div>
			<router-link to="/Order">
			<div class="iconsContent">
				<p>我的订单</p>
				<div class="iconsPush">
					<span class="iconfont">&#xe61a;</span>
				</div>
			</div>
		</router-link>
			
		</div>

		<div>
			<div class="icons">
				<span class="iconfont">&#xe630;</span>
			</div>
			<div class="iconsContent">
				<p>我的优惠券</p>
				<div class="iconsPush">
				<span class="iconfont">&#xe61a;</span>
				</div>
			</div>
			
		</div>

		<div>
			<div class="icons">
				<span class="iconfont">&#xe601;</span>
			</div>
			<div class="iconsContent">
				<p>我的购物车</p>
				<div class="iconsPush">
				<span class="iconfont">&#xe61a;</span>
				</div>
			</div>
			
		</div>


		<div>
			<div class="icons">
				<span class="iconfont">&#xe602;</span>
			</div>
			<div class="iconsContent">
				<p>我的学习卡</p>
				<div class="iconsPush">
				<span class="iconfont">&#xe61a;</span>
				</div>
			</div>
			
		</div>

		<div>
			<div class="icons">
				<span class="iconfont">&#xe605;</span>
			</div>
			<div class="iconsContent">
				<p>分享赚学费</p>
				<div class="iconsPush">
				<span class="iconfont">&#xe61a;</span>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>



</script>

<style scoped>
	.First{
		width: 100%;
		height: 2rem;
	background-image: linear-gradient(-225deg, #FF2D3D 0%, #FF7544 100%);
	}

	.Icon span{
		font-size: 1.5rem;
	}

	.Icon{
		float: left;
		width: 20%;
		height: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.IconContent{
		float: left;
		width: 80%;
		height: 2rem;
		display: flex;
		align-items: center;
		color: white;
	}

	.icons{
		float: left;
		width: 20%;
		height: 3.5rem;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.icons span{
		font-size: 1.5rem;
	}

	.iconsContent{
		width: 80%;
		height: 3.5rem;
		float: left;
		display: flex;
		align-items: center;
		border-bottom: 0.0625rem solid #ccc;
	}

	.iconsContent p{
		width: 90%;
	}

	.iconsPush{
		
		width: 10%;
	}


</style>