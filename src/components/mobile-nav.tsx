"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const MobileNav = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        {
            name: "Profile",
            href: "/profile",
        },
    ];
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <Icons.menu />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
                <MobileLink href="/" className="flex items-center" onOpenChange={setOpen}>
                    <Icons.logo className="mr-2 h-4 w-4" />
                    <span className="font-bold">{siteConfig.name}</span>
                </MobileLink>
                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                    <div className="flex flex-col space-y-3">
                        {navLinks.map(
                            (item) =>
                                item.href && (
                                    <MobileLink
                                        key={item.href}
                                        href={item.href}
                                        onOpenChange={setOpen}
                                    >
                                        {item.name}
                                    </MobileLink>
                                )
                        )}
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
};

interface MobileLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
    className?: string;
}

const MobileLink = ({ href, onOpenChange, className, children, ...props }: MobileLinkProps) => {
    const router = useRouter();
    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString());
                onOpenChange?.(false);
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </Link>
    );
};
