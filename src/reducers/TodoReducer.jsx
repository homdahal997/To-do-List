
export const initialState = {
    todos: [],
    newTodo: '',
    editingId: null,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TODOS':
            return { ...state, todos: action.payload };
        case 'ADD_TODO':
            return {
                ...state,
                todos: [action.payload, ...state.todos],
                newTodo: '',
            };
        case 'COMPLETE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo
                ),
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        case 'EDIT_TODO':
            return { ...state, editingId: action.payload };
        case 'SAVE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
                ),
                editingId: null,
            };
        case 'SET_NEW_TODO':
            return { ...state, newTodo: action.payload };
        default:
            return state;
    }
};