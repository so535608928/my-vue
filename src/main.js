import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import { routes } from "./routes";

Vue.use(VueRouter)


const router =  new VueRouter({
  routes,
  mode:'history',
  // scrollBehavior(to,from,scrollBehavior){
  //   // return {x:0,y:100}
  //   return {
  //     selector:'.btn'
  //   }
  // }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
