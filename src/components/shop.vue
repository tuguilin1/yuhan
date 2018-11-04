<template>
	<div class="shops">
		<div class="shops-img" @click="jumpShop(goods)">
			<img :src="goods.ss_cover" alt="">
		</div>
		<div class="shops-goods">
			<div class="shops-goods-desc" v-for="(item,index) in goods.sub_data" :key="index" @click="jumpGoods(item)">
				<div class="shops-goods-img">
					<img :src="item.pic">
					<div class="shops-goods-sales">
						<mt-progress :value="item.progress_info.percent*100" :bar-height="5"></mt-progress>
					</div>
				</div>
				<div class="shops-goods-info">
					<p class="shops-goods-price">{{item.cp}}</p>
					<p class="shops-goods-name">{{item.title}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:{
			goods:{
				type:Object
			}
		},
		methods:{
			jumpShop(goods){
				this.$router.push({"name":"brand",query:{brandId:goods.goods_id,shopId:goods.shop_id}})
			},
			jumpGoods(goods){
				this.$router.push({"name":'detail',params:{goods}})
			}
		}
	}
</script>

<style type="text/css" lang="less">
@color:#ff464e;
	.shops{
		width: 100%;
		margin-top: 1rem;
		height: 18rem;
		.shops-img{
			width: 100%;
			height: 9rem;
			img{
				height: 100%;
				width: 100%;
			}
		}
		.shops-goods{
			width: 100%;
			display: flex;
			margin-top: .5rem;
			.shops-goods-desc{
				flex:1;
				box-sizing: border-box;
				padding-left: 3%;
				padding-right: 3%;

				.shops-goods-img{
					width: 100%;
					height: 6rem;
					position: relative;
					img{
						width: 100%;
						height: 100%;
					}
					.shops-goods-sales{
						position: absolute;
						bottom:0rem;
						left:0;
						right: 0;
						height: 1.3rem;
						background:rgba(255,255,255,0.5);
						.mt-progress{
							width: 80%;
							margin-left: 10%;
							height: 100%;
							.mt-progress-progress{
								background-color: @color;
							}
						}
					}
				}
				.shops-goods-info{
					text-align: center;
					line-height: 1.2rem;
					.shops-goods-price{
						color:@color;
						font-size: .8rem;
					}
					.shops-goods-name{
						width: 25vw;
						font-size: .5rem;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
		}
	}
</style>