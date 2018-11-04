<template>
	<div class="clearance">
		<div class="goods-list">
			<Goods v-for = "(items,index) in goodsList" :key = "items.goods_id||items.enid" :goods="items"></Goods>
		</div>
	</div>
</template>

<script type="text/javascript">
	import {getData} from "@/util/ajax"
	import Goods from "@/components/goods"
	export default{
		components:{
			Goods
		},
		data(){
			return{
				goodsList:[]
			}
		},
		methods:{
			async init(){
				let {name} = this.$route.params
				let url = `http://webservice.juanpi.com/api/getBrandClearanceOtherGoods?cate_key=${name}&page=1&pf=m&brandclear=brandclear_127_419_A`
				let data = await getData(url);
				this.goodsList = JSON.parse(data.data.data);
			}
		},
		mounted(){
			this.init()
		},
		beforeRouteUpdate(to,from,next){
			next();
			this.init();

		}
	}
</script>

<style type="text/css" lang="less">
	.goods-list{
		height: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>