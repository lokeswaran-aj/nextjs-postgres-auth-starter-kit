import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";

import { cn } from "@/lib/utils";

import "./globals.css";

const geistSans = GeistSans;

export const metadata: Metadata = {
    title: "Next.js Starter app",
    description: "A basic starter template created by Lokeswaran Aruljothy",
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body className={cn("bg-background antialiased", geistSans.variable)}>{children}</body>
        </html>
    );
};

export default RootLayout;
