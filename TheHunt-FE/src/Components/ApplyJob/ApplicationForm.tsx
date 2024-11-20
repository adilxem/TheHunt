import { Button, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useState } from "react";
import { BiPaperclip } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { getBase64 } from "../../Services/Utilities";
import { applyJob } from "../../Services/JobService";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { useSelector } from "react-redux";


const ApplicationForm = () => {

	const {id} = useParams();

	const user = useSelector((state : any) => state.user);


	const [preview, setPreview] = useState(false);

	const [submit, setSubmit] = useState(false);

	const navigate = useNavigate();

	const handlePreview = () => {

		form.validate();

		window.scrollTo({ top: 0, behavior: 'smooth' });

		if(!form.isValid()) return;

		setPreview(!preview);

		console.log(form.getValues());
		
	}

	const handleSubmit = async () => {

		setSubmit(true);

		let resume : any = await getBase64(form.getValues().resume);

		let applicant = {...form.getValues(), applicantId : user.id, resume : resume.split(',') [1]};

		applyJob(id, applicant).then((res) => {

			setSubmit(false);
			
			successNotification("Success", "Application Submitted Successfully");

			navigate("/job-history");

		}).catch((err) => {

			setSubmit(false);

			errorNotification("Error", err.response.data.errorMessage);
			
		});

	}

	const form = useForm({
		mode: 'controlled',
		validateInputOnChange: true,
		initialValues: {

			name: '',
			email: '',
			phone: '',
			website: '',
			resume: null,
			coverLetter: ''
		},

		validate: {

			name: isNotEmpty("Name is required"),
			email: isNotEmpty("Email is required"),
			phone: isNotEmpty("Phone Number is required"),
			resume: isNotEmpty("Certificate ID is required")
		}
	});

	return <div>

		<LoadingOverlay className="!fixed"
			visible={submit}
			zIndex={1000}
			overlayProps={{ radius: 'sm', blur: 1 }}
			loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
		/>

		<div className="text-xl font-semibold mb-5">
			Submit Your Application
		</div>

		<div className="flex flex-col gap-5 [&_input]:placeholder-congress-blue-800 [&_textarea]:placeholder-congress-blue-800 [&_input]:border-congress-blue-900 [&_textarea]:!border-congress-blue-900 ">

			<div className="flex gap-10 [&>*]:w-1/2 [&_input]:bg-congress-blue-950 ">

				<TextInput {...form.getInputProps("name")} readOnly={preview} variant={preview ? "unstyled border-transparent" : "default"} className={`${preview ? "text-congress-blue-300 font-semibold" : ""}`} label="Full Name" placeholder="Full Name" withAsterisk />
				<TextInput {...form.getInputProps("email")} readOnly={preview} variant={preview ? "unstyled border-transparent" : "default"} className={`${preview ? "text-congress-blue-300 font-semibold" : ""}`} label="Email" placeholder="Email Address" withAsterisk />

			</div>

			<div className="flex gap-10 [&>*]:w-1/2 [&_input]:bg-congress-blue-950">

				<NumberInput {...form.getInputProps("phone")} readOnly={preview} variant={preview ? "unstyled border-transparent" : "default"} className={`${preview ? "text-congress-blue-300 font-semibold" : ""}`} label="Phone" placeholder="Phone Number" withAsterisk hideControls min={0} max={9999999999} clampBehavior="strict" />
				<TextInput {...form.getInputProps("website")} readOnly={preview} variant={preview ? "unstyled border-transparent" : "default"} className={`${preview ? "text-congress-blue-300 font-semibold" : ""}`} label="Personal Website" placeholder="URL" />

			</div>

			<FileInput

				{...form.getInputProps("resume")}

				accept="application/pdf"

				readOnly={preview} variant={preview ? "unstyled border-transparent" : "default"} className={`${preview ? "text-congress-blue-300 font-semibold" : ""} [&_button]:bg-congress-blue-950`}

				leftSection={<BiPaperclip />}
				label="Attach your CV"
				placeholder="Your CV"
				leftSectionPointerEvents="none" withAsterisk
			/>

			<Textarea

				{...form.getInputProps("coverLetter")}

				readOnly={preview} variant={preview ? "unstyled border-transparent" : "default"} className={`${preview ? "text-congress-blue-300 font-semibold" : ""} [&_textarea]:bg-congress-blue-950`}

				placeholder="Write something about yourself..."
				label="Cover Letter"
				autosize
				minRows={4}
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
}

export default ApplicationForm;