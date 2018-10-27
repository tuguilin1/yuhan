<template>
	<div class="activity">
		<div class="left-nav" @click="$router.push('/seckill')">
			<img src="https://s2.juancdn.com/jas/180925/d/a/5ba98cb9b6f8ea080546c1d3_540x656.gif" alt="">
		</div>
		<div class="right-nav">
			<div class="right-nav-top" @click="$router.push('/samplesale')">
				<img src="https://goods8.juancdn.com/jas/180929/e/5/5baed07433b089584e3d62ac_540x328.png?imageMogr2/quality/85!/format/png">
			</div>
			<div class="right-nav-bottom">
				<img src="https://goods6.juancdn.com/jas/180930/a/1/5bb0881c33b089152c4d5b54_540x328.png?imageMogr2/quality/85!/format/png">
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{

	}
</script>

<style type="text/css" lang="less" scoped>
	.activity{
		width: 100%;
		height: 16rem;
		display: flex;
		box-sizing: border-box;
		padding-left: .5rem;
		padding-right: .5rem;
		div{
			flex:1;
		}
		.right-nav{
			height: 15rem;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			div{
				flex:1;
				img{
					height: 100%;
				}
			}
		}
		img{
			width: 100%;
			height: 100%
		}
	}
</style>