<template>
	<div>
		<div class="Buy">
      <div class="left">
        <span class="iconfont">&#xe604;</span>
        <p>{{BuyCars}}</p>
      </div>
      <div class="right">
        <button @click="clickStyle">{{join}}</button>
      </div>
    </div>
    
	</div>
</template>

<script>
	export default{
		data(){
			return{
				BuyCars:"加入购物车",
        join:"加入学习",
        pingjia:"评价",
        course:[]
			}
		},
    methods:{
      clickStyle(e){
           this.$http.get('/api/getThisCourse', {
              params: {}
            }).then( (res) => {   
              if(res.data==undefined){
                 console.log("数据库查询错误");
              }else{
                 this.course.push(res.data[0]);
                }
              }
          )},
      PostData(){
          var Course  = this.course;
          this.$http.post('/api/postThisCourse', {Course
            }).then( (res) => {   
              if(res.success){
                 console.log("添加成功");
              }else{
                 alert("操作失败");
                }
              }
          )
      }
      }
    }
	
</script>

<style scoped>
  .Buy{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3.3rem;
    background:#fff;
    border-top: 0.0625rem solid #ccc;
  }

  .left{
    width: 20%;
    height: 100%;
    float: left;
    margin-top: 0.5rem;
  }

  .right{
    
    width: 80%;
    height: 100%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left span{
    font-size: 1.5rem;
    margin: 0.5rem 0 0 1.5rem;
  }

   .left p{
    font-size: 0.5rem;
    margin-left: 0.5rem;
    color: #3C4A55;
   }

   .right button{
    text-align: center;
    outline: transparent;
    width: 80%;
    height: 80%;
    background:#FF632A;
    border:none; 
    border-radius: 2rem;
    color: white;
   }
</style>