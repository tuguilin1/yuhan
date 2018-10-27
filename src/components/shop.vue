<template>
	<div class="shop">
		<div class="shop-img">
			<img :src="goods.ss_cover" alt="">
		</div>
		<div class="shop-goods">
			<div class="shop-goods-desc" v-for="(item,index) in goods.sub_data" :key="index" >
				<div class="shop-goods-img">
					<img :src="item.pic">
					<div class="shop-goods-sales">
						<mt-progress :value="item.progress_info.percent*100" :bar-height="5"></mt-progress>
					</div>
				</div>
				<div class="shop-goods-info">
					<p class="shop-goods-price">{{item.cp}}</p>
					<p class="shop-goods-name">{{item.title}}</p>
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
		}
	}
</script>

<style type="text/css" lang="less">
@color:#ff464e;
	.shop{
		width: 100%;
		margin-top: 1rem;
		height: 18rem;
		.shop-img{
			width: 100%;
			height: 9rem;
			img{
				height: 100%;
				width: 100%;
			}
		}
		.shop-goods{
			width: 100%;
			display: flex;
			margin-top: .5rem;
			.shop-goods-desc{
				flex:1;
				box-sizing: border-box;
				padding-left: 3%;
				padding-right: 3%;

				.shop-goods-img{
					width: 100%;
					height: 6rem;
					position: relative;
					img{
						width: 100%;
						height: 100%;
					}
					.shop-goods-sales{
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
				.shop-goods-info{
					text-align: center;
					line-height: 1.2rem;
					.shop-goods-price{
						color:@color;
						font-size: .8rem;
					}
					.shop-goods-name{
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