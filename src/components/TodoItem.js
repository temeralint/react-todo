function TodoItem({id, label, done, onDelete, makeDone}) {
    let todoStyle = "todo-list-item"
    if (done) {
        todoStyle += " done"
    }

    return (
        <li className="list-group-item">
            <span className={todoStyle}>
                <span
                    className="todo-list-item-label"
                >
                    {label}
                </span>

                <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={() => makeDone(id)}
                >
                    <i className="fa fa-exclamation" />
                </button>

                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={() => onDelete(id)}
                >
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        </li>
    )
}

export default TodoItem