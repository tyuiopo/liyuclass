
import {
	ADD_TODO,
	DEL_TODO,
	SELECT_ALL_TODO,
	DEL_ALL_DONE_TODO
} from './types.js'


export default {
	addToDo({commit},todo){
		commit(ADD_TODO,todo)
	},
	delToDo({commit},index){
		commit(DEL_TODO,index)
	},
	selectAllToDo({commit},value){
		commit(SELECT_ALL_TODO,value)
	},
	delAllDoneTodo({commit},value){
		commit(DEL_ALL_DONE_TODO,value)
	}
}