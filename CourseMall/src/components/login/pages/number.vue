<template>
    <div>
        <div class="log">
            <img :src="picPosition">
        </div>
	   <div>
         <form>
            <span class="iconfont">
                &#xe62f;
            </span>
         <input type="text" :value="number" id="UserName">
            <span class="iconfont">
            &#xe6e9;
         </span>
         <input type="password" :value="pass" id="password">
         </form>
	   </div>

        <div class="butBox">
                   <input type="button" class="but" :value="log" @click="getUserNumber">
            <p class="check">{{fogetPassword}}</p>
        </div>
    </div>
</template>


<script>
	export default{
        data(){
            return{
                picPosition:require("@/assets/picture/ss.jpg"),
                log:"登录",
                fogetPassword:"忘记密码？",
                number:"请输入账号/手机号",
                pass:"请输入密码"
            }
        },
        methods:{
             getUserNumber() {
                var UserName = document.getElementById("UserName").value;
                var password = document.getElementById("password").value;
                if(UserName==null){
                    alert(请输入账号);
                }else if(password==null){
                    alert(请输入密码);
                }
                // axios.get('/', {params: ''})
                this.$http.get('/api/getUserNumber', {
                params: {Name: UserName }
            }).then( (res) => { 
                if(res.data[0]==undefined){
                    alert("用户不存在")
                }else{
                  if(res.data[0].password==password){
                    this.$router.push("/Home");
                  }else{
                    alert("密码错误");
                  }
                }

            })
            },

            beforeSubmit: function () {
                this.log = true
                this.log = '正在登录...'
            },

             updateData: function (e) {
                this.$store.commit({
                 type: 'updateData',
                 number: e.target.number,
                 password: e.target.password
             })
    },
        }
    }

</script>



<style>
    .log{
        width: 100%;
        text-align: center;
        height: 10rem;
        
    }

    .log img{
        width: 14rem;
        height: 9rem;
        margin-top: 1.5rem;
        
    }


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


        .butBox{
        margin-top: 2rem;
    }

    .but{
        font-size: 1rem;
        background-color: #4CAF50;
        color: white;
        padding: 1rem 2rem;
        width: 24rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        outline: none;
        border-radius: 2rem;
    }

    .check{
        font-size: 0.5rem;
        color: #4CAF50;
        text-align: center;
        margin-top: 1rem;
        
    }

    .check:hover{
        cursor: pointer;
    }

</style>