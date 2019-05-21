<template>
	<div class="List">
		<Item 
			v-for="(todo,index) in todos"
			:todo="todo"
			:key="index"
			:delToDo="delToDo"
			:index="index"
		/>
	</div>
</template>

<script>
	import Item from './Item.vue'
	export default {
		name:'List',
		props:{
			todos:Array,
			delToDo:Function
		},
		components:{
			Item
		}
	}
</script>

<style scoped>
	
</style>