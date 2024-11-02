import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import { talents } from "../../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDesc = () => {

	return (
		<div className="mt-5 w-3/4 px-5">

			<div className="text-2xl font-semibold flex items-center">SDE <Badge variant="light" ml="sm" size="sm" color="bright-sun.4">Badge</Badge></div>

			<div className="font-medium text-congress-blue-300 mb-5">Mumbai, India</div>

			<div>
				<Tabs  color="bright-sun.4" defaultValue="overview" variant="pills" radius="lg">
					<Tabs.List className="[&_button]:!text-lg [&_button]:text-white   [&_button:hover]:bg-congress-blue-900 font-semibold mb-5">
						<Tabs.Tab value="overview">Overview</Tabs.Tab>
						<Tabs.Tab value="applicants">Applicants</Tabs.Tab>
						<Tabs.Tab value="invited">Invited</Tabs.Tab>
					</Tabs.List>

					<Tabs.Panel value="overview" className="[&>div]:w-full">
						<JobDesc edit />
					</Tabs.Panel>

					<Tabs.Panel value="applicants">

						<div className="mt-10 flex flex-wrap gap-5 justify-center">

							{
								talents.map((talent, index) => index < 6 && <TalentCard key={index}  {...talent} posted />)
							}

						</div>
					</Tabs.Panel>

					<Tabs.Panel value="invited">

						<div className="mt-10 flex flex-wrap gap-5 justify-center">

							{
								talents.map((talent, index) => index < 6 && <TalentCard key={index}  {...talent} invited />)
							}

						</div>	
					</Tabs.Panel>
				</Tabs>
			</div>

		</div>
	)
}

export default PostedJobDesc;