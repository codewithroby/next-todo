import { z } from "zod";
import { todos } from "~/db/schema";

const TodoSchema = z.object({
  title: z.string().min(1).max(256),
  description: z.string().min(1).max(4096),
});

export type Todo = z.infer<typeof TodoSchema>;
