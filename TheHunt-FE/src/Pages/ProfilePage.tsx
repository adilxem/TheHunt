import { Divider } from "@mantine/core";
import Profile from "../Profile/Profile";

const ProfilePage = () => {

	return (

		<div className="min-h-[90vh] bg-congress-blue-950 font-['poppins']">
			
			<Divider size="xs" mx="md" mb="xl" color="congress-blue.7" />
			<Profile/>
			
		</div>
	)
}

export default ProfilePage;