// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios;


Vue.use(VueVideoPlayer)

/* eslint-disable no-new */

import './assets/css/iconfont.css'
import './assets/css/reset200802.css'


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
