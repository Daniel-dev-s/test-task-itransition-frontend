import React from 'react'
import '../styles/style.css'
import { Item } from './item'

export class Container extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	todo_items : []
	    }
	  }

	 handleClick(event){
		let items = this.state.todo_items;
	 	let title = event.target.previousSibling.value;
	 	let id = Math.random()*9999;

	 	items.push({
			title:title,
			id:id
	 	});
	 	this.setState({
			todo_items:items
		});
	 }

	handleRemoveButtonClick(id,event) {
		let items = this.state.todo_items;
		items = items.filter(e => e.id !== id);

		this.setState({
			todo_items:items
		});

	}

  	render() {
		const items = this.state.todo_items.map((value) =>
			(
				<div className="todo-item-container">
				<Item title={value.title} key={value.id} />
				<div>
					<button >Edit</button>
					<button onClick={this.handleRemoveButtonClick.bind(this,value.id)}>X</button>
				</div>
				</div>
				));

		return (
	      <div className="todo-container">
	        <h1> TODO list </h1>

	        <div className="add-new-todo">
	        	<input type="text" />
	        	<button onClick={this.handleClick.bind(this)}>+</button>
	        </div>

	        <div className="todo-items">
	        	{items}
	        </div>

	      </div>
	    );
    }

}
