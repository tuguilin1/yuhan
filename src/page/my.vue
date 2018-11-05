<template>
	<div class="my">
		<div class="head">
			<header>
				个人中心
			</header>
			<div class="head-content">
				<p>注册</p>
				<p>登录</p>
			</div>
		</div>
		<section class="my-info">
			<div>我的订单</div>
			<div>我的收藏</div>
			<div>我的免单券</div>
			<div>我的拼团</div>
		</section>
	</div>
</template>

<script type="text/javascript">
	export default{

	}
</script>

<style type="text/css" lang="less">
	.my{
		.head{
			width:100%;
			height:8rem;
			background:#ff464e;
		}
		header{
			width: 100%;
			height: 2rem;
			line-height: 2rem;
			text-align: center;
			color:white;
		}
		.head-content{
			height: 2rem;
			margin-top: 1.5rem;
			line-height: 2rem;
			display: flex;
			p{
				width: 50%;
				text-align: center;
				color:white;
				font-size: 1.3rem;
			}
			p:first-child{
				border-right: 1px solid #EEE;
		
			}
		}
		.my-info{
			width: 100%;
			box-sizing: border-box;
			padding-left: 1rem;
			padding-right: 1rem;
			div{
				width: 100%;
				height: 3rem;
				line-height: 3rem;
				margin-top: 1rem;
				color:#666;
				border-bottom: .5px solid #EEE;
			}
		}
	}
</style>