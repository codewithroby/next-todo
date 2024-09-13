"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var postgres_1 = require("postgres");
var postgres_js_1 = require("drizzle-orm/postgres-js");
var migrator_1 = require("drizzle-orm/postgres-js/migrator");
var env_1 = require("~/env");
var migrationClient = (0, postgres_1.default)(env_1.env.DATABASE_URL, { max: 1 });
(0, migrator_1.migrate)((0, postgres_js_1.drizzle)(migrationClient), { migrationsFolder: "./" });
migrationClient.end();
