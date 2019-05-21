<template>
	<div class="Footer">
		<input type="checkbox" v-model="allDone">
		<span>{{totalDone}}/{{total}}</span>
		<button @click="handleDelAllDone">删除选中任务</button>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name:'Footer',
		computed:{
			// 使用对象展开运算符将 getter 混入 computed 对象中
			...mapGetters([
				'total',
				'totalDone'
			]),
			//全选、全不选
			allDone:{
				get(){
					return this.$store.getters.allDone
				},
				set(value){
					// console.log(value)
					this.$store.dispatch('selectAllToDo',value)
				}
			}
		},
		methods:{
			handleDelAllDone(){
				if(window.confirm('您确定要删除所有完成的任务吗?')){
					this.$store.dispatch('delAllDoneTodo')
				}
			}
		}
	}
</script>

<style scoped>
	.Footer{
		width: 100%;
		height: 30px;
		line-height: 30px;
		margin-top:40px;
	}
	.Footer input{
		float: left;
		margin-top: 9px;
		margin-right:10px; 
	}
	.Footer button{
		float: right;
		margin-top: 4px;
	}
</style>