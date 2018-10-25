<template>
	<div class="nav" ref="nav">
		<nav ref = "header" :class="isFixed?'is-fixed':''" class="nav-nav">
			<div v-for = "(item,index) in navs" :key="index" :class="num === index?'active':''" @click="change(index)">
				{{item.name}}
			</div>
		</nav>
		<div class="load-more">
			<mt-loadmore :bottom-method = "loadMore" :translate-change="changeHeader">
				<div class="goods-list">
					<Goods v-for = "(items,index) in dataList" :key = "items.goods_id" :goods="items" @click.native="jumpUrl(items.goods_jump_url)" :name="navs[num].name"></Goods>
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
			async change(index){
				if(this.num !== index){

					this.bottomStatus = "loading";
					this.num = index;
					
					this.dataList = [];
					let data = sessionStorage.getItem(this.navs[index].name);
					if(!data){
						await this._getData();
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
			},
			handleScroll(){
				let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
				if(this.headerTop <= scrollTop){
					this.isFixed = true;	
				}else{
					this.isFixed = false;
				}
			},
			init(){
				window.addEventListener("scroll",this.handleScroll);
				this.headerTop = this.$refs.header.offsetTop;
			},
			changeHeader(val){
				if(val == "0"){
					this.$refs.header.style["margin-bottom"] = "0"
				}else{
					this.$refs.header.style["margin-bottom"] = "2.2rem"
				}
			},
			jumpUrl(url){
				if(this.navs[this.num].name === "精选专场"){
					let [x,y,z] = [url.lastIndexOf("/"),url.lastIndexOf("?"),url.lastIndexOf("=")];
					let [brandId,shopId] = [url.slice(x+1,y),url.slice(z+1)];
					this.$router.push({"name":"brand",query:{brandId,shopId}})
				}
				
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
	.nav-nav{
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