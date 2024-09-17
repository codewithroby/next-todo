"use server";

import { z } from "zod";

import { count, eq, desc } from "drizzle-orm";
import { db } from "~/db";
import { todos } from "~/db/schema";

import { AddTodoFormSchemaType } from "~/types/todo-form";
import { revalidatePath } from "next/cache";

const addTodo = async (values: z.infer<AddTodoFormSchemaType>) =>
  await db
    .insert(todos)
    .values({
      title: values.title,
      description: values.description,
    })
    .then(() => {
      revalidatePath("/", "page");
    });

const updateTodo = async () =>
  await db
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

const deleteTodo = async (id: string) =>
  await db
    .delete(todos)
    .where(eq(todos.id, id))
    .returning({
      deletedId: todos.id,
    })
    .then((data) => {
      revalidatePath("/", "page");
      return data;
    });

const getAll = async (page: number = 0) =>
  await db
    .select({
      id: todos.id,
      title: todos.title,
      description: todos.description,
    })
    .from(todos)
    .orderBy(desc(todos.pagination_id))
    .limit(5)
    .offset(page * 5)
    .execute();

const getTotal = async () => await db.select({ count: count() }).from(todos);

export { addTodo, updateTodo, deleteTodo, getAll, getTotal };
