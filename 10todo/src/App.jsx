import { useState, useEffect } from "react";
import { TodoProvider } from "./context";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    // setTodos([...todos, todo]);
    setTodos((prev) => [{ ...todo, id: Date.now() }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    // setTodos(todos.map((t) => (t.id === id ? todo : t)));
    setTodos((prev) => prev.map((t) => (t.id === id ? todo : t)));
    // prev.map((t) => (t.id === id ? todo : t));
  };
  const deleteTodo = (id) => {
    // setTodos(todos.filter((t) => t.id !== id));
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };
  const toggleTodo = (id) => {
    // setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }

    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  //  useEffect(() => {
  //    localStorage.setItem("todos", JSON.stringify(todos));

  //  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, setTodos, updateTodo, deleteTodo, addTodo, toggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
