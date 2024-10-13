import Link from "next/link";

import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const SocialLinks = () => {
    return (
        <>
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                <div
                    className={cn(
                        buttonVariants({
                            variant: "ghost",
                        }),
                        "h-8 w-8 px-0"
                    )}
                >
                    <Icons.gitHub className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                </div>
            </Link>
            <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
                <div
                    className={cn(
                        buttonVariants({
                            variant: "ghost",
                        }),
                        "h-8 w-8 px-0"
                    )}
                >
                    <Icons.twitter className="h-4 w-4 fill-current" />
                    <span className="sr-only">Twitter</span>
                </div>
            </Link>
        </>
    );
};

export default SocialLinks;
