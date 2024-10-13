import { User } from "next-auth";

import EditProfileForm from "@/components/profile/edit-profile-form";
import { getUser } from "@/lib/get-user";

const EditProfile = async () => {
    const user = await getUser("/profile/edit");
    return <EditProfileForm user={user as User} />;
};

export default EditProfile;
