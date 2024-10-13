"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "next-auth";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

import { updateProfile } from "@/actions/update-profile";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { UpdateProfileValues, updateProfileSchema } from "@/lib/validation";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = { user: User };

const EditProfileForm = (props: Props) => {
    const { user } = props;
    const { toast } = useToast();
    const router = useRouter();

    const session = useSession();

    const form = useForm<UpdateProfileValues>({
        resolver: zodResolver(updateProfileSchema),
        defaultValues: { name: user.name ?? "" },
    });

    const onSubmit = async (data: UpdateProfileValues) => {
        try {
            await updateProfile(data);
            toast({ description: "Profile updated successfully." });
            session.update();
        } catch (error) {
            console.error((error as Error).message);
            toast({
                variant: "destructive",
                description: "An error occurred. Please try again.",
            });
        }
    };

    return (
        <div className="flex min-h-[90dvh] items-center justify-center bg-background p-6 md:p-0">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">Edit Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-sm space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your fullname" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex items-center justify-between">
                                <Button
                                    type="button"
                                    variant="outline"
                                    disabled={form.formState.isSubmitting}
                                    onClick={() => router.back()}
                                >
                                    Back
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={
                                        form.formState.isSubmitting || !form.formState.isDirty
                                    }
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};

export default EditProfileForm;
