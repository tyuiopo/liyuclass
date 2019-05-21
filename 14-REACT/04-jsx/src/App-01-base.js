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
	}
	handleAdd(){
		// console.log('aaaaaaa')
		this.setState({
			list:[...this.state.list,this.state.val],
			val:''
		})
	}
	handleChange(ev){
		// console.log(ev.target.value)
		this.setState({
			val:ev.target.value
		})
	}
	handleDel(index){
		const list1 = [...this.state.list];
		list1.splice(index,1);
		this.setState({
			list:list1
		})
	}
	render(){
		// return <div><input /><button>新增</button></div>
		// return <Fragment><input /><button>新增</button></Fragment>
		return (
			// <div style={{background:'red'}}>
			<div className='app'>
				<input onChange={this.handleChange.bind(this)} value={this.state.val} />
				<button onClick={this.handleAdd.bind(this)}>新增</button>
				<ul>
					{
						this.state.list.map((item,index)=>{
							// return <li key={index} onClick={this.handleDel.bind(this,index)}>{item}</li>
							return <Item key={index} content={item} handleDel={this.handleDel.bind(this,index)} />
						})
					}
				</ul>
			</div>
		)
	}
}

export default App