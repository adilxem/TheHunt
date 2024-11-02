import { Avatar, Divider, Tabs } from "@mantine/core";
import { FiMapPin } from "react-icons/fi";
import AboutComp from "./AboutComp";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees";

const Company = () => {

    return (
        <div className="w-3/4">

            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                <img className="h-36 w-36 rounded-3xl bg-congress-blue-950 -bottom-1/4 absolute left-3 p-2 border-congress-blue-950 border-8" src="/Icons/Google.png" alt="" />
            </div>

            <div className="px-3 py-3 mt-14 ">

                <div className="text-3xl font-semibold flex justify-between text-congress-blue-50">Google

                    <Avatar.Group>
                        <Avatar src="/Avatars/avatar.png" />
                        <Avatar src="/Avatars/avatar1.png" />
                        <Avatar src="/Avatars/avatar2.png" />
                        <Avatar>+10K</Avatar>
                    </Avatar.Group>

                </div>


                <div className="flex gap-1 items-center text-lg text-congress-blue-400">
                    <FiMapPin className="h-4 w-4" />

                    Mumbai, India
                </div>
            </div>

            <Divider size="xs" mx="xs" my="xl" color="congress-blue.7" />

            <div>

                <Tabs color="bright-sun.4" defaultValue="about" variant="pills" radius="lg">
                    <Tabs.List className="[&_button]:!text-lg [&_button]:text-white   [&_button:hover]:bg-congress-blue-900 font-semibold mb-5">
                        <Tabs.Tab value="about">About</Tabs.Tab>
                        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
                        <Tabs.Tab value="employees">Employees</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="about">
                        <AboutComp/>
                    </Tabs.Panel>
                    <Tabs.Panel value="jobs">
						<CompanyJobs/>
					</Tabs.Panel>
                    <Tabs.Panel value="employees">
						<CompanyEmployees/>
					</Tabs.Panel>
                </Tabs>

            </div>

        </div>
    )
}

export default Company;