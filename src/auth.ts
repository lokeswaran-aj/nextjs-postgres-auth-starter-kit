import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { db } from "./db";
import { accounts, sessions, users } from "./db/schema";

export const { handlers, auth, signIn, signOut } = NextAuth({
    trustHost: true,
    theme: {
        logo: "/nextjs-logo.png",
    },
    adapter: DrizzleAdapter(db, {
        usersTable: users,
        accountsTable: accounts,
        sessionsTable: sessions,
    }),
    providers: [Google, GitHub],
});
