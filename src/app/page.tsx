import { Suspense } from "react";
import { TodosList, TodoListSkeleton } from "~/components/ui/todo/todo-list";

const HomePage = ({
  searchParams,
}: {
  searchParams?: {
    page?: number;
  };
}) => (
  <main>
    <section className="flex min-h-[100dvh] flex-col items-center justify-center gap-8 py-20 md:py-24">
      <h1 className="handwritten text-4xl font-semibold uppercase">
        Next TODO
      </h1>

      <Suspense fallback={<TodoListSkeleton />}>
        <TodosList
          page={
            isNaN(Number(searchParams?.page)) || Number(searchParams?.page) < 1
              ? 1
              : Number(searchParams?.page)
          }
        />
      </Suspense>
    </section>
  </main>
);

export default HomePage;
