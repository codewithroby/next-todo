"use server";

import { eq } from "drizzle-orm";
import { db } from "~/db";
import { todos } from "~/db/schema";

const addTodo = async () => {
  const newTodo = await db.insert(todos).values({
    title: "Test Todo 1",
    description: "Test Description 1",
  });
  return newTodo;
};

const updateTodo = async () => {
  const updatedTodo = await db
    .update(todos)
    .set({
      title: "Updated Title 2",
      description: "Updated Description 2",
    })
    .where(eq(todos.id, "18683a76-c219-4b9d-b207-6f6f127a536e"))
    .returning({
      oldTimestamp: todos.createdAt,
      newTimestamp: todos.updatedAt,
    });
  console.log(updatedTodo);
  return updatedTodo;
};

export { addTodo, updateTodo };
