<template>
	<div class="goods" @click="jumpUrl(goods)">
		<img v-lazy="goods.pic_url||goods.picurl" alt="">
		<div class="goods-info">
			<div class="goods-name">
				{{goods.cprice?`￥${goods.cprice}`:goods.coupon_tips}}
			</div>
			<div class="goods-content">
				<div>{{goods.title}}</div>
				<div class="tint">{{goods.time_left}}</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:{
			goods:{
				type:Object,
				default:()=>{
					return {}
				}
			},
			name:{
				type:String,
				default:""
			}
		},
		methods:{
			jumpUrl(goods){
				if(this.name=="精选专场"){
					return null
				}
				this.$router.push({"name":'detail',params:{goods}})
			}
		}
	}
</script>

<style type="text/css" lang="less">
	.goods{
		margin-top: 1rem;
		width: 49.5%;
		height: 15rem;
		img{
			display: block;
			height: 12rem;
			width: 100%;
		}
		.goods-info{
			box-sizing: border-box;
			padding-left: .5rem;
			padding-right: .5rem;
			.goods-name{
				color:#ff464e;
				margin-top: .5rem;
			}
			.goods-content{
				display: flex;
				margin-top: .5rem;
				font-size: .7rem;
				justify-content: space-between;
			}
		}
	}
	.tint{
		color:#BBB;
	}
</style>