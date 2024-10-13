"use client";

import { Loader2 } from "lucide-react";
import { signIn, useSession } from "next-auth/react";

import { Button } from "../ui/button";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import SocialLinks from "./social-links";
import { ThemeToggler } from "./theme-toggler";
import UserButton from "./user-button";

export const SiteHeader = () => {
    const session = useSession();
    const user = session.data?.user;

    const navLinks = [
        {
            name: "Dashboard",
            href: "/dashboard",
        },
    ];
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60 supports-[background-filter]:bg-background/60">
            <div className="container mx-auto flex h-14 items-center justify-between">
                <MainNav navLinks={navLinks} />
                <MobileNav navLinks={navLinks} />
                <div className="flex items-center justify-center">
                    <nav className="flex items-center gap-2">
                        <SocialLinks />
                        <ThemeToggler />
                        {session.status === "loading" ? (
                            <Loader2 className="h-8 w-8 animate-spin" />
                        ) : user ? (
                            <UserButton user={user} />
                        ) : (
                            <Button onClick={async () => signIn()} size="sm" type="submit">
                                Sign in
                            </Button>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
};
