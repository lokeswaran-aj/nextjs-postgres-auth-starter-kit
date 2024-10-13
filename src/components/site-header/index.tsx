"use client";

import Link from "next/link";

import { Loader2 } from "lucide-react";
import { signIn, useSession } from "next-auth/react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Icons } from "../icons";
import { Button, buttonVariants } from "../ui/button";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
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
                        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                            <div
                                className={cn(
                                    buttonVariants({
                                        variant: "ghost",
                                    }),
                                    "h-8 w-8 px-0"
                                )}
                            >
                                <Icons.gitHub className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
                        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
                            <div
                                className={cn(
                                    buttonVariants({
                                        variant: "ghost",
                                    }),
                                    "h-8 w-8 px-0"
                                )}
                            >
                                <Icons.twitter className="h-4 w-4 fill-current" />
                                <span className="sr-only">Twitter</span>
                            </div>
                        </Link>
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
