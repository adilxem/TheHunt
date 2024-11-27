import { Divider } from "@mantine/core";
import Profile from "../Components/Profile/Profile";
import CProfile from "../Components/CProfile/CProfile";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  // Retrieve user data from Redux state
  const user = useSelector((state: any) => state.user);

  // Determine user type
  const accountType = user?.accountType; // Assuming `accountType` exists on `user`

  return (
    <div className="min-h-[90vh] bg-congress-blue-950 font-['poppins']">
      <Divider size="xs" mx="md" mb="xl" color="congress-blue.7" />

      {/* Conditionally render components based on account type */}
      {accountType === "APPLICANT" && <Profile />}
      {accountType === "EMPLOYER" && <CProfile />}

      {/* Optional fallback for invalid account types */}
      {!accountType && <div className="text-center text-white">Invalid account type</div>}
    </div>
  );
};

export default ProfilePage;
