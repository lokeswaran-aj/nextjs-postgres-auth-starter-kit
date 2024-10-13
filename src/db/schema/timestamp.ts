import { timestamp } from "drizzle-orm/pg-core";

export const timestamps = {
    updated_at: timestamp({ mode: "date", precision: 3, withTimezone: true }).$onUpdate(
        () => new Date()
    ),
    created_at: timestamp({ mode: "date", precision: 3, withTimezone: true })
        .defaultNow()
        .notNull(),
    deleted_at: timestamp({ mode: "date", precision: 3, withTimezone: true }),
};
