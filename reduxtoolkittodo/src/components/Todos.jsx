import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <>
          <li key={todo.id}>{todo.text}</li>
          <button
            type="button"
            onClick={() => dispatch(removeTodo(todo.id))}
            className="btn btn-danger"
          >
            X
          </button>
        </>
      ))}
    </>
  );
}

export default Todos;
