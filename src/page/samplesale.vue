<template>
	<div class="samplesale">
		<mt-header title="品牌特卖">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="wrap-nav">
			<nav>
				<div v-for="(item,index) in Object.keys(objNav)" :class="index == activeNum?'active':''" @click="changeUrl(item,index)">{{item}}</div>
			</nav>
		</div>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	
	export default{
		data(){
			return{
				objNav:{
					"精选":"jingxuan",
					"鞋包配饰":"xiezi",
					"美妆":"meizhuang",
					"运动":"yundong",
					"母婴童装":"muyingtongzhuang",
					"居家数码":"jujiashuma"
				},
				activeNum:0
			}
		},
		methods:{
			changeUrl(name,index){
				this.activeNum = index
				if(name === "精选"){
					this.$router.push("/samplesale")
				}else{
					this.$router.push(`/samplesale/clearance/${this.objNav[name]}`)
				}
			}
		}
	}
</script>


<style type="text/css" lang="less">
	@color:#ff464e;
	.samplesale{
		.mint-header{
			background: @color;
		}
		.wrap-nav{
			height: 3rem;
			overflow: hidden;
		}
		nav{
			width: 100%;
			display: flex;
			overflow: scroll;
			height: 3.5rem;
			justify-content: space-around;
			div{
				padding:.2rem .4rem;
				white-space: nowrap;
				height: 2rem;
				line-height: 2rem;
				font-size: .8rem;
			}
			.active{
				color:@color;
				border-bottom: 2px solid @color;
			}
		}
	}
</style>