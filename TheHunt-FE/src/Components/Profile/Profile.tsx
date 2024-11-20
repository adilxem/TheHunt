import { Avatar, Divider, FileInput, Overlay } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import Info from "./Info";
import { changeProfile } from "../../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificate from "./Certificate";
import { useHover } from "@mantine/hooks";
import { TbPencil } from "react-icons/tb";
import { successNotification } from "../../Services/NotificationService";
import imageCompression from 'browser-image-compression';
import { getBase64 } from "../../Services/Utilities";
import Education from "./Education";

const Profile = () => {

	const dispatch = useDispatch();

	const profile = useSelector((state: any) => state.profile);

	const { hovered, ref } = useHover();


	const handleFileChange = async (image: any) => {
		// Set up options for compression
		const options = {
			maxSizeMB: 0.2, // Compress image to 200 KB or less
			maxWidthOrHeight: 400, // Resize to max 800px in either dimension
		};

		try {
			const compressedImage = await imageCompression(image, options);
			const base64 = await getBase64(compressedImage);
			let updatedProfile = { ...profile, picture: base64.split(',')[1] };

			dispatch(changeProfile(updatedProfile));
			successNotification("Success", "Profile Picture Updated Successfully");
		} catch (error) {
			console.error("Error compressing image:", error);
		}
	};

	console.log(profile.picture ? `data:image/jpeg;base64,${profile.picture}` : "/Avatars/avatar1.png");



	return (

		<div className="w-4/5 mx-auto">

			<div className="relative">
				<img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />

				<div ref={ref} className="flex items-center justify-center absolute -bottom-1/4 mb-4 left-3">

					{/* <Avatar className="!h-48 !w-48 border-congress-blue-950 border-8 rounded-full" src={profile.picture ? `data : image/jpeg; base64, ${profile.picture}` : "/Avatars/avatar1.png"} alt="user" /> */}

					{/* <Avatar
						className="!h-48 !w-48 border-congress-blue-950 border-8 rounded-full"
						src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : "/Avatars/avatar1.png"}
						alt="user"
						onError={(e) => e.target.src = "/Avatars/avatar1.png"}
					/> */}

					<Avatar
						className="!h-48 !w-48 border-congress-blue-950 border-8 rounded-full"
						src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : "/Avatars/avatar1.png"}
						alt="user"
						onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
							const target = e.target as HTMLImageElement;
							target.src = "/Avatars/avatar1.png"; 
						}}
					/>



					{hovered && <Overlay className="!rounded-full" color="#000" backgroundOpacity={0.5} />}

					{hovered && <TbPencil className="h-10 w-10 absolute z-[300]" />}

					{hovered && <FileInput

						onChange={handleFileChange}

						className="absolute [&_*]:!rounded-full z-[301] [&_*]:!h-full !h-full !w-full"
						variant="transparent"
						accept="image/png, image/jpg, image/jpeg"
					/>}

				</div>

			</div>

			<div className="px-3 py-3 mt-16 ">

				<Info />

			</div>

			<Divider size="xs" mx="xs" my="xl" color="congress-blue.7" />

			<About />

			<Divider my="xl" mx="xs" color="congress-blue.7" />

			<Skills />

			<Divider my="xl" mx="xs" color="congress-blue.7" />

			<Education />

			<Divider my="xl" mx="xs" color="congress-blue.7" />

			<Experience />

			<Divider my="xl" mx="xs" color="congress-blue.7" />

			<Certificate />

		</div>

	)
}

export default Profile;