import * as todos from "~/actions/todo-crud";

const TodosList = async () => {
  const todosList = await todos.getAll();

  return <div>{todosList.map((item, index) => {})}</div>;
};

export { TodosList };
