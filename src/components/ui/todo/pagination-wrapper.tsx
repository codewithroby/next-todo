import * as todos from "~/actions/todo-crud";
import { TodoPagination } from "./pagination";

const PaginationWrapper = async ({ page }: { page: number }) => {
  const totalTodos = await todos.getTotal().then((total) => {
    return total[0].count;
  });
  const totalPages = Math.ceil(totalTodos / 3);
  if (page > totalPages) page = totalPages;

  return <TodoPagination page={page} totalPages={totalPages} key={page} />;
};

export { PaginationWrapper };
