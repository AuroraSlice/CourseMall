<template>
	<div>
		<span class="iconfont">
			&#xe62f;
		</span>
		<input type="text" value="请输入账号/手机号">
		<span class="iconfont">
			&#xe6e9;
		</span>
		<input type="text" value="请输入密码">
	</div>
</template>


<script>
	

</script>



<style>
	input{
			color: #4CAF50;
            text-indent: 0;
            background: transparent;
            border: 0 none;
            resize:none; 
            outline:none;  /*清除选中效果的默认蓝色边框 */
            -webkit-appearance:none;  /*清除浏览器默认的样式 */
            line-height: normal;
            width: 23rem;
            height: 3rem;
            border-bottom: 0.0625rem solid #ccc;
        }
        input::-webkit-input-placeholder { /* WebKit browsers */
            line-height: 0.44rem;   
        }
        input:focus {
            color: #8b8791;
        }

</style>