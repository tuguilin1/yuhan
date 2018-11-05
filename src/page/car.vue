<template>
	<div class="car">
		<mt-header title="购物车">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<div class="car-nogoods">
			<div class="car-img">
				<img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png">
			</div>
			<p>看到喜欢的就带回家吧</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{

	}
</script>

<style type="text/css" lang="less">
	@color:#ff464e;
	.car{
		background:#EEE;
		height: 100vh;
		.mint-header{
			background:@color;
		}
		.car-nogoods{
			height: 10rem;
			width: 100%;
			.car-img{
				width: 6rem;
				height: 6rem;
				margin: 4rem auto;
				img{
					width: 100%;
					height: 100%;
				}
			}
			p{
				text-align: center;
			}
		}
	}
</style>