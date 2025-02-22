import ToDoItem from './ToDoItem';

function ToDoList({
  todos,
  deleteTodo,
  toggleCompleted,
  startEdit,
  saveEdit,
  cancelEdit,
  editingId
}) {
  return (
    <ul classNmae="todo-list">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
          startEdit={startEdit}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
          editingId={editingId}
        />
      ))}
    </ul>
  );
}

export default ToDoList;