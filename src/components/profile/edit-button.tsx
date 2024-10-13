import Link from "next/link";

import { Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";

const EditButton = () => {
    return (
        <Button className="flex w-1/3 items-center" variant="outline" asChild size="lg">
            <Link href="/profile/edit">
                <Pencil className="mr-2 h-4 w-4" />
                Edit
            </Link>
        </Button>
    );
};

export default EditButton;
