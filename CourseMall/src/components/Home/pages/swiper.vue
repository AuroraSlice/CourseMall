<template>
	<div class="Pic-swiper">
		<swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item in SwiperList"><img :src="item.imgUrl"></swiper-slide>
    
    <div class="swiper-pagination"  slot="pagination"></div>
    
  </swiper>

</div>
</template>

<script>
	export default{
		data(){
			return {
				SwiperList:[
					{
						id:"01",
						imgUrl:require("@/assets/picture/1.jpg")
					},
					{
						id:"02",
						imgUrl:require("@/assets/picture/2.jpg")
					},
					{
						id:"03",
						imgUrl:require("@/assets/picture/3.jpg")
					},
					{
						id:"04",
						imgUrl:require("@/assets/picture/4.jpg")
					},
					{
						id:"05",
						imgUrl:require("@/assets/picture/5.jpg")
					}
				],


				swiperOption :{

					pagination: {
            			el: '.swiper-pagination'
          			},
          			loop:true
				}
			}
		}
	}

</script>


<style>
	.Pic-swiper{
		height: 12rem;
		width: 100%;
	}

	.Pic-swiper img{
		width: 100%;
		height: 100%;
	}

	.Pic-swiper >>> .swiper-pagination-bullet-active{
		background:#fff;
	}
</style>