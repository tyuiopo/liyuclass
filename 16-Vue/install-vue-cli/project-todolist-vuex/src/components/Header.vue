<template>
	<div class="Header">
		<input 
			type="text" 
			placeholder="请输入任务,按回车键提交"
			v-model="task"
			@keyup.enter="handleAdd"
		>
	</div>
</template>

<script>
	export default {
		name:'Header',
		data(){
			return {
				task:''
			}
		},
		methods:{
			handleAdd(){
				//1.判断数据
				const task = this.task.trim()
				if(!task){
					alert('任务不能为空')
					return
				}
				//2.生成todo对象
				const todo = {
					task:task,
					done:false
				}
				//3.插入数组
				this.$store.dispatch('addToDo',todo)
				//4.清空输入框
				this.task=''
			}
		}
	}
</script>

<style scoped>
	.Header{
		margin-bottom: 10px;
	}
	.Header input{
		width: 100%;
		height: 30px;
		line-height: 30px;
		padding: 0 10px;
		box-sizing: border-box;
	}
</style>