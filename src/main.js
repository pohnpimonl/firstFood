import Vue from 'vue'
import VueRouter from 'vue-router' //1หลังจากลง vue install vue-router
import router from './router' //Import ไฟล์ router เข้ามา
import store from './store' //Import ไฟล์ store หลังจากสร้างไฟล์ store
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter) //2หลังจากลง vue install vue-router

new Vue({
  render: h => h(App),
  router,
  data:{ state:store.state }
}).$mount('#app')
