<template>
	<div class="seckill-goods-list">
		<div class="seckill-goods" v-for="(item,index) in goodsList" :key="index" @click="jumpUrl(item)">
			<div class="seckill-goods-left">
				<img :src="item.pic_url" alt="">
			</div>
			<div class="seckill-goods-right">
				<p class="seckill-goods-name">{{item.title_long}}</p>
				<div class="seckill-goods-info">
					<div class="seckill-goods-info-left" v-if="item.progress_info">
						<div class="seckill-goods-price">价格{{item.cprice}}</div>
						<mt-progress :value="item.progress_info.percent*100" :bar-height="10">
						</mt-progress >
					</div>
					<div class="seckill-goods-info-left" v-else>
						<div class="seckill-goods-price">价格{{item.cprice}}</div>
						<div class="seckill-goods-stock">限量{{item.stock}}件</div>
					</div>
					<div class="seckill-goods-info-right">
						<mt-button size="small">{{item.mkt_text}}</mt-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:{
			goodsList:{
				type:Array
			}
		},
		methods:{
			jumpUrl(goods){
				this.$router.push({"name":'detail',params:{goods}})
			}
		}
	}
</script>

<style type="text/css" lang="less">
	@color:#ff464e;
	.seckill-goods-list{
		padding-left: 2%;
		padding-right: 2%;
		margin-top: 1rem;
		.seckill-goods{
			padding-bottom: 2rem;
			margin-top: 1rem;
			border-bottom: 1px solid #EEE;
			display: flex;
			justify-content: space-around;
			.seckill-goods-left{
				width: 30%;
				img{
					width: 100%;
				}
			}
			.seckill-goods-right{
				width: 60%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
			.seckill-goods-info{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.seckill-goods-info-left{
					width: 60%;
					.seckill-goods-price{
						color:@color;
					}
					.seckill-goods-stock{
						color:#999;
						font-size: .8rem;
					}
					.mt-progress-progress{
						background-color: @color;
					}
				}
				.seckill-goods-info-right{
					.mint-button{
						background: @color;
						color:white;
					}
				}
			}
		}
	}
</style>