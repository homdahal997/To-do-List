import Todo from "./Todo";
function AddTodo({ dispatch, state }) {
    const newTodoItem = {
        id: Date.now(),
        text: state.newTodo,
        complete: false,
    };
    const addTodo = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: newTodoItem });
    };
    const completeTodo = (id) => {
        dispatch({ type: 'COMPLETE_TODO', payload: id });
    };

    const deleteTodo = (id) => {
        dispatch({ type: 'DELETE_TODO', payload: id });
    };

    const editTodo = (id) => {
        dispatch({ type: 'EDIT_TODO', payload: id });
    };

    const saveTodo = (id, text) => {
        dispatch({ type: 'SAVE_TODO', payload: { id, text } });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Todo List</h1>
            <input
                type="text"
                value={state.newTodo}
                onChange={(e) => dispatch({ type: 'SET_NEW_TODO', payload: e.target.value })}
                placeholder="Add new todo"
            />
            <button onClick={addTodo}>Add</button>
            {state.todos.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    onComplete={completeTodo}
                    onDelete={deleteTodo}
                    onEdit={editTodo}
                    onSave={saveTodo}
                    isEditing={state.editingId === todo.id}
                />
            ))}
        </div>
    );
};

export default AddTodo;
