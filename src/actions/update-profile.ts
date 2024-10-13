"use server";

import { revalidatePath } from "next/cache";

import { eq } from "drizzle-orm";
import { User } from "next-auth";

import { auth } from "@/auth";
import { db } from "@/db";
import { users } from "@/db/schema";
import { UpdateProfileValues, updateProfileSchema } from "@/lib/validation";

export const updateProfile = async (values: UpdateProfileValues) => {
    const session = await auth();

    const { id: userId, name: oldName } = session?.user as User;

    if (!userId) {
        throw new Error("Unauthorized");
    }

    if (!values.name) {
        throw new Error("Name is required");
    }
    if (oldName === values.name) {
        throw new Error("Name has not changed");
    }
    const { name } = updateProfileSchema.parse(values);

    await db.update(users).set({ name }).where(eq(users.id, userId));

    revalidatePath("/profile");
};
