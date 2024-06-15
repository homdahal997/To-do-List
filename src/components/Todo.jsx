import { useState } from "react";
function Todo({ todo, onComplete, onDelete, onEdit, onSave, isEditing }) {
    const [editText, setEditText] = useState(todo.text);
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => onComplete(todo.id)}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    style={{ marginLeft: '10px' }}
                />
            ) : (
                <span style={{ marginLeft: '10px', textDecoration: todo.complete ? 'line-through' : 'none' }}>
                    {todo.text}
                </span>
            )}
            {isEditing ? (
                <button onClick={() => onSave(todo.id, editText)} style={{ marginLeft: '10px' }}>
                    Save
                </button>
            ) : (
                <>
                    <button onClick={() => onEdit(todo.id)} style={{ marginLeft: '10px' }}>
                        Edit
                    </button>
                    <button onClick={() => onDelete(todo.id)} disabled={!todo.complete} style={{ marginLeft: '10px' }}>
                        Delete
                    </button>
                </>
            )}
        </div>
    );
}
export default Todo