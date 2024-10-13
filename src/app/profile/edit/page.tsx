import { redirect } from "next/navigation";

import { User } from "next-auth";

import { auth } from "@/auth";
import EditProfileForm from "@/components/profile/edit-profile-form";

const EditProfile = async () => {
    const session = await auth();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/profile/edit");
    }
    return <EditProfileForm user={user as User} />;
};

export default EditProfile;
