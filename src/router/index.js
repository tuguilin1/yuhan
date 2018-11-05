import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Brand from "@/page/brand"
import Seckill from "@/page/seckill"
import Detail from "@/page/detail"
import Search from "@/page/search"
import Result from "@/page/result"
import Cate from "@/page/cate"
import sampleSale from "@/page/samplesale"
import Chioce from "@/page/chioce"
import Clearance from "@/page/clearance"
import My from "@/page/my"
import Car from "@/page/car"
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
    },
    {
      path:"/result",
      name:"result",
      component:Result
    },
    {
      path:"/cate",
      name:"cate",
      component:Cate
    },
    {
      path:"/samplesale",
      name:"samplesale",
      component:sampleSale,
      redirect: '/samplesale/chioce',
      children:[
          {
            path:"chioce",
            name:"chioce",
            component:Chioce
          },
          {
            path:"clearance/:name",
            name:"clearance",
            component:Clearance
          }
      ]
    },
    {
      path:"/my",
      name:"my",
      component:My
    },
    {
      path:"/car",
      name:"car",
      component:Car
    }
  ]
})
