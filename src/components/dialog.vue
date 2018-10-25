<template>
	<div class="dialog">
		<div class="goods-img">
			<img :src="!goods?'':goods.av_origin_zpic" alt="">
		</div>
		<span class="cansel" @click="cancel">
			<img src="../assets/取消.png">
		</span>
		<div class="goods-detail">
			<p class="goods-detail-price">{{!goods?'':goods.cprice}}</p>
			<p>已选择<strong>{{favData[favNum]}}--{{zavData[zavNum]}}</strong></p>
		</div>
		<div class="wrap-goods-choose">
			<div class="goods-choose" v-if="favData[0] !== ''">
				<header>{{favName}}</header>
				<div class="goods-choose-tag">
					<div v-for="(item,index) in favData" @click="chooseFav(index)" :key="index" :class="index == favNum?'active':''">{{item}}</div>
				</div>
			</div>
			<div class="goods-choose" v-if="zavData[0] !==''">
				<header>{{zavName}}</header>
				<div class="goods-choose-tag">
					<div v-for="(item,index) in zavData" :key="index" @click="chooseZav(index)" :class="index == zavNum?'active':''">{{item}}</div>
				</div>
			</div>
			<div class="purchase-number">
				<div>购买数量</div>
				<div class="count">
					<span class="minus" @click='minus'>-</span>
					<span>{{count}}</span>
					<span class="plus" @click="plus">+</span>
				</div>
			</div>
			<mt-button size="large">确认</mt-button>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	export default{
		props:{
			skuData:{
				type:Array
			},
			favName:{
				type:String
			},
			zavName:{
				type:String
			}
		},
		data(){
			return{
				objData:{},
				favData:[],
				zavData:[],
				count:1,
				favNum:0,
				zavNum:0,
			}

		},
		methods:{
			init(){
				this.skuData.forEach((item)=>{
					let {av_fvalue,av_zvalue} = item;
					this.objData[`${av_fvalue}-${av_zvalue}`] = item;
					if(!this.favData.includes(av_fvalue)){
						this.favData.push(av_fvalue)
					}
					if(!this.zavData.includes(av_zvalue)){
						this.zavData.push(av_zvalue)
					}
				})
			},
			chooseFav(index){
				if(this.favNum == index){
					return null
				}
				this.favNum = index
			},
			chooseZav(index){
				if(this.zavNum == index){
					return null
				}
				this.zavNum = index
			},
			minus(){
				if(this.count>1){
					this.count--
				}
			},
			plus(){
				this.count++;
			},
			cancel(){
				this.$emit("cancel")
			}
		},
		computed:{
			goods(){
				return this.objData[`${this.favData[this.favNum]}-${this.zavData[this.zavNum]}`]
			}
		},
		mounted(){
			this.init()
		}
	}
</script>

<style type="text/css" lang="less">
	.omit{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.dialog{
		position: fixed;
		left: 0;
		right: 0;
		bottom:0;
		height: 25rem;
		background: white;
		z-index: 200;
		.goods-img{
			position: absolute;
			width: 7rem;
			height: 7rem;
			left: 1rem;
			top:-3rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.cansel{
			position: absolute;
			display: inline-block;
			width: 1rem;
			height: 1rem;
			right: 1rem;
			top:1rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.goods-detail{
			.omit();
			width: 8rem;
			position: absolute;
			top:.2rem;
			left: 9rem;
			height: 5rem;
			font-size: .8rem;
			display: flex;
			flex-direction: column;
			p{
				line-height: 2rem;
				strong{
					margin-left: .3rem
				}
			}
			.goods-detail-price{
				color:#ff464e;
				font-size: 1.3rem;
			}
		}
		.wrap-goods-choose{
			height: 20rem;
			margin-top: 5rem;
			box-sizing: border-box;
			padding-left: 1rem;
			padding-right: 1rem;
			overflow: scroll;
		}
		.goods-choose{
			
			header{
				height: 2rem;
				font-size: 1.2rem;
			}
			.goods-choose-tag{
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				div{
					width: 30%;
					height: 2rem;
					margin-bottom: 1rem;
					border:1px solid #555;
					text-align: center;
					line-height: 2rem;
					.omit()
				}
			}
		}
		.purchase-number{
			height: 2rem;
			display: flex;
			justify-content: space-between;
			margin-top: 2rem;
			line-height: 2rem;
			.count{
				min-width: 6rem;
				display: flex;
				justify-content: space-around;
				.minus,.plus{
					font-size: 1.5rem;
					color:#ff464e;
				}
			}
		}
		.mint-button--default{
			background: #ff464e;
			margin-top: 2rem;
			color:white;
		}
		.active{
			background: #ff464e;
			color:white;
			border:1px solid #ff464e !important;
		}
	}
</style>