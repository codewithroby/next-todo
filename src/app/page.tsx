import { Suspense } from "react";
import { TodoListSkeleton, TodosList } from "~/components/todo-list";

const HomePage = () => (
  <main>
    <section className="flex min-h-[100dvh] flex-col items-center justify-center gap-8 py-16 md:py-24">
      <h1 className="handwritten text-4xl font-semibold uppercase">
        Next TODO
      </h1>
      <Suspense fallback={<TodoListSkeleton />}>
        <TodosList />
      </Suspense>
    </section>
  </main>
);

export default HomePage;
