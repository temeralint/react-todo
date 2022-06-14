import { Component } from 'react';
import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import ItemFilter from './components/ItemFilter';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';

import { v4 as uuidv4 } from "uuid";

import "./App.css";

const buttons = [
	{
		type: "all",
		label: "All",
	},
	{
		type: "active",
		label: "Active",
	},
	{
		type: "done",
		label: "Done",
	},
];

class App extends Component {
	state = {
		todoData: [
			{
				id: uuidv4(),
				label: "Have fun",
				done: false
			},
			{
				id: uuidv4(),
				label: "Spread Empathy",
				done: false
			},
			{
				id: uuidv4(),
				label: "Generate Value",
				done: true
			},
		],
		searchValue: ''
	}

	addTodo = todoLabel => {
		const check = this.state.todoData.filter(item => item.label.toLowerCase() === todoLabel.toLowerCase())
		if (check.length !== 0) {
			alert('Такой элемент уже есть')
		} else {
			this.setState(({todoData}) => ({
				todoData: [...todoData, {
					id: uuidv4(),
					label: todoLabel
				}]
			}))
		}
	}

	onSearch = searchValue => {
		this.setState({searchValue})
	}

	getVisibleData = (items, searchValue) => {
		if (searchValue.length === 0) {
			return items
		} else {
			return items.filter(item => item.label.toLowerCase().includes(searchValue.toLowerCase()))
		}
	}

	onDelete = (id) => {
		this.setState(({todoData}) => ({
			todoData: todoData.filter(item => item.id !== id)
		}))
	}

	makeDone = id => {
		this.setState(({todoData}) => ({
			todoData: todoData.map(item => item.id !== id ? item : {...item, done: !item.done})
		}))
	}

	render() {
		const {todoData, searchValue} = this.state
		const visibleData = this.getVisibleData(todoData, searchValue)

		return (
			<div className="todo-app">
				<Header data={visibleData}/>
	
				<div className="top-panel d-flex">
					<SearchPanel onSearch={this.onSearch}/>
					<div className="btn-group">
						<ItemFilter/>
					</div>
				</div>
	
				<TodoList data={visibleData} onDelete={this.onDelete} makeDone={this.makeDone}/>
				<AddForm addTodo={this.addTodo}/>
	
			</div>
		);
	}
}

export default App;
