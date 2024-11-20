import { Button, Divider } from "@mantine/core";
import { FaAngleLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../Components/TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../Components/TalentProfile/RecommendTalent";
import { useEffect, useState } from "react";
import { getAllProfiles } from "../Services/ProfileService";

const TalentProfilePage = () => {

	const navigate = useNavigate();

	const [talents, setTalents] = useState<any[]>([]);

	useEffect(() => {

		getAllProfiles().then((res)=> {

			setTalents(res);
		}).catch((err) => {

			console.log(err);
			
		})
	}, [])

	return (

		<div className="min-h-[100vh] bg-congress-blue-950 font-['poppins'] px-4">

			<Divider size="xs" mx="md" color="congress-blue.9" />

			<div className="m-4 inline-block">

					<Button onClick={()=> navigate(-1)} leftSection={<FaAngleLeft size={20}/>} color="bright-sun.4" variant="light" >Back</Button>

				</div>

			<div className="flex gap-5 justify-evenly">
				<Profile {...profile}/>
				<RecommendTalent talents={talents}/>
			</div>

		</div>
	)
}

export default TalentProfilePage;