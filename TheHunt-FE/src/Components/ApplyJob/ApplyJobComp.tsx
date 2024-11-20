import { Divider } from "@mantine/core";
import ApplicationForm from "./ApplicationForm";
import { useNavigate } from "react-router-dom";
import { timeAgo } from "../../Services/Utilities";

const ApplyJobComp = (props : any) => {

	const navigate = useNavigate();

	return <> <div className="w-2/3 mx-auto">

		

		<div className="flex justify-between">

			<div className="flex gap-2 items-center">

				<div className="p-3 bg-congress-blue-800 rounded-xl">
					<img className="h-14 " src={`/Icons/${props.company}.png`} alt="" />
				</div>
				<div className="flex flex-col gap-1">

					<div className="font-semibold text-2xl">{props.jobTitle}</div>
					<div className="text-lg text-congress-blue-300">{props.company} &#x2022; {timeAgo(props.postTime)} &#x2022; {props.applicants? props.applicants.length : 0} Applicants </div>

				</div>
			</div>

		</div>

		<Divider size="xs" my="xl" color="congress-blue.9" />

		<ApplicationForm/>

	</div>

		{/* <Notification icon={<FaCircleCheck />} color="teal" title="Application Submitted!" mt="md" withCloseButton={false} withBorder
			className={`bg-congress-blue-950 border-bright-sun-200 !fixed top-20 left-[40%] z-[1001] transition duration-500 ease-in-out  ${submit ? "translate-y-0" : "-translate-y-60"}`}>

			Redirecting to Find Jobs in {sec} seconds...
		</Notification> */}




	</>
}

export default ApplyJobComp;