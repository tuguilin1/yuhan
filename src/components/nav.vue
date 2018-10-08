<template>
	<div class="nav">
		<nav>
			<div v-for = "(item,index) in navs" :key="index" :class="num === index?'active':''" @click="change(index)">
				{{item.name}}
			</div>
		</nav>
		<div class="load">
			<mt-loadmore :bottom-method = "loadMore">
				<div class="goods-list">
					<Goods v-for = "items in dataList" :key = "items.goods_id" :goods="items"></Goods>
				</div>
			</mt-loadmore>	
		</div>

	</div>

</template>

<script type="text/javascript">
	import Goods from "@/components/goods"
	import {getData} from "@/util/ajax"
	export default{
		components:{
			Goods
		},
		props:{
			navs:{
				type:Array,
				default:[]
			}
		},
		data(){
			return {
				num:0,
				index:1,
				dataList:[]
			}
		},
		methods:{
			change(index){
				this.num = index;
				this.index = 1;
				this._getData()
			},
			async _getData(){
				let url = this.navs[this.num].url+`&page=${this.index++}`
				let data = await getData(url);
				if(data.status){
					this.dataList =this.dataList.concat(JSON.parse(data.data.data))
					console.log(this.dataList)
				}else{
					console.log("获取数据失败")
				}		
			},
			loadMore(){
				console.log(2)
				this._getData()
			}
		},
		mounted(){
			this._getData()
		}
	}
</script>

<style type="text/css" lang="less">
	nav{
		display: flex;
		justify-content: space-around;
		height: 2rem;
		margin-top: 1rem;
		.active{
			color:#ff464e;
			border-bottom: .2rem solid #ff464e;
		}
	}
	.goods-list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.load{
		overflow: scroll;
	}
</style>