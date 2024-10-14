import { handleSignIn } from "@/actions/sign-in";
import { providerMap } from "@/auth";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SignInPage = async (props: { searchParams: { callbackUrl: string | undefined } }) => {
    return (
        <div className="flex h-[90dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <div className="mb-4 flex justify-center">
                        <Icons.nextjs className="h-16 w-16" />
                    </div>
                    <CardTitle className="text-center text-2xl font-bold">
                        Sign in to your account
                    </CardTitle>
                    <CardDescription className="text-center">
                        Choose your preferred sign-in method
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {Object.values(providerMap).map((provider) => (
                        <form key={provider.id} action={handleSignIn}>
                            <input type="hidden" name="providerId" value={provider.id} />
                            <input
                                type="hidden"
                                name="callbackUrl"
                                value={props.searchParams.callbackUrl ?? ""}
                            />
                            <Button type="submit" className="w-full" variant="outline">
                                {provider.id === "google" && (
                                    <Icons.google className="mr-2 h-4 w-4" />
                                )}
                                {provider.id === "github" && (
                                    <Icons.github className="mr-2 h-4 w-4" />
                                )}
                                Sign in with {provider.name}
                            </Button>
                        </form>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};

export default SignInPage;
