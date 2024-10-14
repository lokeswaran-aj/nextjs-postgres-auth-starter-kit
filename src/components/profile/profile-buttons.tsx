import { revalidatePath } from "next/cache";
import Link from "next/link";

import { LogOut, Pencil } from "lucide-react";

import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export const EditButton = () => {
    return (
        <Button variant="outline" asChild size="lg">
            <Link href="/profile/edit">
                <Pencil className="mr-2 h-4 w-4" />
                Edit
            </Link>
        </Button>
    );
};

export const LogoutButton = () => {
    return (
        <form
            action={async () => {
                "use server";
                revalidatePath("/");
                await signOut({ redirectTo: "/" });
            }}
        >
            <Button size="lg" type="submit">
                <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </Button>
        </form>
    );
};
