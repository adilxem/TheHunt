import { FaFacebookSquare, FaGhost, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { footerLinks } from "../../Data/Data";
import { useLocation } from "react-router-dom";

const Footer = () => {

	const location = useLocation();


    return location.pathname!="/signup" && location.pathname!="/login" ?

        <div className="pt-20 pb-5 flex gap-5 justify-around bg-congress-blue-950 font-['poppins']">

            <div className="w-1/4 flex flex-col gap-4">
                <div className="flex gap-2 items-center text-bright-sun-300">
                
                    <FaGhost className="h-6 w-6"/>

                    <div className="text-xl font-extrabold text-bright-sun-300">TheHunt</div>
                </div>


                <div className="text-sm text-congress-blue-300">

                    Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
                </div>
                <div className="flex gap-3 text-bright-sun-400 [&>div]:bg-congress-blue-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-congress-blue-700">
                    <div><FaFacebookSquare /></div>
                    <div><FaInstagram /></div>
                    <div><FaXTwitter /></div>
                </div>
            </div>

            {
                footerLinks.map((item, index) => 

                    <div key={index} >

                        <div className="text-lg font-semibold mb-4 text-bright-sun-400">{item.title}</div>
                        {
                            item.links.map((link, index) =>

                            <div key={index} className="text-congress-blue-300 text-sm hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out">
                                {link}
                            </div>)
                        }
                    </div>
                
                )
            }

        </div> : <></>
    

}

export default Footer;