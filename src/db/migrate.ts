import postgres from "postgres";

import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";

import { env } from "~/env";

const migrationClient = postgres(env.DATABASE_URL, { max: 1 });

migrate(drizzle(migrationClient), { migrationsFolder: "./" });
