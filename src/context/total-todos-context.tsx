"use client";

import { createContext, useContext, useState } from "react";
import { TodoContextType } from "~/types/todo-context";
import * as todos from "~/actions/todo-crud";

const TotalTodosContext = createContext<TodoContextType | null>(null);

const TotalTodosContextProvider = async ({ children }: ReactNode) => {
  const [totalTodos, setTotalTodos] = useState<number>(0);

  await todos.getTotal().then((data) => {
    setTotalTodos(data[0].count);
  });

  return (
    <TotalTodosContext.Provider
      value={{ totalTodos: totalTodos, setTotalTodos: setTotalTodos }}
    >
      {children}
    </TotalTodosContext.Provider>
  );
};

const useTotalTodosContext = () => {
  const totalTodosContext = useContext(TotalTodosContext);

  if (totalTodosContext === null) {
    throw new Error(
      "useTotalTodosContext must be used from within a TotalTodosContextProvider.",
    );
  }

  return totalTodosContext;
};

export default TotalTodosContextProvider;

export { useTotalTodosContext };
