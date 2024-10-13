import { User } from "next-auth";

import { ProfileDisplay } from "@/components/profile/profile-display";
import { getUser } from "@/lib/get-user";

const Profile = async () => {
    const user = await getUser("/profile");

    return <ProfileDisplay user={user as User} />;
};

export default Profile;
