import * as todos from "~/actions/todo-crud";
import { cn, isOdd } from "~/lib/utils";
import { DeleteButton } from "~/components/ui/todo/delete-button";

const TodosList = async ({ page = 0 }: { page: number }) => {
  const todosList = await todos.getAll(page);

  return (
    <div className="container max-w-4xl">
      <div className="flex flex-col rounded-md bg-white shadow-sm">
        {todosList.map((todo, index) => (
          <div
            className={cn("p-4", {
              "bg-slate-50": isOdd(index),
            })}
            key={index}
          >
            <div className="flex items-center gap-4">
              <span className="w-10">{index + 1}</span>
              <span className="w-1/4">{todo.title}</span>
              <p className="flex-1">{todo.description}</p>
              <DeleteButton id={todo.id} page={page} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TodoListSkeleton = () => (
  <div className="container max-w-4xl">
    <div className="flex flex-col rounded-md bg-white shadow-sm">
      {[...Array(5)].map((_, index) => (
        <div
          className={cn("p-4", {
            "bg-slate-50": isOdd(index),
          })}
          key={index}
        >
          <div className="flex animate-pulse gap-4">
            <span className="rounded-md bg-gray-200 px-6 py-3"></span>
            <span className="w-1/4 rounded-md bg-gray-200 px-6 py-3"></span>
            <p className="flex-1 rounded-md bg-gray-200 px-6 py-3"></p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export { TodosList, TodoListSkeleton };
