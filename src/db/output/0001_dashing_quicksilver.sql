ALTER TABLE "todos" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "todos" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "todos" ADD COLUMN "updated_at" timestamp DEFAULT now();