import { defineConfig } from "drizzle-kit";

import { env } from "~/env";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./src/db/output",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
