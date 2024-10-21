import { Indicator } from "@mantine/core";
import { FaGhost } from "react-icons/fa";
import { IoNotifications, IoSettingsSharp } from "react-icons/io5";
import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";



const Header = () => {

	const location = useLocation();

    return location.pathname!="/signup" && location.pathname!="/login" ? <div className="w-full bg-congress-blue-950 h-20 text-white flex justify-between items-center px-5 font-['poppins']">

        <div className="flex gap-2 items-center text-bright-sun-400 ">
            
            <FaGhost className="h-8 w-8"/>

            <div className="text-2xl font-extrabold text-bright-sun-300">TheHunt</div>
        </div>

        {NavLinks()}

        <div className="flex gap-4 justify-center items-center">

			<ProfileMenu/>
            
            <div className="bg-congress-blue-900 p-1.5 rounded-full">

                <Indicator color="bright-sun.4" offset={6} size={8} processing>

                <IoNotifications className="h-6 w-6"/>

                </Indicator>
            </div>

            <div className="bg-congress-blue-900 p-1.5 rounded-full">

                <IoSettingsSharp className="h-6 w-6"/>
            </div>

        </div>

    </div> : <></>

}

export default Header;