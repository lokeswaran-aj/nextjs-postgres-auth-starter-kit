import { redirect } from "next/navigation";
import { cache } from "react";

import { auth } from "@/auth";

export const getSession = cache(auth);

export const getUser = async (callbackUrl: string) => {
    const session = await getSession();

    if (!session || !session.user) {
        redirect(`/api/auth/signin?callbackUrl=${callbackUrl}`);
    }
    return session.user;
};
