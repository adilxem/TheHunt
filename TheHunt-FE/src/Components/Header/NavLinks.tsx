// import { Link, useLocation } from "react-router-dom";

// const NavLinks = () => {

//     const links = [

//         {name:"Find Jobs", url:"find-jobs"},
//         {name:"Find Talent", url:"find-talent"},
//         {name:"Post Job", url:"post-job/0"},
//         {name:"Posted Job", url:"posted-job/0"},
//         {name:"Job History", url:"job-history"},
//     ]

//     const location = useLocation();

//     return (
    
//         <div className="flex justify-center items-center text-congress-blue-200 gap-6 h-full">

//             {
//                 links.map((link, index) => 
//                 <div key={index} className={`${location.pathname == "/" + link.url? "border-bright-sun-400 text-bright-sun-400": "border-transparent"} border-t-[3px] h-full flex items-center`}>

//                     <Link key={index} to = {link.url} >{link.name}</Link>
//                 </div>)

//             }

//         </div>
//     )
// }

// export default NavLinks;


import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavLinks = () => {
  const location = useLocation();

  // Get the user and account type from Redux state
  const user = useSelector((state: any) => state.user);
  const accountType = user?.accountType; // Either "APPLICANT" or "EMPLOYER"

  // Define all links with visibility rules
  const links = [
    { name: "Find Jobs", url: "find-jobs", roles: ["APPLICANT"] },
    { name: "Find Talent", url: "find-talent", roles: ["EMPLOYER"] },
    { name: "Post Job", url: "post-job/0", roles: ["EMPLOYER"] },
    { name: "Posted Job", url: "posted-job/0", roles: ["EMPLOYER"] },
    { name: "Job History", url: "job-history", roles: ["APPLICANT"] },
  ];

  // Filter links based on account type
  const visibleLinks = links.filter(link => link.roles.includes(accountType));

  return (
    <div className="flex justify-center items-center text-congress-blue-200 gap-6 h-full">
      {visibleLinks.map((link, index) => (
        <div
          key={index}
          className={`${
            location.pathname === "/" + link.url
              ? "border-bright-sun-400 text-bright-sun-400"
              : "border-transparent"
          } border-t-[3px] h-full flex items-center`}
        >
          <Link to={link.url}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
