<template>
	<div class="search">
		<header>
			<mt-search
			  v-model="value"
			  cancel-text="取消"
			  placeholder="搜索">
			</mt-search>
		</header>
		<div class="search-hot">
			<div class="head">热搜</div>
			<div class="tag">
				<div v-for="item in data">{{item.text}}</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import {getBrandData} from "@/util/ajax"
	export default{
		data(){
			return{
				value:'',
				data:""
			}
		},
		methods:{
			async init(){
				let data = await getBrandData('https://m.juanpi.com/keywords/search?plateform=m&zy_ids=c4_l4&item=');
				this.data = JSON.parse(data.data.data).hot_keywords;
			}
		},
		mounted(){
			this.init()
		}
	}
</script>

<style type="text/css" lang="less">
	.search{
		.mint-search{
			width: 100%;
			height: 100%;
		}
		.search-hot{
			margin-top: 1rem;
			box-sizing: border-box;
			padding-left: 1rem;
			padding-right: 1rem;
			.tag{
				margin-top: 1rem;
				display: flex;
				flex-wrap: wrap;
				div{
					padding:.3rem .8rem;
					background: #DDD;
					border-radius: 10%;
					margin-left: 1rem;
					margin-top: .5rem;
				}
			}
		}
	}
</style>