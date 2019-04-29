<template>
	<div class="Header">
		
			<div id="HeaderItem" :class="{HeaderItem:isActive2,HeaderItemStyle2:isActive}" @click="changeStyle1">
				<p>我的课程</p>
			</div>
			<div class="HeaderItem" :class="{HeaderItem:!isActive2,HeaderItemStyle2:!isActive}" @click="changeStyle2">
				<p>我的微专业</p>
			</div>
		
	</div>
</template>

<script>
	export default{

		data(){
			return {
				isActive:true,
				isActive2:false
				
			}
		},

		methods:{
			changeStyle1:function(){
				this.isActive = true;
				this.isActive2 =false;
				this.$router.push("/MyStudy");
				
				
				
			},

			changeStyle2:function(){
				this.isActive = false;
				this.isActive2 =true;
				this.$router.push("/MyLittle");
				
				
			}


		}
			
		
	}
		
		
	

	
		
	
		
	
				
	
</script>

<style scoped>
	.Header{
		width: 100%;
		height: 3rem;
		border-bottom: 0.0625rem solid #ccc;
	}

	.HeaderItem{
		width: 25%;
		height: 1.75rem;
		float: left;
		margin:1rem 3rem;
		display: flex;
		justify-content: center;
		color: #999;
		border-bottom: 0.25rem;
	}

	.HeaderItemStyle2{
		width: 25%;
		height: 1.75rem;
		float: left;
		margin:1rem 3rem;
		display: flex;
		justify-content: center;
		color: #999;
		border-bottom: 0.25rem solid #2cc17b;
	}
</style>