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
		<transition :name="slide">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script type="text/javascript">
	
	export default{
		data(){
			return{
				objNav:{
					"精选":"chioce",
					"鞋包配饰":"xiezi",
					"美妆":"meizhuang",
					"运动":"yundong",
					"母婴童装":"muyingtongzhuang",
					"居家数码":"jujiashuma"
				},
				activeNum:0,
				slide:"slide-right"
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
			},
			compare(path1,path2){
				let num1,num2
				Object.keys(this.objNav).forEach((item,index)=>{
					if(this.objNav[item] === path1){
						num1 = index
					}
					if(this.objNav[item] === path2){
						num2 = index
					}
				})
				return num1 - num2
			},
			init(){
				let name = this.$route.params.name;
				if(!name){
					this.activeNum = 0;
				}else{
					Object.keys(this.objNav).forEach((item,index)=>{
						if(this.objNav[item] === name){
							this.activeNum = index
						}
					})
				}
			}
		},
		mounted(){
			this.init();
		},
		watch:{
			"$route"(to,from){
				const toDepth = to.path.split('/')
			    const fromDepth = from.path.split('/')
			   if(this.compare(toDepth[toDepth.length-1],fromDepth[fromDepth.length-1])>0){
			   	this.slide = "slide-right"
			   }else{
			   	this.slide = "slide-left"
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
	.slide-right-enter{
		transform:translateX(100%);
	}
	.slide-right-enter-active{
		transition: all .5s;
	}
	.slide-right-leave-active{
		transition: all .5s;
	}
	.slide-right-leave-to{
		transform: translateX(-100%);
	}
	.slide-left-enter{
		transform:translateX(-100%);
	}
	.slide-left-enter-active{
		transition: all .5s;
	}
	.slide-left-leave-to{
		transform:translateX(100%);
	}
	.slide-left-leave-active{
		transition: all .5s;
	}
</style>