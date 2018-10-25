import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Brand from "@/page/brand"
import Seckill from "@/page/seckill"
import Detail from "@/page/detail"
import Search from "@/page/search"
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
    },
    {
      path:"/seckill",
      name:"seckill",
      component:Seckill
    },
    {
      path:"/detail",
      name:"detail",
      component:Detail
    },
    {
      path:"/search",
      name:"search",
      component:Search
    }
  ]
})
