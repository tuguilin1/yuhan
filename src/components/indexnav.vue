<template>
	<div class="index-nav">
		<div>
			<img src="https://goods5.juancdn.com/jas/180222/8/5/5a8e9c188150a133c81553be_270x241.png?iopcmd=convert&Q=85&dst=png">
		</div>
		<div @click="jump(2)">
			<img src="https://goods8.juancdn.com/jas/180530/f/e/5b0e68b4b6f8ea11b8424b37_270x241.png?imageMogr2/quality/85!/format/png">
		</div>
		<div @click="jump(3)">
			<img src="https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png">
		</div>
		<div>
			<img src="https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png?imageMogr2/quality/85!/format/png">
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		methods:{
			jump(index){
				switch(index){
					case 2:
						this.$router.push("/seckill");
						break;
					case 3:
						this.$router.push("/samplesale");
						break;
				}
			}
		}
	}
</script>

<style type="text/css" lang="less" scoped>
	.index-nav{
		margin-top: 1rem;
		width: 100%;
		display: flex;
		height: 6rem;
		div{
			flex:1;
			height: 100%;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>