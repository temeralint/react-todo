function Header({data}) {
    const done = data.filter(item => item.done).length
    const todo = data.length - done
    return (
        <div className="app-header d-flex">
            <h1>Todo List</h1>
            <h2>
                {todo === 0 ? 'Nothing' : `${todo} more to do`}, 
                {done === data.length ? 'vse sdano' : `${done} done` }
            </h2>
        </div>
    )
}

export default Header;