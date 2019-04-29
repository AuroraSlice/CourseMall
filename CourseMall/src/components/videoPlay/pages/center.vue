<template>
	<div>
		<div class="nav">
      <div class="leader" id="first" @click="clickStyle">{{jianjie}}</div>  
      <div class="leader" @click="clickStyle">{{mulu}}</div>  
      <div class="leader" @click="clickStyle">{{pingjia}}</div>  
    </div>
    
	</div>
</template>

<script>
	export default{
		data(){
			return{
				jianjie:"简介",
        mulu:"目录",
        pingjia:"评价",
    
			}
		},
    mounted(){
      var first = document.getElementById("first");
      first.style.borderColor="#2cc17b";
    },
     methods:{
      clickStyle(e){
        var leader = document.getElementsByClassName("leader");
        for(var i=0;i<leader.length;i++){
          leader[i].style.borderColor="#f2f4f7";
        }
        e.target.style.borderColor = "#2cc17b";
        this.onSubmit(e.target);
      }
    },
    onSubmit(ss) {
        this.$emit('target', ss);
    }
	}
</script>

<style scoped>
  .nav{
    width: 100%;
    height: 2rem;
    border-bottom: 0.1rem solid #f2f4f7;
  }
	.leader{
     width: 33.33%;
    height: 1.8rem;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.2rem solid #f2f4f7;
  }
</style>