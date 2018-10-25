<template>
	<div class="detail">
		<div class="shade" v-if="isShade" @click="choose"></div>
		<div class="goods-img">
			<img :src="goods.pic_url" alt="">
		</div>
		<div class="goods-info">
			<div class="goods-price">
				￥{{goods.cprice}}
			</div>
			<div class="goods-sale">
				{{goods.zg_cat_id}}已购
			</div>
		</div>
		<div class="goods-title">
			{{goods.title_long}}
		</div>

		<div class="wrap-goods" v-if="isLoaded">
			<ul class="promise">
				<li>24小时发货</li>
				<li>7天包返</li>
				<li>售后补贴</li>
			</ul>
			<div class="goods-params" @click="buy">
				<p>请选择{{goodsInfo.info.fav_name}}-{{goodsInfo.info.zav_name}}</p>
				<span>></span>
			</div>
		</div>

		<div class="wrap-loading" v-else>
			<div class="loading">
				<img src="../assets/加载中.png" alt="">
			</div>
			
		</div>
		<footer>
			<div class="index">首页</div>
			<div class="shop-car">购物车</div>
			<div class="buy-now" @click="buy">立即购买</div>
			<div class="join-shop-car" @click="buy">加入购物车</div>
		</footer>
		<transition name="dialog"> 
			<Dialog v-if="isDialog" :sku-data="goodsInfo.sku" :fav-name="goodsInfo.info.fav_name" :zav-name="goodsInfo.info.zav_name" @cancel = "choose"></Dialog>
		</transition>
	</div>
</template>

<script type="text/javascript">
	import Dialog from "@/components/dialog"
	import {getBrandData} from "@/util/ajax.js"
	export default{
		components:{
			Dialog
		},
		props:{
			data:{
				type:Object
			}
		},
		data(){
			return {
				goods:{},
				isLoaded:false,
				goodsInfo:[],
				isShade:false,
				isDialog:false
			}
		},
		methods:{
			init(){
				let {goods} = this.$route.params;
				this.goods= goods;
				let url = `https://webservice.juanpi.com/api/getMemberAboutInfo?goods_id=${goods.goods_id}&is_pt_goods=0`;
				this.getData(url)
			},
			async getData(url){
				let data = await getBrandData(url);
				this.goodsInfo = JSON.parse(data.data.data).skudata;
				this.$nextTick(()=>{
					this.isLoaded =true;
				})
			},
			buy(){
				this.isDialog = true;
				this.isShade = true
			},
			choose(){
				this.isDialog = false;
				this.isShade = false
			}
		},
		mounted(){
			this.init()
		}
	}
</script>

<style type="text/css" lang="less">
	@color:#ff464e;
	.padding{
		box-sizing: border-box;
		padding-left: 3%;
		padding-right: 3%;
	}
	.detail{
	
		padding-bottom: 10rem;
		width: 100%;
		.shade{
			position: fixed;
			left:0;
			right: 0;
			top:0;
			bottom: 0;
			background:black;
			opacity: .1;
			z-index: 100;
		}
		.goods-img{
			width: 100%;
			img{
				width: 100%;
			}
		}
		.goods-info{
			.padding();
			display: flex;
			height: 4rem;
			line-height: 4rem;
			justify-content: space-between;
			.goods-price{
				color:@color;
				font-size: 1.5rem;
			}
			.goods-sale{
				color:#999;
			}
		}
		.goods-title{
			line-height: 2rem;
			border-bottom: 1rem solid #EEE;
			.padding();
			font-size: 1.2rem;
			color:#555;
			text-indent: 2em;
		}
		.promise{
			display: flex;
			justify-content: space-around;
			height: 2rem;
			line-height: 2rem;
			color:#555;
			border-bottom: 1rem solid #EEE;
		}
		.wrap-loading{
			margin-top: 2rem;
		}
		.loading{
			margin:0 auto;
			width: 3rem;
			height: 3rem;
			animation: loading 2s linear infinite;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.goods-params{
			.padding();
			display: flex;
			justify-content: space-between;
			line-height: 3rem;
			color:#555;
			font-size: 1rem;
			border-bottom: 1rem solid #EEE;
		}
		@keyframes loading{
			from{
				transform: rotate(0deg)
			}to{
				transform: rotate(360deg);
			}
		}
		footer{
			display: flex;
			position: fixed;
			left: 0;
			right: 0;
			bottom:0rem;
			height: 4rem;
			text-align: center;
			background:white;
			.index,.shop-car{
				width: 20%;
				box-sizing: border-box;
				padding-top: 2.4rem;
			}
			.index{
				background:url("../assets/首页.png") no-repeat;
				background-size: 2rem 2rem;
				background-position: center top;
			}
			.shop-car{
				background:url("../assets/购物车.png") no-repeat;
				background-size: 2rem 2rem;
				background-position: center top;
				border-left: 1px solid #DDD;
			}
			.buy-now,.join-shop-car{
				width: 30%;
				line-height: 4rem;
				border-left: 1px solid #DDD;
			}
			.join-shop-car{
				background:@color;
				color:white;
			}	
		}
		.dialog-enter{
			bottom:-20rem;
		}
		.dialog-enter-active{
			transition:bottom .5s;
		}
		.dialog-leave-active{
			transition: bottom .5s;
		}
		.dialog-leave-to{
			bottom:-25rem;
		}
	}
</style>