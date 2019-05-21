import React,{ Component,Fragment } from 'react'
import { Input,Button,Row,Col,List } from 'antd';

import store from './store/index.js'
import AppUI from './AppUI.js'

import {getAddItemAction,getChangeItemAction,getDelItemAction} from './store/actionCreator.js'


//容器组件
class App extends Component{
	constructor(props){
		super(props);
		/*
		this.state = {
			list:["吃饭"],
			val:""
		}
		*/
		//初始化时获取store中的数据
		this.state= store.getState()
		//当store中的数据发生变化时触发
		store.subscribe(()=>
			//获取store中的最新数据来更新当前组件的state数据
			this.setState(()=>store.getState())
		)

		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDel = this.handleDel.bind(this);
	}
	handleAdd(){
		/*
		this.setState(preState=>({
			list:[...preState.list,preState.val],
			val:''
		}))
		*/
		/*
		const action = {
			type:ADD_ITEM,
		}
		*/
		const action = getAddItemAction();
		store.dispatch(action)
	}
	handleChange(ev){
		const val = ev.target.value;
		/*
		this.setState(()=>({
			val
		}))
		*/
		/*
		const action ={
			type:CHANGE_ITEM,
			payload
		}
		*/
		const action = getChangeItemAction(val)
		store.dispatch(action)
	}
	handleDel(index){
		const list1 = [...this.state.list];
		/*
		list1.splice(index,1);

		this.setState(()=>({
			list:list1
		}))
		*/
		/*
		const action = {
			type:DEL_ITEM,
			payload:index
		}
		*/
		const action = getDelItemAction(index)
		store.dispatch(action)
	}
	render(){
		return (
			<AppUI 
				handleChange={this.handleChange}
				val={this.state.val}
				handleAdd={this.handleAdd}
				list={this.state.list}
				handleDel={this.handleDel}
			/>
		)
	}
}

export default App