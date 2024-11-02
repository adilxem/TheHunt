const signupValidation = (name: string, value: string) => {
	
	switch (name) {

		case "name":
			if (value.length === 0) return "name is required";

			return "";

		case "email": 
			if (value.length === 0) return "email is required";

			if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$/.test(value)) return "invalid email";

			return "";

		case "password":
			if (value.length === 0) return "password is required";

			if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#^*?&])[A-Za-z\d@$#^!%*?&]{8,15}$/.test(value)) return "password must contain 8 - 15 characters with atleast one uppercase, one lowercase, one number and one special character";

			return "";
	
		default:
			return "";
	}
}


const loginValidation = (name: string, value: string) => {
	
	switch (name) {

		case "email": 
			if (value.length === 0) return "email is required";

			return "";

		case "password":
			if (value.length === 0) return "password is required";

			return "";
	
		default:
			return "";
	}
}

export {signupValidation, loginValidation};