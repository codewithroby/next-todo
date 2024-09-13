import { Suspense } from "react";
import { TodosList, TodoListSkeleton } from "~/components/todo-list";

const HomePage = ({ params }: { params: { slug: string } }) => {
  const lastPageTodoId = Number(params.slug.replace(/[^0-9]/g, ""));

  return (
    <main>
      <section className="flex min-h-[100dvh] flex-col items-center justify-center gap-8 py-16 md:py-24">
        <h1 className="handwritten text-4xl font-semibold uppercase">
          Next TODO {lastPageTodoId}
        </h1>

        <Suspense fallback={<TodoListSkeleton />}>
          <TodosList selectFrom={lastPageTodoId} />
        </Suspense>
      </section>
    </main>
  );
};

export default HomePage;
