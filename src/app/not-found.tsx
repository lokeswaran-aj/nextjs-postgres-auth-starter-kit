import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
                    <Link
                        href="/"
                        className={cn(buttonVariants({ variant: "default", size: "sm" }))}
                    >
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
