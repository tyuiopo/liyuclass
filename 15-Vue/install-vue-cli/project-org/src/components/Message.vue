<template>	
	<div class="Message">
		{{msg}}
	</div>
</template>
<script>
	export default {
		name:'Message',
		props:{
			msg:String
		}
	}
</script>
<style>
	.Message{
		color: red;
	}
</style>