import { timestamp } from "drizzle-orm/pg-core";

export const timestamps = {
    updated_at: timestamp({ mode: "date", withTimezone: true }),
    created_at: timestamp({ mode: "date", withTimezone: true }).defaultNow().notNull(),
    deleted_at: timestamp({ mode: "date", withTimezone: true }),
};
