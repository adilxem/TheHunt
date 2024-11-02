import { Tabs } from "@mantine/core";
import { jobList } from "../../Data/JobsData";
import Card from "./Card";

const JobHistory = () => {

	return (

		<div className="">

			<div className="text-2xl font-semibold mt-4 mb-5">Job History</div>

			<div>

				<Tabs color="bright-sun.4" defaultValue="applied" variant="pills" radius="lg">
					<Tabs.List className="[&_button]:!text-lg [&_button]:text-white   [&_button:hover]:bg-congress-blue-900 font-semibold mb-5">
						<Tabs.Tab value="applied">Applied</Tabs.Tab>
						<Tabs.Tab value="saved">Saved</Tabs.Tab>
						<Tabs.Tab value="offered">Offered</Tabs.Tab>
						<Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
					</Tabs.List>

					<Tabs.Panel value="applied">

						<div className="mt-10 flex flex-wrap gap-5 justify-center">

							{
								jobList.map((job, index) => <Card key={index} {...job} applied />)
							}

						</div>
					</Tabs.Panel>

					<Tabs.Panel value="saved">

						<div className="mt-10 flex flex-wrap gap-5 justify-center">

							{
								jobList.map((job, index) => <Card key={index} {...job} saved />)
							}

						</div>
					</Tabs.Panel>

					<Tabs.Panel value="offered">

						<div className="mt-10 flex flex-wrap gap-5 justify-center">

							{
								jobList.map((job, index) => <Card key={index} {...job} offered />)
							}

						</div>
					</Tabs.Panel>

					<Tabs.Panel value="interviewing">

						<div className="mt-10 flex flex-wrap gap-5 justify-center">

							{
								jobList.map((job, index) => <Card key={index} {...job} interviewing />)
							}

						</div>
					</Tabs.Panel>
				</Tabs>

			</div>


		</div>
	)
}

export default JobHistory;