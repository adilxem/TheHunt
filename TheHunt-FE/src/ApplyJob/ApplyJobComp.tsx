import { Button, Divider, FileInput, NumberInput, Textarea, TextInput, Notification, LoadingOverlay } from "@mantine/core";
import { useState } from "react";
import { BiPaperclip } from "react-icons/bi";
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ApplyJobComp = () => {

	const [preview, setPreview] = useState(false);

	const [submit, setSubmit] = useState(false);

	const [sec, setSec] = useState(5);

	const navigate = useNavigate();

	const handlePreview = () => {

		setPreview(!preview);

		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	const handleSubmit = () => {

		setSubmit(true);

		let x = 5;

		setInterval(() => {
			x--;
			setSec(x);

			if (x == 0) {
				navigate('/find-jobs')
			}

		}, 1000);
	}

	return <> <div className="w-2/3 mx-auto">

		<LoadingOverlay className="!fixed"
			visible={submit}
			zIndex={1000}
			overlayProps={{ radius: 'sm', blur: 1 }}
			loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
		/>

		<div className="flex justify-between">

			<div className="flex gap-2 items-center">

				<div className="p-3 bg-congress-blue-800 rounded-xl">
					<img className="h-14 " src={`/Icons/Google.png`} alt="" />
				</div>
				<div className="flex flex-col gap-1">

					<div className="font-semibold text-2xl">Software Engineer</div>
					<div className="text-lg text-congress-blue-300">Google &#x2022; 3 days ago &#x2022; 48 Applicants </div>

				</div>
			</div>

		</div>

		<Divider size="xs" my="xl" color="congress-blue.9" />

		<div className="text-xl font-semibold mb-5">
			Submit Your Application
		</div>

		<div className="flex flex-col gap-5 [&_input]:placeholder-congress-blue-800 [&_textarea]:placeholder-congress-blue-800 [&_input]:border-congress-blue-900 [&_textarea]:!border-congress-blue-900 ">

			<div className="flex gap-10 [&>*]:w-1/2 [&_input]:bg-congress-blue-950 ">

				<TextInput readOnly={preview} variant={preview ? "unstyled border-transparent" : "default"} className={`${preview ? "text-congress-blue-300 font-semibold" : ""}`} label="Full Name" placeholder="Full Name" withAsterisk />
				<TextInput readOnly={preview} variant={preview ? "unstyled border-transparent" : "default"} className={`${preview ? "text-congress-blue-300 font-semibold" : ""}`} label="Email" placeholder="Email Address" withAsterisk />

			</div>

			<div className="flex gap-10 [&>*]:w-1/2 [&_input]:bg-congress-blue-950">

				<NumberInput readOnly={preview} variant={preview ? "unstyled border-transparent" : "default"} className={`${preview ? "text-congress-blue-300 font-semibold" : ""}`} label="Phone" placeholder="Phone Number" withAsterisk hideControls min={0} max={9999999999} clampBehavior="strict" />
				<TextInput readOnly={preview} variant={preview ? "unstyled border-transparent" : "default"} className={`${preview ? "text-congress-blue-300 font-semibold" : ""}`} label="Personal Website" placeholder="URL" />

			</div>

			<FileInput

				readOnly={preview} variant={preview ? "unstyled border-transparent" : "default"} className={`${preview ? "text-congress-blue-300 font-semibold" : ""} [&_button]:bg-congress-blue-950`}

				leftSection={<BiPaperclip />}
				label="Attach your CV"
				placeholder="Your CV"
				leftSectionPointerEvents="none" withAsterisk
			/>

			<Textarea

				readOnly={preview} variant={preview ? "unstyled border-transparent" : "default"} className={`${preview ? "text-congress-blue-300 font-semibold" : ""} [&_textarea]:bg-congress-blue-950`}

				placeholder="Write something about yourself..."
				label="Cover Letter"
				autosize
				minRows={4} withAsterisk
			/>

			{!preview && <Button onClick={handlePreview} color="bright-sun.4" variant="light" >Preview</Button>}

			{
				preview && <div className="flex gap-10 [&>*]:w-1/2">

					<Button fullWidth onClick={handlePreview} color="bright-sun.4" variant="outline" >Edit</Button>

					<Button fullWidth onClick={handleSubmit} color="bright-sun.4" variant="light" >Submit</Button>

				</div>
			}

		</div>

	</div>

		<Notification icon={<FaCircleCheck />} color="teal" title="Application Submitted!" mt="md" withCloseButton={false} withBorder
			className={`bg-congress-blue-950 border-bright-sun-200 !fixed top-20 left-[40%] z-[1001] transition duration-500 ease-in-out  ${submit ? "translate-y-0" : "-translate-y-60"}`}>

			Redirecting to Find Jobs in {sec} seconds...
		</Notification>




	</>
}

export default ApplyJobComp;