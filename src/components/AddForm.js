import { Component } from 'react'

class AddForm extends Component {
    state = {
        todoLabel: ''
    }

    updateState = e => {
        this.setState({
            todoLabel: e.target.value
        })
    }

    addTodo = () => {
        this.props.addTodo(this.state.todoLabel)
        this.setState({
            todoLabel: ''
        })
    }

    render() {
        return (
            <div className="item-add-form d-flex">
                <input
                    type="text"
                    className="form-control"
                    placeholder="What needs to be done"
                    value={this.state.todoLabel}
                    onChange={this.updateState}
                />
                <button 
                    className="btn btn-outline-secondary"
                    onClick={this.addTodo}
                >
                    Add item
                </button>
            </div>
        )
    }
}

export default AddForm