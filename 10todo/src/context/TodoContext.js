import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: " todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

export const useTodoContext = () => {
  return useContext(TodoContext);
};
export const TodoProvider = TodoContext.Provider;
