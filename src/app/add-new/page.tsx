import { AddTodoForm } from "~/components/ui/todo/add-form";

const AddNewTodoPage = () => (
  <main>
    <section className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="handwritten text-4xl font-semibold uppercase">
        Add New Todo
      </h1>
      <div className="container max-w-xl">
        <div className="rounded-md bg-white p-8 shadow-sm">
          <AddTodoForm />
        </div>
      </div>
    </section>
  </main>
);

export default AddNewTodoPage;
