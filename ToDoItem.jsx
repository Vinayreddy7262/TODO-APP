import { useState, useEffect, useRef } from 'react';
import "./App.css"
function ToDoItem({
  todo,
  deleteTodo,
  toggleCompleted,
  startEdit,
  saveEdit,
  cancelEdit,
  editingId
}) {
  const { id, text, completed } = todo;
  const [editValue, setEditValue] = useState(text);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editingId === id && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingId, id]);

  if (editingId === id) {
    return (
      <li className='todo-item'>
        <input className='input-container'
          type="text"
          ref={inputRef}
          value={editValue}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              saveEdit(id, editValue);
            }
          }}
          onChange={(e) => setEditValue(e.target.value)}
        />
        <button className="save" onClick={() => saveEdit(id, editValue)}>Save</button>
        <button className="cancel" onClick={cancelEdit}>Cancel</button>
      </li>
    );
  }

  return (
    <li className={completed ? 'completed' : ''}>
      <div>
        <input className='checkbox'
          type="checkbox"
          checked={completed}
          onChange={() => toggleCompleted(id)}
        />
        <span>{text}</span>
      </div>
      <div className='todo-actions'>
        <button className="edit" onClick={() => startEdit(id)}>Edit</button>
        <button
          className="delete"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;