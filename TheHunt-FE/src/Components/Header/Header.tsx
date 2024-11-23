// import { Button } from "@mantine/core";
// import { FaGhost } from "react-icons/fa";
// import NavLinks from "./NavLinks";
// import { Link, useLocation } from "react-router-dom";
// import ProfileMenu from "./ProfileMenu";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getProfile } from "../../Services/ProfileService";
// import { setProfile } from "../../Slices/ProfileSlice";
// import NotificationMenu from "./NotificationMenu";



// const Header = () => {

// 	const user = useSelector((state: any) => state.user);

// 	const location = useLocation();

// 	const dispatch = useDispatch();


// 	useEffect(() => {
// 		if (user && user.id) {  // Check if user and user.id exist
// 		  getProfile(user.id)
// 			.then((data: any) => {
// 			  dispatch(setProfile(data));
// 			})
// 			.catch((error: any) => {
// 			  console.log(error);
// 			});
// 		}
// 	  }, [user, dispatch]); // Add dispatch as a dependency to follow best practices
	  

// 	return location.pathname != "/signup" && location.pathname != "/login" ? <div className="w-full bg-congress-blue-950 h-20 text-white flex justify-between items-center px-5 font-['poppins']">

// 		<Link to="/" className="flex gap-2 items-center text-bright-sun-400 ">

// 			<FaGhost className="h-8 w-8" />

// 			<div className="text-2xl font-extrabold text-bright-sun-300">TheHunt</div>
// 		</Link>

// 		{NavLinks()}

// 		<div className="flex gap-4 justify-center items-center">

// 			{user ? <ProfileMenu /> : <Link to="/login">
// 				<Button variant="subtle" color="bright-sun.4">Login</Button>
// 			</Link>}

// 			{user ? <NotificationMenu/> : <></>}

// 		</div>

// 	</div> : <></>

// }

// export default Header;









import { Button } from "@mantine/core";
import { FaGhost } from "react-icons/fa";
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../../Services/ProfileService";
import { setProfile } from "../../Slices/ProfileSlice";
import NotificationMenu from "./NotificationMenu";

const Header = () => {
  const user = useSelector((state: any) => state.user); // Redux user state
  const location = useLocation(); // Current route location
  const dispatch = useDispatch(); // Redux dispatcher

  useEffect(() => {
    if (user && user.id) {
      getProfile(user.id)
        .then((data: any) => {
          dispatch(setProfile(data));
        })
        .catch((error: any) => {
          console.error("Error fetching profile:", error);
        });
    }
  }, [user, dispatch]);

  // Render Header only if not on login/signup pages
  if (location.pathname === "/signup" || location.pathname === "/login") {
    return null;
  }

  return (
    <div className="w-full bg-congress-blue-950 h-20 text-white flex justify-between items-center px-5 font-['poppins']">
      {/* Logo */}
      <Link to="/" className="flex gap-2 items-center text-bright-sun-400">
        <FaGhost className="h-8 w-8" />
        <div className="text-2xl font-extrabold text-bright-sun-300">TheHunt</div>
      </Link>

      {/* Navigation Links */}
      <NavLinks />

      {/* Profile/Notification Area */}
      <div className="flex gap-4 justify-center items-center">
        {user ? (
          <>
            <ProfileMenu />
            <NotificationMenu />
          </>
        ) : (
          <Link to="/login">
            <Button variant="subtle" color="bright-sun.4">
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
