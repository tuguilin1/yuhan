<template>
	<div class="brand">
		<mt-header :title="brandInfo.shop_name">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="shop">
			<div class="shop-logo">
				<img :src="brandInfo.logo_url">
			</div>
			<div class="shop-info">
				<div class="shop-name">
					{{brandInfo.shop_name}}
				</div>
				<div class="sale-nums">
					{{brandInfo.store_info}}
				</div>
				<div class="like-icon">
				</div>
			</div>
		</div>
		<!-- <Nav :navs="navs"></Nav> -->
		<brand-goods :data="data" v-if="isBrandShow"></brand-goods>
	</div>
</template>

<script type="text/javascript">
	import Nav from "@/components/nav"
	import brandGoods from "@/components/brandgoods"
	import {getBrandData} from "@/util/ajax"
	export default{
		components:{
			Nav,
			brandGoods
		},
		data(){
			return {
				navs:[
					{
						"name":"推荐",
						"url":"https://webservice.juanpi.com/api/getBrandGoods?brand_id=1281572_5353150&msort=1&goods_utype=C4&price_range=&cat_threeids="
					},
					{
						"name":"价格",
						"url":"https://webservice.juanpi.com/api/getBrandGoods?brand_id=1281572_5353150&msort=8&goods_utype=C4&price_range=&cat_threeids="
					},
					{
						"name":"销量",
						"url":"https://webservice.juanpi.com/api/getBrandGoods?brand_id=1281572_5353150&msort=2&goods_utype=C4&price_range=&cat_threeids="
					},
					{
						"name":"筛选",
						"url":"https://webservice.juanpi.com/api/getBrandGoods?brand_id=1281572_5353150&msort=12&goods_utype=C4&price_range=&cat_threeids="
					}
				],
				"brandInfo":{},
				"data":[],
				"isNavShow":false,
				"isBrandShow":false
			}
		},
		methods:{
			async init(){
				let {brandId,shopId} = this.$route.query;
				let url = `https://webservice.juanpi.com/api/getBrandGoods?page=1&brand_id=${brandId}_${shopId}&msort=1&goods_utype=C4&price_range=&cat_threeids=`;
				let data = await getBrandData(url);
				this.data = JSON.parse(data.data.data)
				this.brandInfo = this.data.brandInfo;
				if(typeof this.data.floor_data == "undefined"){
					this.isNavShow = true
				}else{
					this.isBrandShow = true
				}
			}
		},
		mounted(){
			this.init()
		}
	}
</script>

<style type="text/css" lang="less">
	.shop{
		width: 90%;
		height: 6rem;
		border:1rem solid #F9F9F9;
		display: flex;
	}

	.shop-logo{
		position: relative;
		width: 6rem;
		height: 4rem;
		margin-top: 1rem;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.shop-info{
		margin-top: 1rem;
		.sale-nums{
			margin-top: 1rem;
			font-size: .8rem;
			color:#999;
		}
		.like-icon{
			width: 3rem;
			height: 3rem;
			background: url("../assets/喜欢.png") no-repeat;
			position: absolute;
			top:5.5rem;
			right: 1rem;
			background-size: contain;
		}
	}
</style>