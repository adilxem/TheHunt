import { Button, Divider } from "@mantine/core";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Company from "../Components/CompanyProfile/Company";
import SimilarCompanies from "../Components/CompanyProfile/SimilarCompanies";

const CompanyPage = () => {

	const navigate = useNavigate();

	return (

		<div className="min-h-[100vh] bg-congress-blue-950 font-['poppins'] px-4">

			<Divider size="xs" color="congress-blue.9" />


			<Button leftSection={<FaAngleLeft size={20} />} my="md" onClick={()=>navigate(-1)} color="bright-sun.4" variant="light" >Back</Button>


			<div className="flex gap-5 justify-between">

				<Company/>
				<SimilarCompanies/>
			</div>

		</div>
	)
}

export default CompanyPage;