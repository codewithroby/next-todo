CREATE TABLE IF NOT EXISTS "todos" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar(256),
	"description" text,
	"completed" boolean DEFAULT false,
	"completed_at" timestamp DEFAULT now()
);
