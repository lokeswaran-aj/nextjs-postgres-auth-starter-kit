import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";
import { SessionProvider } from "next-auth/react";

import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

import "./globals.css";

const geistSans = GeistSans;

export const metadata: Metadata = {
    title: "Next.js Starter app",
    description: "A basic starter template created by Lokeswaran Aruljothy",
};

const RootLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    geistSans.variable
                )}
            >
                <SessionProvider>
                    <Providers>
                        <div className="relative flex min-h-screen flex-col bg-background">
                            <SiteHeader />
                            <main className="flex-1">{children}</main>
                            <Toaster />
                        </div>
                    </Providers>
                </SessionProvider>
            </body>
        </html>
    );
};

export default RootLayout;
