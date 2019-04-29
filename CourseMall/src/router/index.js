import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login.vue'
import Home from '@/components/Home/home.vue'
import MyStudy from '@/components/MyStudy/MyStudy.vue'
import MyLittle from '@/components/MyStudy/MyLittle.vue'
import Mine from '@/components/Mine/Mine.vue'
import Search from '@/components/Search/Search.vue'
import Order from '@/components/Mine/order.vue'
import videoPlay from '@/components/videoPlay/videoPlay.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },

    {
    	path:'/Home',
    	name: 'Home',
    	component: Home
    },

    {
      path:'/MyStudy',
      name:'MyStudy',
      component:MyStudy
    },

    {
      path:'/MyLittle',
      name:'MyLittle',
      component:MyLittle
    },

    {
    	path:'/Mine',
    	name:'Mine',
    	component:Mine
    },

    {
    	path:'/Search',
    	name:'Search',
    	component:Search
    },

     {
      path:'/Order',
      name:'order',
      component:Order
    },
    {
      path: '/videoPlay',
      name: 'videoPlay',
      component: videoPlay
    }


  ]
    
    
})
