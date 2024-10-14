import Link from "next/link";

import { ArrowRight, Database, Lock, Server } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Next.js Starter Kit
                            </h1>
                            <p className="mx-auto max-w-[700px] text-primary md:text-xl">
                                Jumpstart your project with Auth.js, Drizzle ORM, and PostgreSQL
                                integration.
                            </p>
                        </div>
                        <div className="space-x-4">
                            <Button asChild>
                                <Link href="/signin">Get Started</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-primary-foreground py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
                        Key Features
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Auth.js Integration</CardTitle>
                                <Lock className="mb-2 h-8 w-8" />
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Secure authentication with support for multiple providers.
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Drizzle ORM</CardTitle>
                                <Database className="mb-2 h-8 w-8" />
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Type-safe database queries and migrations with Drizzle ORM.
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>PostgreSQL</CardTitle>
                                <Server className="mb-2 h-8 w-8" />
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Robust and scalable database solution with PostgreSQL.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Ready to Get Started?
                            </h2>
                            <p className="max-w-[600px] text-primary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Clone the repository and start building your next great idea with
                                our powerful starter kit.
                            </p>
                        </div>
                        <Button asChild>
                            <Link
                                className="inline-flex items-center justify-center"
                                href="https://github.com/lokeswaran-aj/nextjs-postgres-auth-starter-kit"
                                target="_blank"
                            >
                                Clone Repository
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Home;
