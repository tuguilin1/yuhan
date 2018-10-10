import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Brand from "@/page/brand"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
    	path:"/brand",
    	name:"brand",
    	component:Brand
    }
  ]
})
