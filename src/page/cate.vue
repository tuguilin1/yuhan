<template>
	<div class="cate">
		<mt-header title="全部分类">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<section class="all-cate">
			<div class="all-cate-left">
				<div v-for="(item,index) in navs" @click="change(item,index)" :class="activeNum==index?'active':''">{{item}}</div>
			</div>
			<div class="all-cate-right">
				<div class="category" v-for="(item,index) in goodsList" @click="jumpUrl(item.name)">
					<div class="category-icon">
						<img :src="'https://s2.juancdn.com' + item.icon">
					</div>
					<div class="category-acount">
						{{item.name}}
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script type="text/javascript">
	import {getCateData} from "@/util/ajax"
	export default{
		data(){
			return{
				cate:[],
				navs:[],
				goodsList:[],
				activeNum:0
			}
		},
		methods:{
			async init(){
				let data = await getCateData();
				let nav = [],obj={}
				data.forEach((item,index)=>{
					nav.push(item.name)
						obj[item.name]=item.secondCateList
				})
				this.cate=obj
				this.navs = nav;
				this.goodsList = this.cate[this.navs[0]];
			},
			change(name,index){
				this.goodsList = this.cate[name];
				this.activeNum = index
			},
			jumpUrl(name){
				this.$router.push({name:"result",query:{keyword:name}})
			}
		},
		mounted(){
			this.init()
		}
	}
</script>

<style type="text/css" lang=less>
	@color:#ff464e;
	.cate{
		.mint-header{
			background: @color;
			height: 10vh;
		}
		.all-cate{
			width: 100%;
			display: flex;
			margin-top: 1rem;
		}
		.all-cate-left{
			min-width: 26%;
			background: #f9f9f9;
			height:90vh;
			overflow: scroll;
			div{
				width:100%;
				height: 3rem;
				border-top: 1px solid #ddd;
				line-height: 3rem;
				text-align: center;
			}
			div:first-child{
				border-top: none;
			}
			.active{
				background: white;
				border-left: .3rem solid @color;
			}
		}
		.all-cate-right{
			display: flex;
			flex-wrap: wrap;
			box-sizing: border-box;
			padding-left: 5%;
			padding-right: 5%;
			justify-content: space-between;
			align-content: flex-start;
			height: 90vh;
			overflow: scroll;
			.category{
				margin-top: 1rem;
				width: 30%;
				height: 6rem;
				.category-icon{
					height: 4rem;
					width: 4rem;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.category-acount{
					height: 2rem;
					width: 100%;
					text-align: center;
					font-size: .7rem;
				}
			}
		}
	}
</style>