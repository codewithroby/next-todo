import * as todos from "~/actions/todo-crud";
import { cn, isOdd } from "~/lib/utils";
import { DeleteButton } from "~/components/ui/todo/delete-button";
import { TodoPagination } from "~/components/ui/todo/pagination";

const TodosList = async ({ page = 1 }: { page: number }) => {
  const totalTodos = await todos.getTotal().then((total) => {
    return total[0].count;
  });
  const totalPages = Math.ceil(totalTodos / 3);
  if (page > totalPages) page = totalPages;
  const todosList = await todos.getAll(page);

  return (
    <div className="container max-w-4xl space-y-4">
      <div className="flex flex-col rounded-md bg-white shadow-sm">
        {todosList.map((todo, index) => (
          <div
            className={cn("p-4", {
              "bg-slate-50": isOdd(index),
            })}
            key={index}
          >
            <div className="flex items-center gap-4">
              <span className="w-10">{index + 1 + 3 * (page - 1)}</span>
              <div className="flex flex-1 flex-col gap-2">
                <span className="handwritten text-lg font-semibold uppercase">
                  {todo.title}
                </span>
                <p>{todo.description}</p>
              </div>
              <DeleteButton id={todo.id} page={page} key={todo.id} />
            </div>
          </div>
        ))}
      </div>
      <TodoPagination page={page} totalPages={totalPages} />
    </div>
  );
};

const TodoListSkeleton = () => (
  <div className="container max-w-4xl">
    <div className="flex flex-col rounded-md bg-white shadow-sm">
      {[...Array(3)].map((_, index) => (
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
