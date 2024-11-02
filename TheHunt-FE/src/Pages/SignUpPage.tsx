import { FaGhost } from "react-icons/fa";
import SignUp from "../Components/SignUpLogin/SignUp";
import Login from "../Components/SignUpLogin/Login";
import { useLocation } from "react-router-dom";

const SignUpPage = () => {

	const location = useLocation();

	return (

		<div className="min-h-[90vh] bg-congress-blue-950 font-['poppins'] overflow-hidden">

			<div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-700 flex [&>*]:flex-shrink-0 ${location.pathname=='/signup' ? '-translate-x-1/2' : 'translate-x-0'}`}>

				<Login/>

				<div className={`w-1/2 h-full transition-all duration-1000 ease-in-out ${location.pathname=="/signup" ? "rounded-r-[900px]" : "rounded-l-[900px]"} bg-congress-blue-900 flex flex-col gap-5 items-center justify-center`}>

					<div className="flex gap-2 items-center text-bright-sun-300">

						<FaGhost className="h-16 w-16" />

						<div className="text-6xl font-extrabold text-bright-sun-300">TheHunt</div>

					</div>

					<div className="text-2xl text-congress-blue-200 font-semibold">
						Find the Job made for YOU!
					</div>

				</div>

			<SignUp/>

			</div>

		</div>
	)
}

export default SignUpPage;