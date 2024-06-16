import React from 'react';
import Todo from "./Todo";
import { ToastContainer, toast } from 'react-toastify';



function AddTodo({ index, dispatch, state }) {
    const addTodo = (e) => {
        e.preventDefault();
        const newTodoItem = {
            id: index,
            text: state.newTodo,
            complete: false,
        };
        dispatch({ type: 'ADD_TODO', payload: newTodoItem });
    toast.success('Todo added successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    };
    const completeTodo = (id) => {
        dispatch({ type: 'COMPLETE_TODO', payload: id });
    };

    const deleteTodo = (id) => {
        dispatch({ type: 'DELETE_TODO', payload: id });
        toast.error('Todo deleted successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const editTodo = (id) => {
        dispatch({ type: 'EDIT_TODO', payload: id });
    };

    const saveTodo = (id, text) => {
        dispatch({ type: 'SAVE_TODO', payload: { id, text } });
        toast.info('Todo saved successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={addTodo}>
                <div className="form-outline flex-fill">
                    <input
                        type="text"
                        id="form2"
                        className="form-control"
                        value={state.newTodo}
                        onChange={(e) => dispatch({ type: 'SET_NEW_TODO', payload: e.target.value })}
                        style={{ border: '1px solid #39c0ed' }}
                    />
                    <label className="form-label" htmlFor="form2">Enter TODO</label>
                </div>
                <button id="addtodobutton" type="submit" className="btn btn-info ms-2">Add</button>
            </form>
            <div className="tab-content" id="ex1-content">
                <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel"
                    aria-labelledby="ex1-tab-1">
                    {state.todos.length > 0 ? (
                        <ul id="mytodo" className="list-group mb-0">
                            {state.todos.map((todo) => (
                                <li key={todo.id} className="list-group-item d-flex align-items-center border-0 mb-2 rounded" style={{ backgroundColor: '#f4f6f7' }}>
                                    <Todo
                                        key={todo.id}
                                        todo={todo}
                                        onComplete={completeTodo}
                                        onDelete={deleteTodo}
                                        onEdit={editTodo}
                                        onSave={saveTodo}
                                        isEditing={state.editingId === todo.id}
                                    />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No todos yet! Add them in the input field to replace this area or refresh the page to see todos from fetch API</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AddTodo;