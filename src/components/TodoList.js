import TodoItem from "./TodoItem"

function TodoList({data, onDelete, makeDone}) {
    return (
        <ul className="list-group todo-list">
            {
                data.map((item, index) => {
                    return (
                        <TodoItem 
                            key={index}
                            id={item.id} 
                            label={item.label} 
                            done={item.done}  
                            onDelete={onDelete}
                            makeDone={makeDone}
                        />
                    )
                })
            }
        </ul>
    )
}

export default TodoList