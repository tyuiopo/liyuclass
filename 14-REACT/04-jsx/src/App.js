import React,{ Component,Fragment } from 'react'
import Item from './Item.js'

import './App.css'

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:["吃饭","睡觉","玩游戏"],
			val:""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}
	handleAdd(){
		this.setState(preState=>({
			list:[...preState.list,preState.val],
			val:''
		}))
	}
	handleChange(ev){
		const val = ev.target.value;
		this.setState(()=>({
			val
		}))
	}
	handleDel(index){
		const list1 = [...this.state.list];
		list1.splice(index,1);

		this.setState(()=>({
			list:list1
		}))
	}
	getItems(){
		return 	this.state.list.map((item,index)=>{
					return <Item key={index} content={item} handleDel={this.handleDel.bind(this,index)} />
				})
	}
	render(){
		return (
			<div className='app'>
				<input onChange={this.handleChange} value={this.state.val} />
				<button onClick={this.handleAdd}>新增</button>
				<ul>
					{
						this.getItems()
					}
				</ul>
			</div>
		)
	}
}

export default App