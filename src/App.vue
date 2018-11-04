<template>
  <div id="app">
    <router-view/>
	<footer @click="changeActive" v-if="isBottomShow">
		<router-link tag="div" to="/" :class="activeIndex !=='page1'?'page1':'icon-active1'">首页</router-link>
		<router-link tag="div" to="/cate" :class="activeIndex !=='page2'?'page2':'icon-active2'">分类</router-link>
		<router-link tag="div" to="/" :class="activeIndex !=='page3'?'page3':'icon-active3'">购物车</router-link>
		<router-link tag="div" to="/" :class="activeIndex !=='page4'?'page4':'icon-active4'">我的卷皮</router-link>
	</footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return{
  		activeIndex:"page1",
  		isBottomShow:true
  	}
  },
  methods:{
  	changeActive(event){
  		switch(event.target.innerHTML){
  			case '首页':
  				this.activeIndex = "page1";
  				break;
  			case '分类':
  				this.activeIndex =  'page2';
  				break;
  			case '购物车':
  				this.activeIndex = "page3";
  				break;
  			case '我的卷皮':
  				this.activeIndex = "page4";
  				break
  		}
  	},
  }
}
</script>

<style type="text/css" lang="less">
*{
  margin: 0;
  padding: 0;
}
footer{
		width: 100%;
		position: fixed;
		left:0;
		right:0;
		bottom:0;
		height: 4rem;
		background-color: white;
		display: flex;
		div{
			width: 25%;
			box-sizing: border-box;
			
			text-align: center;
			font-size: .8rem;
			color:#333;
		}
		.page1{
			background:url("https://goods4.juancdn.com/bao/171127/6/0/5a1bce9a8150a16b4e766a8d_72x72.png");
		}
		.page2{
			background: url("https://s1.juancdn.com/bao/171127/9/6/5a1bcef08150a176c87f92be_72x72.png");
		}
		.page3{
			background:url("https://s1.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png");
		}
		.page4{
			background:url("https://s1.juancdn.com/bao/170411/9/7/58ecaec4a43d1f5e7c6dc860_72x72.png");
		}
		.icon-active1{
			background:url("https://s1.juancdn.com/bao/171127/7/0/5a1bce9f8150a16b8658e657_72x72.png");
		}
		.icon-active2{
			background:url("https://goods7.juancdn.com/bao/171127/c/3/5a1bcef5a9fcf842f140cb1d_72x72.png");
		}
		.icon-active3{
			background:url("https://goods4.juancdn.com/bao/170411/7/3/58ecaebba43d1f5e6b2f0d02_72x72.png");
		}
		.icon-active4{
			background:url("https://goods1.juancdn.com/bao/170411/0/d/58ecaec6a43d1f5e7a188a96_72x72.png");
		}
		.page1,.page2,.page3,.page4,.icon-active1,.icon-active2,.icon-active3,.icon-active4{
			background-repeat: no-repeat;
			background-size: 2rem 2rem;
			padding-top: 2.5rem;
			background-position: center .5rem;
		}
		.icon-active1,.icon-active2,.icon-active3,.icon-active4{
			color:#ff464e;
		}
	}
</style>
