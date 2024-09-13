"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { TodosList, TodoListSkeleton } from "~/components/todo-list";

const TodosWrapper = () => {
  const searchParams = useSearchParams();
  const lastPageTodoId = searchParams.get("lastPageTodoId");

  return (
    <>
      <Suspense fallback={<TodoListSkeleton />}>
        <TodosList selectFrom={0} />
      </Suspense>
    </>
  );
};

export { TodosWrapper };
