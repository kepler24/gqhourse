import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Antd from 'ant-design-vue';
import { Pagination,Loading  } from 'element-ui';
Vue.use(Pagination)
Vue.use(Loading)
Vue.config.productionTip = false
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
// import 'swiper/css/swiper.css'
// import 'ant-design-vue/dist/antd.css';
// Vue.use(Antd)
// Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
 router.beforeEach((to, from, next) => {
   /* 路由发生变化修改页面meta */
   if(to.meta.content){
    let head = document.getElementsByTagName('head');
    let meta = document.createElement('meta');
    meta.content = to.meta.content;
    head[0].appendChild(meta)
   }
   /* 路由发生变化修改页面title */
   if (to.meta.title) {
    document.title = to.meta.title;
   }
   next()
  });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
