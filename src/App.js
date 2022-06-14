import { Component } from 'react';
import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import ItemFilter from './components/ItemFilter';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';

import { v4 as uuidv4 } from "uuid";

import "./App.css";

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
		searchValue: '',
		filter: 'all'
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

	updateFilter = filter => {
		this.setState({filter})
	}

	getFilteredTodo = (items, filter) => {
		switch (filter) {
			case 'active':
				return items.filter(item => item.done === false)
			case 'done':
				return items.filter(item => item.done)
			default:
				return items
		}
	}

	render() {
		const {todoData, searchValue, filter} = this.state
		const visibleData = this.getFilteredTodo(this.getVisibleData(todoData, searchValue), filter)

		return (
			<div className="todo-app">
				<Header data={visibleData}/>
	
				<div className="top-panel d-flex">
					<SearchPanel onSearch={this.onSearch}/>
					<div className="btn-group">
						<ItemFilter updateFilter={this.updateFilter} filter={filter}/>
					</div>
				</div>
	
				<TodoList data={visibleData} onDelete={this.onDelete} makeDone={this.makeDone}/>
				<AddForm addTodo={this.addTodo}/>
	
			</div>
		);
	}
}

export default App;
