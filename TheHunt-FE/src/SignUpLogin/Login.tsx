import { TextInput, PasswordInput, Button } from "@mantine/core";
import { IoMdLock } from "react-icons/io";
import { IoAt } from "react-icons/io5";
import { Link } from "react-router-dom";

const Login = () => {

	return (

		<div className="w-1/2 px-20 flex flex-col justify-center gap-3">

			<div className="text-2xl font-semibold">Login</div>


			<TextInput withAsterisk className="[&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-400"

				leftSection={<IoAt className="w-5 h-5 text-congress-blue-200" />}
				label="Email"
				placeholder="Your Email"
			/>

			<PasswordInput className=" [&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-400"
				label="Password"
				leftSection={<IoMdLock className="w-5 h-5 text-congress-blue-200" />}
				withAsterisk
				placeholder="Password"
			/>

			<Button autoContrast variant="filled">Login</Button>

			<div className="mx-auto">Don't have an account? <Link to="/signup" className="text-bright-sun-400 hover:underline">SignUp.</Link></div>


		</div>
	)
}

export default Login;