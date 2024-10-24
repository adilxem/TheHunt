import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {

    const links = [

        {name:"Find Jobs", url:"find-jobs"},
        {name:"Find Talent", url:"find-talent"},
        {name:"Post Job", url:"post-job"},
        {name:"Posted Job", url:"posted-job"},
        {name:"Job History", url:"job-history"},
        {name:"Sign Up", url:"signup"}
    ]

    const location = useLocation();

    return (
    
        <div className="flex justify-center items-center text-congress-blue-200 gap-6 h-full">

            {
                links.map((link, index) => 
                <div className={`${location.pathname == "/" + link.url? "border-bright-sun-400 text-bright-sun-400": "border-transparent"} border-t-[3px] h-full flex items-center`}>

                    <Link key={index} to = {link.url} >{link.name}</Link>
                </div>)

            }

        </div>
    )
}

export default NavLinks;