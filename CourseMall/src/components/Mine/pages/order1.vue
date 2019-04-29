<template>
	<div class="header">
		<div class="Leader">
			<div class="LeaderItem"><p>{{allOrders}}</p></div>
			<div class="LeaderItem"><p>{{awaits}}</p></div>
			<div class="LeaderItem"><p>{{success}}</p></div>
			<div class="LeaderItem"><p>{{failOrders}}</p></div>
		</div>
		<div class="orderItem" v-for="item in orderList">
			<div class="orderMenu">
				<div class="orderTime"><p>{{item.time}}</p></div>
				<div class="orderNumber"><p>订单号：{{item.number}}</p></div>
			</div>
			<div class="orderCenter">
				<div class="pic">
					<img src="@/assets/picture/order1.jpg">
				</div>
				<div class="content">
					<p>{{item.courseName}}</p>
					<p>good</p>
					<p>${{item.money}}</p>
				</div>
			</div>
			<div class="orderBottom">
				<div class="Bleft"></div>
				<div class="But">
					<button @click="Delete">{{deleteButton}}</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		mounted(){
			this.pushData();
			console.log(this.awaits);
		},
		methods:{
					pushData(){
                		this.$http.get('/api/getOrder', {
                			params: {}
            			}).then( (res) => { 	
            				if(res.data!=undefined){
            					console.log("查询成功");
            				}else{
            					alert("查询失败");
            				}
                			this.orderList.push(res.data[0]);
                			console.log(this.orderList);
                		}
					)},
            		Delete(event){
            			this.$http.post('/api/deleteOrder', {
                			id: 1
            			}).then( (res) => { 
                			if(res.status==200){
                				alert("删除成功");
                				console.log(event.target);
                			}
                		})
            		}
			},
			data(){
			return {
				orderList:[],
				allOrders:"全部订单",
				awaits:"待支付",
				success:"交易成功",
				failOrders:"退款单",
				deleteButton:"删除订单"
				
			}
		}

}

		

</script>

<style scoped>
	.header{
		
		width: 100%;
		height: 30rem;
	}

	.Leader{
		width: 100%;
		height: 2rem;
		
	}

	.LeaderItem{
		width: 25%;
		height: 1.85rem;
		float: left;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 0.15rem solid #f2f4f7;
	}


	.LeaderItem p{
		font-size: 0.9rem;
	}

	.orderItem{
		background-color: #f2f4f7;
		margin-top: 0.5rem;
	}

	.orderMenu{
		width: 100%;
		height: 1.5rem;
		border-bottom: 0.06rem solid #f2f4f7;
	}

	.orderMenu::after{
		content: "";
		display: block;
		clear: both;
		height: 0;
	}

	.orderTime{
		width: 40%;
		height: 1.5rem;
		float: left;
		display: flex;
		justify-content: center;
		align-items: center;
		
	}

	.orderNumber{
		width: 60%;
		height: 1.5rem;
		float: left;
		display: flex;
		align-items: center;
	}

	.orderMenu p{
		font-size: 0.6rem;
	}

	.orderCenter{
		width: 100%;
		height: 4.5rem;
	}

	.pic{
		width: 40%;
		height: 4.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		float: left;
	}

	.pic img{
		width: 70%;
		height: 80%;
		border-radius: 0.5rem;
	}

	.content{
		float: left;
		width: 60%;
		height: 4.5rem;
	}

	.content p{
		font-size: 0.9rem;
		margin-top: 0.4rem;
	}

	.orderBottom{
		width: 100%;
		height: 2rem;
	}


	.Bleft{
		width: 70%;
		height: 2rem;
		
		float: left; 
	}

	.But{
		width: 30%;
		height: 2rem;
		float: left;
	}

	.But button{
		width: 100%;
		height: 1.4rem;
		margin-top: 0.5rem;
		border-radius: 1rem;
		outline: none;
		border: 1px solid transparent;
	}
</style>