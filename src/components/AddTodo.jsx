function AddTodo({ dispatch }) {
    const newTodoItem = {
        id: Date.now(),
        text: state.newTodo,
        complete: false,
    };
    dispatch({ type: 'ADD_TODO', payload: newTodoItem })

    return (
        <form className="d-flex justify-content-center align-items-center mb-4">
            <div className="form-outline flex-fill">
                <input type="text"
                    value={state.newTodo}
                    onChange={(e) => dispatch({ type: 'SET_NEW_TODO', payload: e.target.value })}
                    placeholder="Add new todo"
                />
                <button onClick={addTodo}>Add</button>
            </div>
        </form>
    )
}
export default AddTodo