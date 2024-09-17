"use client";

import { createContext, useContext, useState } from "react";
import { TodoContextType } from "~/types/todo-context";

const TotalTodosContext = createContext<TodoContextType | null>(null);

const TotalTodosContextProvider = ({ children }: ReactNode) => {
  const [totalTodos, setTotalTodos] = useState<number>(0);

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
