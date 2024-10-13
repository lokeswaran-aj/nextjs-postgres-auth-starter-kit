import { createId } from "@paralleldrive/cuid2";
import { integer, pgTable, primaryKey, text, timestamp } from "drizzle-orm/pg-core";
import type { AdapterAccountType } from "next-auth/adapters";

import { timestamps } from "./timestamp";

export const users = pgTable("user", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => `user_${createId()}`),
    name: text("name"),
    email: text("email").unique(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    image: text("image"),
    ...timestamps,
});

export const accounts = pgTable(
    "account",
    {
        userId: text("userId")
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        type: text("type").$type<AdapterAccountType>().notNull(),
        provider: text("provider").notNull(),
        providerAccountId: text("providerAccountId").notNull(),
        refresh_token: text("refresh_token"),
        access_token: text("access_token"),
        expires_at: integer("expires_at"),
        token_type: text("token_type"),
        scope: text("scope"),
        id_token: text("id_token"),
        session_state: text("session_state"),
        ...timestamps,
    },
    (account) => ({
        compoundKey: primaryKey({
            columns: [account.provider, account.providerAccountId],
        }),
    })
);

export const sessions = pgTable("session", {
    sessionToken: text("sessionToken")
        .primaryKey()
        .$defaultFn(() => `session_${createId()}`),
    userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
    ...timestamps,
});
