import { TextInput, PasswordInput, Button } from "@mantine/core";
import { useState } from "react";
import { IoMdLock } from "react-icons/io";
import { IoAt } from "react-icons/io5";
import { Link } from "react-router-dom";
import { loginUser } from "../../Services/UserService";

const form = {

	email : "",
	password : ""
}

const Login = () => {

	const [data, setData] = useState(form);

	const handleChange = (event : any) => {
		
		setData({...data, [event.target.name]:event.target.value});		
	}
	
	const handleSubmit = () => {
		
		loginUser(data).then((res) => {

			console.log(res);
		}).catch((err) => console.log(err.response.data));
		
	}

	return (

		<div className="w-1/2 px-20 flex flex-col justify-center gap-3">

			<div className="text-2xl font-semibold">Login</div>


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

			<Button onClick={handleSubmit} autoContrast variant="filled">Login</Button>

			<div className="mx-auto">Don't have an account? <Link to="/signup" className="text-bright-sun-400 hover:underline">SignUp.</Link></div>


		</div>
	)
}

export default Login;