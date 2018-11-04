<template>
	<div class="choice">
		<Shop v-for="(item,index) in goodsList" :key="index" :goods="item" />
	</div>
</template>

<script type="text/javascript">
	import Shop from "@/components/shop"
	import {getData} from "@/util/ajax"
	export default{
		data(){
			return{
				goodsList:[]
			}
			
		},
		components:{
			Shop
		},
		methods:{
			async init(){
				let data = await getData("http://webservice.juanpi.com/api/getBrandClearanceGoods?cid=ppqc_jingxuan&zhouyi_ids=p8_c4_l4&page=1");
				this.goodsList = JSON.parse(data.data.data);

			}
		},
		mounted(){
			this.init()
		}
	}
</script>

<style type="text/css" lang="less">
		
</style>