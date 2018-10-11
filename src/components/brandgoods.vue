<template>
	<div class="brand-goods">
		<div class="brand-goods-nav" ref="brandNav" :class="isFixed?'is-fixed':''">
			<nav>
				<div v-for="(item,index) in navs" :key="index" :class="index===activeNum?'active':''" @click="goTo(index)">
					{{item.title}}
				</div>
			</nav>
		</div>
		<div class="stance" v-if="isFixed"></div>
		<div class="brand-goods-list" v-for="(item,index) in navData" :ref="'list'+index">
			<header><div>—— {{item[0].tabname}} ——</div></header>
			<Goods v-for="(_item,index) in item.slice(1)" :goods="_item" :key="index"></Goods>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Goods from "@/components/goods"
	export default{
		components:{
			Goods
		},
		props:{
			data:{
				type:Object
			}
		},
		data(){
			return{
				activeNum:0,
				navs:[],
				navData:[],
				isFixed:false,
				brandNavTop:0,
				offsetData:{}
			}
		},
		methods:{
			init(){
				this.navs = this.data.floor_bar;
				this.navData = this.data.floor_data;
				console.log(this.navData)
				this.brandNavTop = this.$refs.brandNav.offsetTop;
				let len = this.navs.length;
				window.addEventListener("scroll",this.handleScroll);
			},
			handleScroll(){
				console.log(top)
				let top = document.documentElement.scrollTop || document.body.scrollTop
				if(this.brandNavTop <= top){
					this.isFixed = true;	
				}else{
					this.isFixed = false;
				}
			},
			goTo(index){
				this.activeNum = index;
				if(this.$refs[`list${index}`]){
					this.$refs[`list${index}`][0].scrollIntoView()
				}
				
				
			}
		},
		mounted(){
			this.init()
		},
		destroyed(){
			window.removeEventListener("scroll",this.handleScroll)
		}
	}
</script>

<style type="text/css" lang="less">
	.brand-goods-nav{
		height: 3rem;
		overflow: hidden;
		nav{
			display: flex;
			overflow-x: scroll;
			height: 3.5rem;
			.active{
				color:#ff464e;
				border-bottom: .2rem solid #ff464e;
			}
			div{
				box-sizing: border-box;
				text-align: center;
				line-height: 3rem;
				padding-left: 1rem;
				padding-right: 1rem;
				white-space: nowrap;
			}
		}
	}
	.brand-goods-list{
		height: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		header{
			position: relative;
			width: 100%;
			height: 3rem;
			div{
				line-height: 3rem;
				margin: 0 auto;
			}
		}
	}
	.is-fixed{
		position: fixed;
		top:0;
		left: 0;
		right: 0;
		z-index: 10;
		background: white;
	}
	.stance{
		height: 3rem;
		width: 100%;
	}
</style>