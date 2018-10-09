<template>
	<div class="nav" ref="nav">
		<nav ref = "header" :class="isFixed?'is-fixed':''">
			<div v-for = "(item,index) in navs" :key="index" :class="num === index?'active':''" @click="change(index)">
				{{item.name}}
			</div>
		</nav>
		<div class="load-more">
			<mt-loadmore :bottom-method = "loadMore">
				<div class="goods-list">
					<Goods v-for = "(items,index) in dataList" :key = "items.goods_id" :goods="items"></Goods>
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
				dataList:[],
				bottomStatus:"loading",
				headerTop:0,
				isFixed:false
			}
		},
		methods:{
			change(index){
				if(this.num !== index){
					this.bottomStatus = "loading";
					this.num = index;
					
					this.dataList = [];
					let data = sessionStorage.getItem(this.navs[index].name);
					if(!data){
						this._getData();
					}else{
						this.dataList = JSON.parse(data)
					}
					this.isFixed = false;
					this.$nextTick(()=>{
						this.$refs.header.scrollIntoView()
					})
				}
				
			},
			async _getData(){
				let url = this.navs[this.num].url+`&page=${this.navs[this.num].index++}`
				console.log(this.navs[this.num].index)
				let data = await getData(url);
				if(data.status){
					this.dataList =this.dataList.concat(JSON.parse(data.data.data));
					sessionStorage.setItem(this.navs[this.num].name,JSON.stringify(this.dataList));
					this.bottomStatus = ""
				}else{
					console.log("获取数据失败")
				}		
			},
			loadMore(){
				this._getData();
				this.$refs.header.style["margin-bottom"] = "2.2rem"
			},
			handleScroll(){
				let scrollTop = document.documentElement.scrollTop;
				if(this.headerTop <= scrollTop){
					this.isFixed = true;	
				}else{
					this.isFixed = false;
				}
			},
			init(){
				window.addEventListener("scroll",this.handleScroll);
				this.headerTop = this.$refs.header.offsetTop;
			}
		},
		mounted(){
			this.navs.forEach((item)=>{
				item.index = 1
			})
			sessionStorage.clear()
			this._getData();
			this.init();
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
		clear:both;
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
	.is-fixed{
		position: fixed;
		top:0;
		display: flex;
		justify-content: space-around;
		height: 3rem;
		background: white;
		line-height: 3rem;
		left: 0;
		right: 0;
		margin-top: 0;
		z-index: 10;
	}
</style>