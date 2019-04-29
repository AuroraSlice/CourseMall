<template>
	<div class="courseList">
		<p class="courseHead">畅销好课</p>
		<div class="courseItem" v-for="item in courseListItem">
			<img :src="item.imgUrl">
			<p>{{item.datas}}</p>
		</div>
	</div>
</template>


<script>
	export default{
		data(){
			return {
				courseListItem : [
					{
						id:"01",
						imgUrl:require("@/assets/picture/b1.png"),
						datas:"听得懂的金融思维课"
					},
					{
						id:"02",
						imgUrl:require("@/assets/picture/b2.jpg"),
						datas:"创业思想团队"
					},
					{
						id:"03",
						imgUrl:require("@/assets/picture/b3.png"),
						datas:"帮你打破知识边界"
					},
					{
						id:"04",
						imgUrl:require("@/assets/picture/b4.jpg"),
						datas:"和秋叶一起学ppt"
					},
					{
						id:"05",
						imgUrl:require("@/assets/picture/b5.png"),
						datas:"手机摄影高手速成"
					},
					{
						id:"06",
						imgUrl:require("@/assets/picture/b6.jpg"),
						datas:"会声会影*10提高课"
					}
				]
			}
		}
	}
</script>

<style>
	.courseList{
		border-top: 1rem solid #f2f4f7;
		height: 33rem;
	}


	.courseHead{
		font-size: 1.2rem;
		margin:1rem 1rem;
		font-weight: bold;
	}
	.courseList p{
		margin:0.8rem 1rem;
	}

	.courseItem{
		width: 50%;
		height: 8rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		float: left;
		margin-top: 2rem;
	}

	.courseItem img{
		width: 90%;
		height: 80%;
	}
</style>