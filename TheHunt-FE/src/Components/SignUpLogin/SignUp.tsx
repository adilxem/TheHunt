import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, TextInput } from "@mantine/core";
import { useState } from "react";
import { IoMdLock } from "react-icons/io";
import { IoAt } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";

const form = {

	name: "",
	email: "",
	password: "",
	confirmPassword: "",
	accountType: "APPLICANT"
}

const SignUp = () => {

	const [data, setData] = useState<{ [key: string]: string }>(form);

	const [formError, setFormError] = useState<{ [key: string]: string }>(form);

	const navigate = useNavigate();

	const handleChange = (event: any) => {

		if (typeof (event) == "string") {

			setData({ ...data, accountType: event });

			return;
		}

		let name = event.target.name, value = event.target.value;

		setData({ ...data, [name]: value });

		setFormError({ ...formError, [name]: signupValidation(name, value) });

		if (name === "password" && data.confirmPassword !== "") {

			let err = "";

			if (data.confirmPassword !== value) err = "Password and Confirm Password does not match";

			setFormError({ ...formError, [name]: signupValidation(name, value), confirmPassword: err });
		}

		if (name === "confirmPassword") {

			if (data.password !== value) setFormError({ ...formError, [name]: "Password and Confirm Password does not match" });

			else setFormError({ ...formError, confirmPassword: "" });
		}

	}

	const handleSubmit = () => {

		let valid = true, newFormError: { [key: string]: string } = {};

		for (let key in data) {

			if (key === "accountType") continue;

			if (key !== "confirmPassword") newFormError[key] = signupValidation(key, data[key]);

			else if (data[key] !== data["password"]) newFormError[key] = "passwords do no match";

			if (newFormError[key]) valid = false;
		}

		setFormError(newFormError);

		if (valid === true) {

			registerUser(data).then((res) => {

				console.log(res);

				setData(form);

				notifications.show({
					title: 'Registered Successfully',
					message: 'Redirecting to login page...',
					withCloseButton: true,
					withBorder: true,
					className: "!border-blue-500 mb-5"
				})

				setTimeout(() => {

					navigate("/login");
					
				}, 2800);

			}).catch((err) => {

				console.log(err.response.data);

				notifications.show({
					title: 'Registration Failed',
					message: err.response.data.errorMessage,
					withCloseButton: true,
					withBorder: true,
					className: "!border-red-500 mb-5"
				})

			});
		}



	}

	return (

		<div className="w-1/2 px-20 flex flex-col justify-center gap-3">

			<div className="text-2xl font-semibold">Create Account</div>

			<TextInput
				name="name"
				error={formError.name}
				value={data.name}
				onChange={handleChange}
				withAsterisk className="[&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-400"
				label="Full Name"
				placeholder="Your Name"
			/>

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

			<PasswordInput
				name="confirmPassword"
				error={formError.confirmPassword}
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

			<div className="mx-auto">Have an account? <span onClick={() => {navigate("/login"); setFormError(form); setData(form)}} className="text-bright-sun-400 hover:underline cursor-pointer">Login.</span></div>


		</div>
	)
}

export default SignUp;