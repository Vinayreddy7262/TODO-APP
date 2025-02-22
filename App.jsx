import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Header from './Header';
import ToDoList from './ToDoList';
import "./App.css"

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    const newTodo = {
      id: nanoid(),
      text: inputValue,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  const startEdit = (id) => {
    setEditingId(id);
  };

  const saveEdit = (id, newText) => {
    if (newText.trim() === '') return;
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    }));
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="app">
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addTodo();
            }
          }}
          placeholder="Add a new task"
          style={{ flex: 1, marginRight: '10px' }}
        />
        <button className="add" onClick={addTodo}>Add</button>
      </div>
      <ToDoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
        startEdit={startEdit}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
        editingId={editingId}
      />
    </div>
  );
}

export default App;