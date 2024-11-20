import { Button, Modal, PasswordInput, PinInput, TextInput } from "@mantine/core";
import { useState } from "react";
import { IoAt } from "react-icons/io5";
import { changePassword, sendOTP, verifyOTP } from "../../Services/UserService";
import { IoMdLock } from "react-icons/io";
import { signupValidation } from "../../Services/FormValidation";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { useInterval } from "@mantine/hooks";

const ResetPassword = (props: any) => {

	const [email, setEmail] = useState("");

	const [password, setPassword] = useState("");

	const [passErr, setPassErr] = useState("");

	const [otpSent, setOtpSent] = useState(false);

	const [otpSending, setOtpSending] = useState(false);

	const [verified, setVerified] = useState(false);

	const [resendLoader, setResendLoader] = useState(false);

	const [seconds, setSeconds] = useState(60);
	const interval = useInterval(() => {

		if (seconds === 0) {

			setResendLoader(false);
			setSeconds(60);
			interval.stop();
		}
		
		else setSeconds((s) => s - 1)
	}, 1000);

	const handleSendOTP = () => {

		setOtpSending(true);

		sendOTP(email).then((res) => {

			console.log(res);

			successNotification("OTP Sent Successfully", "Enter OTP to reset")

			setOtpSent(true);
			setOtpSending(false);

			setResendLoader(true);

			interval.start();
		})
			.catch((err) => {

				console.log(err);
				setOtpSending(false);

				errorNotification("OTP Sending Failed", err.response.data.errorMessage);
			})
	}

	const handleVerifiedOTP = (otp: string) => {

		verifyOTP(email, otp).then((res) => {

			console.log(res);

			successNotification("OTP Verified", "Enter New Password");
			setVerified(true);
		})
			.catch((err) => {

				console.log(err);
				errorNotification("OTP Verification Failed", err.response.data.errorMessage);
			})
	}

	const resendOTP = () => {

		if (resendLoader) return;

		handleSendOTP();
	}

	const changeEmail = () => {

		setOtpSent(false);
		setResendLoader(false);
		setSeconds(60);
		setVerified(false);
		interval.stop();
	}

	const handleResetPassword = () => {

		changePassword(email, password).then((res) => {

			console.log(res);

			successNotification("Password Changed Successfully", "Login with new password");
			props.close();
		})
			.catch((err) => {

				console.log(err);

				errorNotification("Password Reset Failed", err.response.data.errorMessage);
			})
	}

	return <Modal className='[&_section]:bg-congress-blue-900 [&_header]:bg-congress-blue-900 [&_header>button]:hover:bg-congress-blue-900 [&_input]:bg-congress-blue-950 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-800' opened={props.opened} onClose={props.close} title="Reset Password">
		<div className="flex flex-col gap-6">

			<TextInput
				name="email"
				size="md"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				withAsterisk className="[&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-400"

				leftSection={<IoAt className="w-5 h-5 text-congress-blue-200" />}
				label="Email"
				placeholder="Your Email"

				rightSection={<Button loading={otpSending && !otpSent} size="xs" className="mr-1" onClick={handleSendOTP} autoContrast disabled={email === "" || otpSent} variant="filled">Send Code</Button>}
				rightSectionWidth="xl"
			/>
			{
				otpSent && <PinInput className="mx-auto" size="md" gap="md" onComplete={handleVerifiedOTP} length={6} placeholder="x" type="number" />
			}

			{
				otpSent && !verified &&

				<div className="flex gap-2">

					<Button fullWidth color="bright-sun.4" loading={otpSending} onClick={resendOTP} autoContrast variant="light">{resendLoader ? `Resend Code (${seconds})` : "Resend"}</Button>

					<Button fullWidth onClick={changeEmail} autoContrast variant="filled">Not Your Email?</Button>
				</div>
			}

			{
				verified &&

				<PasswordInput
					name="password"
					error={passErr}
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
						setPassErr(signupValidation("password", e.target.value))
					}}
					className=" [&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-400"
					label="Password"
					leftSection={<IoMdLock className="w-5 h-5 text-congress-blue-200" />}
					withAsterisk
					placeholder="Password"
				/>
			}

			{
				verified && <Button onClick={handleResetPassword} autoContrast variant="filled">Change Password</Button>
			}
		</div>
	</Modal>
}

export default ResetPassword;