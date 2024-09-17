"use client";

import { useTotalTodosContext } from "~/context/total-todos-context";

const TotalTodosCounter = ({
  initialTotalTodos,
}: {
  initialTotalTodos: number;
}) => {
  const { totalTodos, setTotalTodos } = useTotalTodosContext();

  setTotalTodos(initialTotalTodos);

  return <span className="font-bold">{totalTodos}</span>;
};

export { TotalTodosCounter };
