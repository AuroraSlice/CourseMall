<template>
	<div class="Center">
		<div class="pic1"></div>
		<div class="pic" v-for="(item,index) in MyStudyList">
			<div class="leftPic">
				<img src="@/assets/picture/e1.jpg">
			</div>
			<div class="rightContent">
				<p class="rightContentTop">{{item.courseName}}</p>
				<p class="rightContentBottom">已学习{{item.studyed}}/{{item.sumCourse}}课时</p>
				<div class="line" :style="getStyle(item,index)"></div>
			</div>
		</div>
		
	</div>
</template>


<script>
	export default{
	mounted(){
			this.getData();
		},
		methods:{
					getData(){
                		this.$http.get('/api/getMyStudy', {
                			params: {}
            			}).then( (res) => { 	
            				if(res.data!=undefined){
            					console.log("操作成功");
            				}else{
            					console.log("操作失败");
            				}
            				for(var i=0;i<res.data.length;i++){
            					this.MyStudyList.push(res.data[i]);
            					this.linePercent.push(parseInt(res.data[i].studyed/res.data[i].sumCoursec)*100);
            				}
                		}
					)},

            		getStyle(item,index){
            			console.log(index);
      					//var line = document.getElementByClassName("line");
            			return "width = linePercent[index]%"
            		},

            		 run(){  
        				var bar = document.getElementById("bar"); 
        				var total = document.getElementById("total"); 
    					bar.style.width=parseInt(bar.style.width) + 1 + "%";  
   						total.innerHTML = bar.style.width; 
    					if(bar.style.width == "100%"){  
      						window.clearTimeout(timeout); 
      						return; 
    					} 
    						var timeout=window.setTimeout("run()",100); 
 					 } 
            		
			},
			data(){
			return {
				MyStudyList:[],
				linePercent:[]
				
			}
		}

	}
</script>

<style scoped>
	.Center{
		margin-top: 1rem;
	}

	.leftPic{
		width: 35%;
		height: 5rem;
		float: left;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.rightContent{
		width: 65%;
		height: 5rem;
		float: left;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
	}

	.rightContentTop{
		font-size: 1.1rem;
		margin-top: 0.7rem;
	}

	.rightContentBottom{
		font-size: 0.8rem;
		color: #2cc17b;
		margin-top: 1rem;
	}

	.pic{
		width: 100%;
		height: 5rem;
		margin-top: 0.5rem;
		border-bottom: 0.0625rem solid rgba(221, 221, 221, 0.4);
	}

	.leftPic img{
		width: 80%;
		height: 90%;
		border-radius: 0.2rem;
	}

	.line{
		margin-top: 0.8rem;
		width: 100%;
		height: 0.2rem;
		background-color: #d3d8e6;
	}
</style>