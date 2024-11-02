import { TextInput, PasswordInput, Button } from "@mantine/core";
import { useState } from "react";
import { IoMdLock } from "react-icons/io";
import { IoAt } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/UserService";
import { loginValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";

const form = {

	email: "",
	password: ""
}

const Login = () => {

	const [data, setData] = useState<{ [key: string]: string }>(form);

	const [formError, setFormError] = useState<{ [key: string]: string }>(form);

	const [opened, { open, close }] = useDisclosure(false);

	const navigate = useNavigate();

	const handleChange = (event: any) => {

		setFormError({ ...formError, [event.target.name]: "" });

		setData({ ...data, [event.target.name]: event.target.value });
	}

	const handleSubmit = () => {

		let valid = true, newFormError: { [key: string]: string } = {};

		for (let key in data) {

			newFormError[key] = loginValidation(key, data[key]);

			if (newFormError[key]) valid = false;
		}

		setFormError(newFormError);

		if (valid) {

			loginUser(data).then((res) => {

				console.log(res);

				notifications.show({
					title: 'Login Successful',
					message: 'Redirecting to home page...',
					autoClose: 2000,
					withCloseButton: true,
					withBorder: true,
					className: "!border-blue-500 mb-5"
				})

				setTimeout(() => {

					navigate("/");

				}, 2000);


			}).catch((err) => {

				console.log(err.response.data);

				notifications.show({
					title: 'Login Failed',
					message: err.response.data.errorMessage,
					withCloseButton: true,
					withBorder: true,
					className: "!border-red-500 mb-5"
				});

			});
		}


	}

	return <>

		<div className="w-1/2 px-20 flex flex-col justify-center gap-3">

			<div className="text-2xl font-semibold">Login</div>


			<TextInput
				name="email"
				error={formError.email}
				value={data.email}
				onChange={handleChange}
				withAsterisk className="[&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-400"

				leftSection={<IoAt className="w-5 h-5 text-congress-blue-200" />}
				label="Email"
				placeholder="Your Email"
			/>

			<PasswordInput
				name="password"
				error={formError.password}
				value={data.password}
				onChange={handleChange}
				className=" [&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-400"
				label="Password"
				leftSection={<IoMdLock className="w-5 h-5 text-congress-blue-200" />}
				withAsterisk
				placeholder="Password"
			/>

			<Button onClick={handleSubmit} autoContrast variant="filled">Login</Button>

			<div className="mx-auto">Don't have an account? <span onClick={() => { navigate("/signup"); setFormError(form); setData(form) }} className="text-bright-sun-400 hover:underline cursor-pointer">Signup.</span></div>

			<div onClick={open} className="text-bright-sun-400 hover:underline cursor-pointer text-center">Forget Password?</div>

		</div>

		<ResetPassword opened = {opened} close = {close}/>

	</>

}

export default Login;