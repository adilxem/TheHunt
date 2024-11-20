import { Button, Divider } from "@mantine/core";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import JobDesc from "../Components/JobDesc/JobDesc";
import RecommendedJobs from "../Components/JobDesc/RecommendedJobs";
import { useEffect, useState } from "react";
import { getJob } from "../Services/JobService";

const JobDescPage = () => {

	const {id} = useParams();

	const [job, setJob] = useState<any>(null);

	const navigate = useNavigate();

	useEffect(() => {

		window.scrollTo(0, 0);
		getJob(id).then((res) => {

			setJob(res);
		}).catch((err) => {

			console.log(err);
			
		})
	}, [id]);

	return (

		<div className="min-h-[100vh] bg-congress-blue-950 font-['poppins'] px-4">

			<Divider size="xs" mx="md" color="congress-blue.9" />

			<div className="m-4 inline-block" >

				<Button onClick={() => navigate(-1)} leftSection={<FaAngleLeft size={20} />} color="bright-sun.4" variant="light" >Back</Button>

			</div>

			<div className="flex gap-5 justify-evenly">
				<JobDesc {...job} />
				<RecommendedJobs />
			</div>

		</div>
	)
}

export default JobDescPage;