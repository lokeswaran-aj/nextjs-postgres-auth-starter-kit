"use server";

import { redirect } from "next/navigation";

import { AuthError } from "next-auth";

import { signIn } from "@/auth";

export const handleSignIn = async (formData: FormData) => {
    const providerId = formData.get("providerId")?.toString();
    const callbackUrl = formData.get("callbackUrl")?.toString();

    if (!providerId) {
        throw new Error("Provider ID is missing");
    }

    try {
        await signIn(providerId, {
            redirectTo: callbackUrl ?? "",
        });
    } catch (error) {
        if (error instanceof AuthError) {
            return redirect(`/signin/error?error=${error.type}`);
        }
        throw error;
    }
};
