import React from "react";

type TodoContextType = {
  totalTodos: number;
  setTotalTodos: React.Dispatch<React.SetStateAction<boolean>>;
};

export type { TodoContextType };
