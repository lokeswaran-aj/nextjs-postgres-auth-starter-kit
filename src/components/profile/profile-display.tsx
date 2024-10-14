import { User } from "next-auth";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { EditButton, LogoutButton } from "./profile-buttons";

type Props = {
    user: User;
};

export const ProfileDisplay = (props: Props) => {
    const { user } = props;
    return (
        <div className="flex min-h-[90dvh] items-center justify-center bg-background p-6 md:p-0">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-center">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src={user.image as string} />
                            <AvatarFallback className="text-5xl font-bold">
                                {user.name?.[0]}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                    {user.name && (
                        <div className="flex items-center">
                            <p className="mr-2 text-sm font-medium text-gray-500">Name</p>
                            <p className="break-words text-base font-medium md:text-lg md:font-semibold">
                                {user.name}
                            </p>
                        </div>
                    )}
                    {user.email && (
                        <div className="flex items-center">
                            <p className="mr-2 text-sm font-medium text-gray-500">Email</p>
                            <p className="break-words text-base font-medium md:text-lg md:font-semibold">
                                {user.email}
                            </p>
                        </div>
                    )}
                </CardContent>
                <CardFooter className="flex items-center justify-evenly">
                    <EditButton />
                    <LogoutButton />
                </CardFooter>
            </Card>
        </div>
    );
};
