import Link from "next/link";

import { Button } from "@/components/ui/button";

const NotFound = () => {
    return (
        <div className="flex h-[90dvh] flex-1 flex-col items-center justify-center bg-background">
            <div className="mx-auto max-w-lg text-center">
                <h1>404 - Page Not Found</h1>
                <p>
                    Oops, the page you are looking for does not exist. It might have been moved or
                    deleted.
                </p>
                <div className="mt-6">
                    <Button asChild size="sm">
                        <Link href="/">Go to Homepage</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
