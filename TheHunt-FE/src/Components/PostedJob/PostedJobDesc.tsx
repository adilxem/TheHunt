import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import TalentCard from "../FindTalent/TalentCard";
import { useEffect, useState } from "react";

const PostedJobDesc = (props: any) => {

	const [tab, setTab] = useState("overview");

	const [arr, setArr] = useState<any>([]);

	const handleTabChange = (value: any) => {

		setTab(value);

		if (value == "applicants") {

			setArr(props.applicants?.filter((x: any) => x.applicationStatus == "APPLIED"))
		}
		else if (value == "invited") {

			setArr(props.applicants?.filter((x: any) => x.applicationStatus == "INTERVIEWING"))
		}
		else if (value == "offered") {

			setArr(props.applicants?.filter((x: any) => x.applicationStatus == "OFFERED"))
		}
		else if (value == "rejected") {

			setArr(props.applicants?.filter((x: any) => x.applicationStatus == "REJECTED"))
		}
	}


	useEffect(() => {

		handleTabChange("overview");
	}, [props])

	return (
		<div className="mt-5 w-3/4 px-5">

			{props.jobTitle ? <><div className="text-2xl font-semibold flex items-center">{props.jobTitle} <Badge variant="light" ml="sm" size="sm" color="bright-sun.4">{props.jobStatus}</Badge></div>

				<div className="font-medium text-congress-blue-300 mb-5">{props.location}</div>

				<div>
					<Tabs color="bright-sun.4" value={tab} onChange={handleTabChange} variant="pills" radius="lg">
						<Tabs.List className="[&_button]:!text-lg [&_button]:text-white   [&_button:hover]:bg-congress-blue-900 font-semibold mb-5">
							<Tabs.Tab value="overview">Overview</Tabs.Tab>
							<Tabs.Tab value="applicants">Applicants</Tabs.Tab>
							<Tabs.Tab value="invited">Invited</Tabs.Tab>
							<Tabs.Tab value="offered">Offered</Tabs.Tab>
							<Tabs.Tab value="rejected">Rejected</Tabs.Tab>
						</Tabs.List>

						<Tabs.Panel value="overview" className="[&>div]:w-full">

							<JobDesc {...props} edit={true} closed={props.jobStatus == "CLOSED"} />
						</Tabs.Panel>

						<Tabs.Panel value="applicants">

							<div className="mt-10 flex flex-wrap gap-5 justify-start">

								{
									arr?.length? arr.map((talent: any, index: any) => <TalentCard key={index}  {...talent} posted={true} />) : <div className="text-2xl font-semibold">No Applicants</div>
								}

							</div>
						</Tabs.Panel>

						<Tabs.Panel value="invited">

							<div className="mt-10 flex flex-wrap gap-5 justify-start">

								{
									arr?.length? arr.map((talent: any, index: any) => <TalentCard key={index}  {...talent} invited={true} />) : <div className="text-2xl font-semibold">No Applicants Invited</div> 
								}

							</div>
						</Tabs.Panel>

						<Tabs.Panel value="offered">

							<div className="mt-10 flex flex-wrap gap-5 justify-start">

								{
									arr?.length? arr.map((talent: any, index: any) => <TalentCard key={index}  {...talent} offered={true} />) : <div className="text-2xl font-semibold">No Offered Applicants</div> 
								}

							</div>
						</Tabs.Panel>

						<Tabs.Panel value="rejected">

							<div className="mt-10 flex flex-wrap gap-5 justify-start">

								{
									arr?.length? arr.map((talent: any, index: any) => <TalentCard key={index}  {...talent} />) : <div className="text-2xl font-semibold">No Rejected Applicants</div> 
								}

							</div>
						</Tabs.Panel>
					</Tabs>
				</div>
			</> : <div className="text-2xl font-semibold flex justify-center items-center min-h-[70vh]">No Job Found</div>}
		</div>
	)
}

export default PostedJobDesc;