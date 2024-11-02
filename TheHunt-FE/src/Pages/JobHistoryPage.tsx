import { Divider } from "@mantine/core";
import JobHistory from "../Components/JobHistory/JobHistory";

const JobHistoryPage = () => {

	return (
		
		<div className="min-h-[100vh] bg-congress-blue-950 font-['poppins'] px-4">

			<Divider size="xs" color="congress-blue.9" />


			<div className="my-5">

				<JobHistory/>

			</div>

		</div>
	)
}

export default JobHistoryPage;