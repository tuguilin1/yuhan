<template>
	<div class="result">
		<mt-header :title="$route.query.keyword">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<Nav :navs="navs" v-if="isnavShow"></Nav>
	</div>
</template>

<script type="text/javascript">
	import Nav from "@/components/nav"
	export default{
		components:{
			Nav
		},
		data(){
			return{
				navs:[],
				isnavShow:false
			}
		},
		methods:{
			init(){
				let {keyword} = this.$route.query
				console.log(keyword)
				let arr1 = ["推荐","价格","销量","筛选"],arr2=["","cprice","sales","addtime"];
				this.navs = arr1.map((item,index)=>{
					return {
						"name":item,
						"url":`https://m.juanpi.com/search?keyword=${encodeURI(keyword)}&storeid=&item=&user_groupids=p8_c4_l4_222&page=1&is_ajax=1&order=${arr2[index]}&sort=&cat_threeids=&price_range=&filter_id=`
					}
				})
				this.isnavShow = true;
			}
		},
		mounted(){
			this.init()
		}
	}
</script>

<style type="text/css" lang="less">
		.mint-header{
			background: #ff464e;
			height: 10vh;
		}
</style>