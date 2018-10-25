<template>
	<div class="seckill">

		<div class="wrap-nav">
			<div class="high-light" ref="hightLight">
			
			</div>
			<header ref="navHeader">
				<div class="seckill-first-nav">
					精选好货,廉价狂翻
				</div>
				<div class="seckill-nav" v-for="(item,index) in data" :key = "index" :class = "activeNum == index?'active':''">
					<p>10:00</p>
					<p>{{item.tab_txt}}</p>
				</div>
				<div class="seckill-first-nav">
					精选好货,廉价狂翻
				</div>
			</header>
		</div>
		<seckill-goods :goods-list="goodsList"></seckill-goods>
	</div>
</template>

<script type="text/javascript">
	import {getMin} from "@/util/tool"
	import {getSeckillData} from "@/util/ajax"
	import seckillGoods from "@/components/seckillgoods"
	export default{
		components:{
			seckillGoods
		},
			data(){
				return{
					left:0,
					navLeft:[],
					activeNum:0,
					translateNum:0,
					scrollTimer:'',
					data:[],
					goodsList:[]
				}
			},
			computed:{
				transform(){
					return  this.translateNum === 0? null:`translateX(${-this.translateNum}px)`
				}
			},
			methods:{
				handleTouchEnd(){
					let navLeft = this.$refs.navHeader.scrollLeft;
					let nodeClientLefts = [];
					this.navLeft.forEach((num)=>{
						nodeClientLefts.push(num-navLeft-this.left);
					})
					let obj = getMin(nodeClientLefts);
					this.activeNum = obj.num;
					this.$refs.navHeader.scrollLeft = obj.left + navLeft;
					this.goodsList = this.data[obj.num].goodslist
				},
				handleScroll(){
					clearTimeout(this.scrollTimer);
					this.scrollTimer = setTimeout(this.handleTouchEnd,400)
				},
				async init(){
						
					this.left = this.$refs.hightLight.offsetLeft;
					this.$refs.navHeader.addEventListener("touchend",this.handleTouchEnd);
					this.$refs.navHeader.addEventListener("scroll",this.handleScroll)
					let seckillData = await getSeckillData();
					this.data = seckillData.data.data;
					this.goodsList = this.data[0].goodslist
				}
			},
			mounted(){
				this.init()
			},
			watch:{
				data:function(){
					this.$nextTick(()=>{
						let children = this.$refs.navHeader.children;
						let len = children.length-1;
						for(let i = 1; i <len;i++){
							this.navLeft.push(children[i].offsetLeft);
						}
					})

				}

			},
			destoryed(){
				this.$refs.navHeader.removeEventListener("touchend",this.handleTouchEnd);
				this.$refs.navHeader.removeEventListener("scroll",this.handleScroll)
			}
	}
</script>

<style type="text/css" lang="less">
	.seckill{
		.wrap-nav{
			height: 3.5rem;
			overflow: hidden;
			position: relative;
			width: 100%;
			z-index: 20;
			background: #333;
			.high-light{
				position:absolute;
				width: 20%;
				background: #ff464e;
				left: 50%;
				height: 3.5rem;
				margin-left: -10%;
				z-index: 0;
			}
		}
		header{
			display: flex;
			overflow: scroll;
			height: 4.5rem;
			color:#999;
			font-size: .7rem;
			transition: all .6s;
			.seckill-first-nav{
				min-width: 40%;
				text-align: center;
				line-height: 3.5rem;
				color:white;
			}
			.seckill-nav{
				min-width: 20%;
				line-height: 1.7rem;
				text-align: center;
				z-index: 10;
			}
			.active{
				color:white;
			}
		}
	}
</style>