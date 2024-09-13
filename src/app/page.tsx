import { TodosList } from "~/components/todo-list";

const HomePage = () => (
  <main>
    <section className="flex h-[100dvh] flex-col items-center justify-center gap-8">
      <h1 className="handwritten text-4xl font-semibold uppercase">
        Next TODO
      </h1>
      <TodosList />
    </section>
  </main>
);

export default HomePage;
