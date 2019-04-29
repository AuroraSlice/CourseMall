<template>
	<div class="WorkerBox">
		<p class="WorkerTop">办公效率</p>
		<div class="Pic">
			<img :src="WorkerPic.imgUrl">
		</div>
		<p class="bottomTopic">{{WorkerPic.datas}}</p>
		
		<div>
			<div class="WorkerCourse" v-for="item in WorkerList">
				<img :src="item.imgUrl">
				<p>{{item.datas}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				WorkerPic:{
					imgUrl:require("@/assets/picture/d1.jpg"),
					datas:"揭秘PPT真相"
				},
				WorkerList:[
					{
						id:"01",
						imgUrl:require("@/assets/picture/d2.jpg"),
						datas:"交互式PPT"
					},
					{
						id:"02",
						imgUrl:require("@/assets/picture/d3.jpg"),
						datas:"Excel+PPT+word修炼"
					},
					{
						id:"03",
						imgUrl:require("@/assets/picture/d4.jpg"),
						datas:"OminiFocus For IOS"
					},
					{
						id:"04",
						imgUrl:require("@/assets/picture/d5.jpg"),
						datas:"和秋叶一起x学excel"
					}
				]
			}
		}
	}
</script>

<style scoped>
	.WorkerBox{
		width: 100%;
		height: 40rem;
		border-top: 1rem solid #f2f4f7;
		
	}

	.WorkerTop{
		font-size: 1.2rem;
		margin:1rem 1rem;
		font-weight: bold;
		height: 2rem;
	}
	.Pic{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 10rem;
	}

	.Pic img{
		width: 90%;
		height: 100%;
	}

	.bottomTopic{
		font-size: 1rem;
		margin:0.8rem 2rem;
	}


	.WorkerCourse{
		width: 50%;
		height: 10rem;
		float: left;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.WorkerCourse img{
		width: 90%;
		height: 6rem;
	}

	.WorkerCourse p{
		margin-top: 1rem;
		font-size: 0.8rem;
	}
</style>