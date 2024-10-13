import { defineConfig } from "drizzle-kit";

import { env } from "@/env/server";

export default defineConfig({
    out: "./src/db/migrations",
    dialect: "postgresql",
    schema: "./src/db/schema/index.ts",
    dbCredentials: {
        url: env.DATABASE_URL,
    },
    casing: "snake_case",
    migrations: {
        prefix: "timestamp",
        table: "drizzle_migrations",
    },
    breakpoints: true,
    strict: true,
    verbose: true,
});
