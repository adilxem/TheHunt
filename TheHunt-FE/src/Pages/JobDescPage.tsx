import { Button, Divider } from "@mantine/core";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import JobDesc from "../Components/JobDesc/JobDesc";
import RecommendedJobs from "../Components/JobDesc/RecommendedJobs";

const JobDescPage = () => {

	return (

		<div className="min-h-[100vh] bg-congress-blue-950 font-['poppins'] px-4">

			<Divider size="xs" mx="md" color="congress-blue.9" />

			<Link className="m-4 inline-block" to="/find-jobs">

				<Button leftSection={<FaAngleLeft size={20} />} color="bright-sun.4" variant="light" >Back</Button>

			</Link>

			<div className="flex gap-5 justify-evenly">
				<JobDesc />
				<RecommendedJobs />
			</div>

		</div>
	)
}

export default JobDescPage;