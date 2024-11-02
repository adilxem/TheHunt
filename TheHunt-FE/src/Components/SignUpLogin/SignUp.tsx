import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, TextInput } from "@mantine/core";
import { useState } from "react";
import { IoMdLock } from "react-icons/io";
import { IoAt } from "react-icons/io5";
import { Link } from "react-router-dom";
import { registerUser } from "../../Services/UserService";

const form = {

	name : "",
	email : "",
	password : "",
	confirmPassword : "",
	accountType : "APPLICANT"
}

const SignUp = () => {

	const [data, setData] = useState(form);

	const handleChange = (event : any) => {

		if (typeof(event) == "string") setData({...data, accountType:event});

		else setData({...data, [event.target.name]:event.target.value});
		
	}
	
	const handleSubmit = () => {
		
		registerUser(data).then((res) => {

			console.log(res);
		}).catch((err) => console.log(err.response.data));
		
	}

	return (

		<div className="w-1/2 px-20 flex flex-col justify-center gap-3">

			<div className="text-2xl font-semibold">Create Account</div>

			<TextInput 
			name="name"
			value={data.name}
			onChange={handleChange}
			withAsterisk className="[&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-400"
				label="Full Name"
				placeholder="Your Name"
			/>

			<TextInput 
			name="email"
			value={data.email}
			onChange={handleChange}
			withAsterisk className="[&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-400"

				leftSection={<IoAt className="w-5 h-5 text-congress-blue-200" />}
				label="Email"
				placeholder="Your Email"
			/>

			<PasswordInput 
			name="password"
			value={data.password}
			onChange={handleChange} 
			className=" [&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-400"
				label="Password"
				leftSection={<IoMdLock className="w-5 h-5 text-congress-blue-200" />}
				withAsterisk
				placeholder="Password"
			/>

			<PasswordInput 
			name="confirmPassword"
			value={data.confirmPassword} onChange={handleChange} className=" [&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-400"
				label="Confirm Password"
				leftSection={<IoMdLock className="w-5 h-5 text-congress-blue-200" />}
				withAsterisk
				placeholder="Confirm Password"
			/>

			<Radio.Group className="[&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800 my-3"
				value={data.accountType}
				onChange={handleChange}
				label="Looking for?"
				withAsterisk
			>

				<Group mt="xs">
					<Radio 
					className="py-4 px-6 border border-congress-blue-800 rounded-lg has-[:checked]:border-bright-sun-400 has-[:checked]:bg-bright-sun-400/5 hover:bg-congress-blue-900/50"
					 value="APPLICANT" label="Jobs" />
					<Radio 
					className="py-4 px-6 border border-congress-blue-800 rounded-lg has-[:checked]:border-bright-sun-400 has-[:checked]:bg-bright-sun-400/5 hover:bg-congress-blue-900/50"
					 value="EMPLOYER" label="Talents" />
				</Group>

			</Radio.Group>

			<Checkbox autoContrast className="[&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800"

				label={<>I accept {' '} <Anchor>terms & conditions.</Anchor> </>}
			/>

			<Button onClick={handleSubmit} autoContrast variant="filled">Sign Up</Button>

			<div className="mx-auto">Have an account? <Link to="/login" className="text-bright-sun-400 hover:underline">Login.</Link></div>


		</div>
	)
}

export default SignUp;