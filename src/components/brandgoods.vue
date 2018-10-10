<template>
	<div class="brand-goods">
		<div class="brand-goods-nav">
			<nav>
				<div v-for="(item,index) in navs" :key="index">
					{{item.title}}
				</div>
			</nav>
		</div>
		<div class="brand-goods-list" v-for="(item,index) in navData">
			<header><div>—— {{item[0].tabname}} ——</div></header>
			<Goods v-for="(_item,index) in item.slice(1)" :goods="_item"></Goods>
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
				navData:[]
			}
		},
		methods:{
			init(){
				this.navs = this.data.floor_bar;
				this.navData = this.data.floor_data
			}
		},
		mounted(){
			this.init()
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
</style>