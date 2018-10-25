<template>
	<div class="index">
		<header>
			<router-link tag="div" class="search" to="/search">搜索</router-link>
			<div class="classify"></div>
		</header>
		<section class="banner">
			<mt-swipe :auto="4000">
			  <mt-swipe-item v-for = "item in bannerList" :key = 'item.id'>
			  	<img :src="item.pic" @click="jump(item.jump_url)">
			  </mt-swipe-item>
			</mt-swipe>
		</section>
		<Banner></Banner>
		<Activity></Activity>
		<middle-header info="精选口碑好货·买过的都说好"></middle-header>
		<Nav :navs="navs"></Nav>
	</div>
</template>

<script type="text/javascript">
	import {getBanner} from "@/util/ajax"
	import Banner from "@/components/indexnav"
	import Activity from "@/components/activity"
	import middleHeader from "@/components/middleheader"
	import Nav from "@/components/nav"
	export default{
		components:{
			Banner,
			Activity,
			middleHeader,
			Nav
		},
		data(){
			return{
				value:"",
				bannerList:[],
				navs:[
					{
						"name":"精选专场",
						"url":"https://webservice.juanpi.com/api/getGoods?zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc"
					},
					{
						"name":"精选单品",
						"url":"https://webservice.juanpi.com/api/getGoods?zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp"
					}
				]
			}
		},
		methods:{
			async _getBanner(){
				let data = await getBanner();
				if(data.data.status){
					this.bannerList = JSON.parse(data.data.banner)
				}
			},
			jump(url){
				let [x,y,z] = [url.lastIndexOf("/"),url.lastIndexOf("?"),url.lastIndexOf("=")];
				let [brandId,shopId] = [url.slice(x+1,y),url.slice(z+1)];
				console.log(typeof brandId,typeof shopId)
			}
		},
		mounted(){
			this._getBanner()
		}
	}
</script>

<style type="text/css" lang="less">
	header{
		width: 100%;
		height: 4rem;
		display: flex;
		.search{
			margin: 1rem 1rem;
			width: 80%;
			background: #EEE;
			line-height: 2rem;
			box-sizing: border-box;
			padding-left: 2rem;
			border-radius: 1rem;
			font-size: 0.8rem;
			color:#BBB;
		}
		.classify{
			background: url("../assets/分类.png") no-repeat;
			background-size: cover;
			background-origin: padding-box;
			width: 2rem;
			height: 2rem;
			margin: 1rem 0rem;
		}
	}
	.banner{
		height: 10rem;
		img{
			width: 100%;
			height: 100%;
		}
	}
</style>