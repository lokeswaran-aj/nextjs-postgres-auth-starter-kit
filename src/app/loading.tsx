import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex h-[90dvh] items-center justify-center">
            <Loader2 size={30} className="mx-auto my-10 animate-spin" />
        </div>
    );
}
