import React from "react";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMSG, setTodoMSG] = useState(todo.text);
  const {
    updateTodo,
    deleteTodo,
    toggleTodo: toggleTodoFromContext,
  } = useTodoContext();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, text: todoMSG });
    setIsTodoEditable(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodoFromContext(todo.id)}
      />

      {isTodoEditable ? (
        <input value={todoMSG} onChange={(e) => setTodoMSG(e.target.value)} />
      ) : (
        <span>{todo.text}</span>
      )}

      <button onClick={editTodo}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}



export default TodoItem;
