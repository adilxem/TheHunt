import { Divider } from "@mantine/core";
import SearchBar from "../Components/FindTalent/SearchBar";
import Talents from "../Components/FindTalent/Talents";

const FindTalentPage = () => {

	return (

		<div className="min-h-[100vh] bg-congress-blue-950 font-['poppins']">

			<Divider size="xs" mx="md" color="congress-blue.9" />
			<SearchBar/>
			<Divider size="xs" mx="md" color="congress-blue.9" />
			<Talents/>

		</div>
	)
}

export default FindTalentPage;