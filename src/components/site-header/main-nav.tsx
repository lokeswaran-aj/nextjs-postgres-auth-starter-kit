"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const MainNav = () => {
    const pathname = usePathname();

    const navLinks = [
        {
            name: "Profile",
            href: "/profile",
        },
    ];

    return (
        <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
                <Icons.logo className="h-6 w-6" />
                <span className="hidden font-bold lg:inline-block">{siteConfig.name}</span>
            </Link>
            <nav className="flex items-center gap-4 text-sm lg:gap-6">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname === link.href ? "text-foreground" : "text-foreground/60"
                        )}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
};
