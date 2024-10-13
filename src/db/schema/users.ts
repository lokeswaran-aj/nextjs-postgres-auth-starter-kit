import { createId } from "@paralleldrive/cuid2";
import { integer, pgTable, primaryKey, text, timestamp } from "drizzle-orm/pg-core";
import type { AdapterAccountType } from "next-auth/adapters";

import { timestamps } from "./timestamp";

export const users = pgTable("users", {
    id: text()
        .primaryKey()
        .$defaultFn(() => `user_${createId()}`),
    name: text(),
    email: text().unique(),
    emailVerified: timestamp("email_verified", { mode: "date", precision: 3, withTimezone: true }),
    image: text(),
    ...timestamps,
});

export const accounts = pgTable(
    "accounts",
    {
        userId: text("user_id")
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        type: text().$type<AdapterAccountType>().notNull(),
        provider: text().notNull(),
        providerAccountId: text("provider_account_id").notNull(),
        refresh_token: text(),
        access_token: text(),
        expires_at: integer(),
        token_type: text(),
        scope: text(),
        id_token: text(),
        session_state: text(),
        ...timestamps,
    },
    (account) => ({
        compoundKey: primaryKey({
            columns: [account.provider, account.providerAccountId],
        }),
    })
);

export const sessions = pgTable("sessions", {
    sessionToken: text("session_token").primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires_at", { mode: "date", precision: 3, withTimezone: true }).notNull(),
    ...timestamps,
});
