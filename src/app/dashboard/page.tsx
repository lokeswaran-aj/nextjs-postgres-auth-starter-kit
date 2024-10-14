import { CreditCard, DollarSign, LayoutDashboard, Settings, User, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUser } from "@/lib/get-user";

const Dashboard = async () => {
    await getUser("/dashboard");
    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar */}
            <aside className="hidden w-64 border-r bg-muted/40 lg:block">
                <div className="flex h-full flex-col">
                    <nav className="flex-1 overflow-auto py-4">
                        <div className="px-4 py-2">
                            <div className="space-y-1">
                                <Button variant="secondary" className="w-full justify-start">
                                    <LayoutDashboard className="mr-2 h-4 w-4" />
                                    Overview
                                </Button>
                                <Button variant="ghost" className="w-full justify-start">
                                    <Users className="mr-2 h-4 w-4" />
                                    Customers
                                </Button>
                                <Button variant="ghost" className="w-full justify-start">
                                    <CreditCard className="mr-2 h-4 w-4" />
                                    Products
                                </Button>
                            </div>
                        </div>
                    </nav>
                    <div className="mt-auto p-4">
                        <Button variant="outline" className="w-full">
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                        </Button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <div className="p-6">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                                <DollarSign className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">$45,231.89</div>
                                <p className="text-xs text-muted-foreground">
                                    +20.1% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+2350</div>
                                <p className="text-xs text-muted-foreground">
                                    +180.1% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                                <CreditCard className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+12,234</div>
                                <p className="text-xs text-muted-foreground">
                                    +19% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                                <User className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+573</div>
                                <p className="text-xs text-muted-foreground">
                                    +201 since last hour
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
};
export default Dashboard;
