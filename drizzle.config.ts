import { defineConfig } from "drizzle-kit";

import { env } from "~/env";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/output",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
