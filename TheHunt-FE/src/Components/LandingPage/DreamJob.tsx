import { Avatar, TextInput } from "@mantine/core";
import { FaSearch } from "react-icons/fa";

const DreamJob = () => {

    return (

        <div className="flex items-center px-32 pt-20">

            {/* LEFT SECTION */}

            <div className="flex flex-col w-[45%] gap-3 pl-20">
                <div className="text-6xl font-bold text-congress-blue-100 [&>span]:text-bright-sun-400">Find Your <span>Dream Job</span></div>

                <div className="text-2xl text-congress-blue-200">Good work life begins with a good employer. Explore thousands of jobs in one place.</div>

                <div className="flex gap-3 mt-5 items-center ">

                    <TextInput

                        className="bg-congress-blue-900 rounded-lg p-1 px-2 text-congress-blue-100 [&_input]:!text-congress-blue-100"

                        variant="unstyled"
                        label="Job Title"
                        placeholder="Software Engineer"
                    />

                    <TextInput

                        className="bg-congress-blue-900 rounded-lg p-1 px-2 text-congress-blue-100 [&_input]:!text-congress-blue-100"

                        variant="unstyled"
                        label="Job Type"
                        placeholder="Fulltime"
                    />

                    <div className="flex items-center justify-center h-full w-20 p-2 rounded-lg bg-bright-sun-400 text-congress-blue-600 hover:bg-bright-sun-500 cursor-pointer">

                        <FaSearch className="h-[85%] w-[85%]"/>
                    </div>

                </div>
            </div>

            {/* RIGHT SECTION */}

            <div className="w-[55%] flex items-center justify-center">

                <div className="w-[30rem] relative">

                    <img src="/landingpageimg.png" alt="img" />

                    <div className="absolute -right-10 top-[50%] w-fit border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">

                        <div className="text-sm mb-1 text-center text-congress-blue-100">10K+ got jobs</div>

                        <Avatar.Group>
                            <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png" />
                            <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" />
                            <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png" />
                            <Avatar>+9K</Avatar>
                        </Avatar.Group>
                    </div>

                    <div className="absolute -left-10 top-[24%] w-fit border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md flex flex-col gap-3">
                        <div className="flex gap-2 items-center ">

                            <div className="w-10 h-10 p-1 bg-congress-blue-900 rounded-lg">

                                <img src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-internet-icon-vector-png-image_9183287.png" alt="" />
                            </div>

                            <div className="text-sm text-congress-blue-100">
                                <div className="font-semibold">Software Engineer</div>
                                <div className="text-congress-blue-200 text-xs">Mumbai</div>
                            </div>
                        </div>

                        <div className="flex gap-2 justify-around text-congress-blue-100 text-xs">

                            <span>1 day ago</span>
                            <span>120 Applicants</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default DreamJob;