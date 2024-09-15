import { z } from "zod";

const addTodoFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title should not be empty.",
  }),
  description: z.string().min(1, {
    message: "Description should not be empty.",
  }),
});

type AddTodoFormSchemaType = typeof addTodoFormSchema;

export { addTodoFormSchema, type AddTodoFormSchemaType };
