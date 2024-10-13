import { redirect } from "next/navigation";

import { User } from "next-auth";

import { auth } from "@/auth";
import { ProfileDisplay } from "@/components/profile/profile-display";

const Profile = async () => {
    const session = await auth();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/profile");
    }

    return <ProfileDisplay user={user as User} />;
};

export default Profile;
