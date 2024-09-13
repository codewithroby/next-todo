import * as todos from "~/actions/todo-crud";
import { cn, isOdd } from "~/lib/utils";

const TodosList = async () => {
  const todosList = await todos.getAll();

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
            <div className="flex gap-4">
              <span className="max-w-12">{index}</span>
              <span className="w-1/4">{todo.title}</span>
              <p className="flex-1">{todo.description}</p>
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
