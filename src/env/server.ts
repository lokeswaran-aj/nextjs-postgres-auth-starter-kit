/* eslint-disable n/no-process-env */
import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { ZodError, z } from "zod";

expand(config());

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "test", "production"]),
        DATABASE_URL: z.string().url(),
        DB_MIGRATING: z
            .string()
            .refine((s) => s === "true" || s === "false")
            .transform((s) => s === "true")
            .optional(),
        AUTH_GOOGLE_ID: z.string().min(1),
        AUTH_GOOGLE_SECRET: z.string().min(1),
        AUTH_GITHUB_ID: z.string().min(1),
        AUTH_GITHUB_SECRET: z.string().min(1),
    },
    onValidationError: (error: ZodError) => {
        console.error("❌ Invalid environment variables:", error.flatten().fieldErrors);
        process.exit(1);
    },
    emptyStringAsUndefined: true,
    experimental__runtimeEnv: process.env,
});
