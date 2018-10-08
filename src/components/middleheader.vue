<template>
	<div class="middleheader">
		<div>{{info}}</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:{
			info:{
				type:String,
				default:""
			}
		}
	}
</script>

<style type="text/css" lang="less">
	.middleheader{
		background:#EEE;
		height: 5rem;
		overflow: hidden;
		div{
			margin-top:1rem;
			margin-bottom: 1rem;
			text-align: center;
			line-height: 3rem;
			background:white;
		}
	}
</style>