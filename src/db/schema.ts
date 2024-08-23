import {
  boolean,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: uuid("id").primaryKey(),
  title: varchar("title", { length: 256 }),
  description: text("description"),
  completed: boolean("completed").default(false),
  completedAt: timestamp("completed_at").defaultNow(),
});
