import { Button, Divider } from "@mantine/core";
import { FaBriefcase } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../../Services/ProfileService";

const Profile = (props:any) => {

	const {id} = useParams();
	
	const [profile, setProfile] = useState<any>([]);

	useEffect(() => {

		window.scrollTo(0, 0);

		getProfile(id).then((res)=> {

			setProfile(res);
		}).catch((err)=> {

			console.log(err);
			
		})
	}, [id])

	return (

		<div className="w-2/3">

			<div className="relative">
				<img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
				{/* <img className="h-48 w-48 rounded-full -bottom-1/3 absolute left-3 border-congress-blue-950 border-8" src={profile.picture ? `data : image/jpeg; base64, ${profile.picture}` : "/Avatars/avatar1.png"} alt="" /> */}

				<img
						className="h-48 w-48 rounded-full -bottom-1/4 absolute left-3 border-congress-blue-950 border-8"
						src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : "/Avatars/avatar1.png"}
						alt="user"
						onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
							const target = e.target as HTMLImageElement;
							target.src = "/Avatars/avatar1.png"; 
						}}
					/>

			</div>

			<div className="px-3 py-3 mt-16 ">

				<div className="text-3xl font-semibold flex justify-between text-congress-blue-50">{profile?.name}
					<Button color="bright-sun.4" variant="light" >Message</Button>
				</div>

				<div className="text-xl flex gap-1 items-center">
					<FaBriefcase className="h-4 w-4 text-congress-blue-400" />{profile?.jobTitle} &bull; {profile?.company}
				</div>

				<div className="flex gap-1 items-center text-lg text-congress-blue-400">
					<FiMapPin className="h-4 w-4" />

					{profile.location}
				</div>
			</div>

			<Divider size="xs" mx="xs" my="xl" color="congress-blue.7" />

			<div className="px-3">
				<div className="text-2xl font-semibold mb-3 text-congress-blue-100">About</div>

				<div className="text-sm text-congress-blue-300 text-justify">
				{profile?.about}
				</div>
			</div>

			<Divider my="xl" mx="xs" color="congress-blue.7" />

			<div className="px-3">
				<div className="text-2xl font-semibold mb-3 text-congress-blue-100">Skills</div>

				<div className="flex flex-wrap gap-2">

					{
						profile?.skills?.map((skill:any, index:any) => <div key={index} className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1">
						{skill}
					</div>)
					}
				</div>
			</div>

			<Divider my="xl" mx="xs" color="congress-blue.7" />

			<div className="px-3 ">
				<div className="text-2xl font-semibold mb-5 text-congress-blue-100">Experience</div>
				
				<div className="flex flex-col gap-8">

					{
						profile?.experiences?.map((exp:any, index:any) => <ExpCard key={index} {...exp}/>)
					}
				</div>
			</div>

			<Divider my="xl" mx="xs" color="congress-blue.7" />

			<div className="px-3">
				<div className="text-2xl font-semibold mb-5 text-congress-blue-100">Certifications</div>
				<div className="flex flex-col gap-8">

					{
						profile?.certifications?.map((certi:any, index:any) => <CertiCard key={index} {...certi}/>)
					}
				</div>
			</div>
		</div>
	)
}

export default Profile;