<template>
	<div class="icons">
		<div class="icons-item" v-for="item in iconsList" @click="shift">
			<img :src="item.imgUrl">
			<p>{{item.datas}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			shift(){
				this.$router.push("/videoPlay");
			}
		},
		
		data(){
			return {
				iconsList:[
					{
						id:"01",
						imgUrl:require("@/assets/picture/a1.png"),
						datas:"微专业"
					},
					{
						id:"02",
						imgUrl:require("@/assets/picture/a2.png"),
						datas:"职场提升"
					},
					{
						id:"03",
						imgUrl:require("@/assets/picture/a3.png"),
						datas:"编程开发"
					},
					{
						id:"04",
						imgUrl:require("@/assets/picture/a4.png"),
						datas:"人工智能"
					},
					{
						id:"05",
						imgUrl:require("@/assets/picture/a5.png"),
						datas:"产品与运营"
					},
					{
						id:"06",
						imgUrl:require("@/assets/picture/a6.png"),
						datas:"设计创意"
					},
					{
						id:"07",
						imgUrl:require("@/assets/picture/a7.png"),
						datas:"电子商务"
					},
					{
						id:"08",
						imgUrl:require("@/assets/picture/a8.png"),
						datas:"VIP会员"
					}
				]
			}
		}
	}
</script>

<style scoped>
	.icons{
		width: 100%;
		height: 12rem;
	}

	.icons-item{
		width: 25%;
		height: 6rem;
		font-size: 0.88rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		float: left;
	}

	.icons-item img{
		width: 50%;
		height: 50%;

	}


	.icons-item p{
		margin-top: 0.4rem;
	}
</style>