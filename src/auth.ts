import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import type { Provider } from "next-auth/providers";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { db } from "./db";
import { accounts, sessions, users } from "./db/schema";

const providers: Provider[] = [Google, GitHub];

export const providerMap = providers
    .map((provider) => {
        if (typeof provider === "function") {
            const providerData = provider();
            return { id: providerData.id, name: providerData.name };
        } else {
            return { id: provider.id, name: provider.name };
        }
    })
    .filter((provider) => provider.id !== "credentials");
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
    providers,
    pages: {
        signIn: "/signin",
        error: "/signin/error",
    },
});
