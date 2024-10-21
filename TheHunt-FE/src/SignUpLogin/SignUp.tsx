import { Anchor, Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { IoMdLock } from "react-icons/io";
import { IoAt } from "react-icons/io5";
import { Link } from "react-router-dom";

const SignUp = () => {

	return (

		<div className="w-1/2 px-20 flex flex-col justify-center gap-3">

			<div className="text-2xl font-semibold">Create Account</div>

			<TextInput withAsterisk className="[&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-400"
				label="Full Name"
				placeholder="Your Name"
			/>

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

			<PasswordInput className=" [&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-400"
				label="Confirm Password"
				leftSection={<IoMdLock className="w-5 h-5 text-congress-blue-200" />}
				withAsterisk
				placeholder="Confirm Password"
			/>

			<Checkbox autoContrast className="[&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800"

				label={<>I accept {' '} <Anchor>terms & conditions.</Anchor> </>}
			/>

			<Button autoContrast variant="filled">Sign Up</Button>

			<div className="mx-auto">Have an account? <Link to="/login" className="text-bright-sun-400 hover:underline">Login.</Link></div>


		</div>
	)
}

export default SignUp;