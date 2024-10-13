import { signIn } from "@/auth";

import { Button } from "../ui/button";

export const SignIn = () => {
    return (
        <form
            action={async () => {
                "use server";
                await signIn();
            }}
        >
            <Button size="sm" type="submit">
                Sign in
            </Button>
        </form>
    );
};
