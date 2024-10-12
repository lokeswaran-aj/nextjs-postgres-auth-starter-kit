"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div
            className={cn(
                buttonVariants({
                    variant: "ghost",
                }),
                "h-8 w-8 px-0"
            )}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </div>
    );
};
