<template>
	<div class="page">
    	<div class="header">
    		<p class="name">初级日语精练班</p>
    		<p class="people">{{}}人在学</p>
    	</div>
    	
    	<div class="instruct">
    		<h1>课程介绍</h1>
    		</br>
    		<p>&nbsp&nbsp&nbsp&nbsp本课程是在同名国家精品课程基础上改进、充实、提升而成。新课程围绕培养学生分析随机现象、处理随机数据能力的宗旨，从概率思想、内容处理、实例安排等方面精心设计、精心施教。同时课程还提供了包括习题课、考研辅导录像、考卷、教案等丰富的教学资源，可供初学者、考研学生、青年教师学习进修参考。</p></br>
    		<p>&nbsp&nbsp&nbsp&nbsp《概率论与数理统计》课程介绍 概率论与数理统计是一门非常重要的公共基础课，在高等学校人才培养中占有非常重要的地位，为学生学习后续专业课程以及进一步获得数学知识奠定必要的数学基础。概率论与数理统计广泛应用于社会、经济、科学等领域，为定量分析随机现象及随机数据提供了一套完整的数学方法。概率论与数理统计包含“概率论”和“数理统计”两方面的内容，其中概率论以现代数学框架为基础研究随机现象的规律性
    		</p>
    	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
    
			}
		}
	}
</script>

<style scoped>
	.page{
		width: 100%;
		height: 20rem;
		
	}
	.header{
		width: 100%;
		height: 4rem;
		border-bottom: 0.1rem solid #f2f4f7;
	}

	.name{
		font-size: 1.5rem;
		margin: 0.7rem 0 0 0.8rem;
		color: #3C4A55;
	}

	.people{
		font-size: 0.7rem;
		margin: 0.8rem 0 0 1.5rem;
		color: #3C4A55;
	}

	.instruct{
		color: #70788C;
		margin-top: 1rem;
	}
</style>