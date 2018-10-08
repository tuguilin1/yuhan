<template>
	<div class="nav">
		<nav>
			<div v-for = "(item,index) in navs" :key="index" :class="num === index?'active':''" @click="change(index)">
				{{item.name}}
			</div>
		</nav>
		<div class="load-more">
			<mt-loadmore :bottom-method = "loadMore">
				<div class="goods-list">
					<Goods v-for = "items in dataList" :key = "items.goods_id" :goods="items"></Goods>
				</div>
				<div slot="bottom" class="mint-loadmore-top">
			      <span v-show="bottomStatus === 'loading'">Loading...</span>
			    </div>
			</mt-loadmore>
		</div>
	

	</div>

</template>

<script type="text/javascript">
	import Goods from "@/components/goods"
	import {getData} from "@/util/ajax"
	import mtLoadmore from "@/components/loadmore"
	export default{
		components:{
			Goods,
			mtLoadmore
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
				dataList:[],
				bottomStatus:"loading"
			}
		},
		methods:{
			change(index){
				if(this.num !== index){
					this.num = index;
					this.index = 1;
					this.dataList = [];
					this._getData();
					this.bottomStatus = "loading"
				}
				
			},
			async _getData(){
				let url = this.navs[this.num].url+`&page=${this.index++}`
				let data = await getData(url);
				if(data.status){
					this.dataList =this.dataList.concat(JSON.parse(data.data.data))
					this.bottomStatus = ""
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
		height: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.mint-loadmore-top{
		width: 100%;
		height:2rem;
		text-align: center;
	}
</style>