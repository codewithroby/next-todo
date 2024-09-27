import { Suspense } from "react";
import { TodoPaginationSkeleton } from "~/components/ui/todo/pagination";
import { PaginationWrapper } from "~/components/ui/todo/pagination-wrapper";
import { TodosList, TodoListSkeleton } from "~/components/ui/todo/todo-list";

const HomePage = ({
  searchParams,
}: {
  searchParams?: {
    page?: number;
  };
}) => {
  const page = Math.max(1, Number(searchParams?.page) || 1);

  return (
    <main>
      <section className="flex min-h-[100dvh] flex-col items-center justify-center gap-8 py-20 md:py-24">
        <h1 className="handwritten text-4xl font-semibold uppercase">
          Next TODO
        </h1>

        <Suspense fallback={<TodoListSkeleton />} key={page}>
          <TodosList page={page} />
        </Suspense>
        <Suspense fallback={<TodoPaginationSkeleton />}>
          <PaginationWrapper page={page} />
        </Suspense>
      </section>
    </main>
  );
};

export default HomePage;
