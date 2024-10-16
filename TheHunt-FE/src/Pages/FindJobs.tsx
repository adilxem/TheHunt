import { Divider } from "@mantine/core";
import SearchBar from "../FindJobs/SearchBar";
import Jobs from "../FindJobs/Jobs";

const FindJobs = () => {


	return (


		<div className="min-h-[100vh] bg-congress-blue-950 font-['poppins']">

			<Divider size="xs" mx="md" color="congress-blue.9" />
			<SearchBar />
			<Divider size="xs" mx="md" color="congress-blue.9" />
			<Jobs />

		</div>
	)
}

export default FindJobs;