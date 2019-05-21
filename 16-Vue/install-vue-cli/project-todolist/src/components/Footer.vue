<template>
	<div class="Footer">
		<input type="checkbox" v-model="allDone">
		<span>{{totalDone}}/{{total}}</span>
		<button @click="handleDelAllDone">删除选中任务</button>
	</div>
</template>

<script>
	export default {
		name:'Footer',
		props:{
			todos:Array,
			selectAllToDo:Function,
			delAllDoneTodo:Function
		},
		computed:{
			//数据总个数
			total(){
				return this.todos.length
			},
			//选中的个数
			totalDone(){
				return this.todos.reduce((total,item)=>{
					if(item.done){
						total++
					}
					return total
				},0)
			},
			allDone:{
				get(){
					return this.total ==this.totalDone && (this.total != 0)
				},
				set(value){
					// console.log(value)
					this.selectAllToDo(value)
				}
			}
		},
		methods:{
			handleDelAllDone(){
				if(window.confirm('您确定要删除所有完成的任务吗?')){
					this.delAllDoneTodo()
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