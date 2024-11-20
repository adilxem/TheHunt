import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core";
import { content, fields } from "../../Data/PostJob";
import SelectInput from "./SelectInput";
import TextEditor from "./TextEditor";
import { isNotEmpty, useForm } from "@mantine/form";
import { getJob, postJob } from "../../Services/JobService";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const PostJob = () => {

	const {id} = useParams();

	const user = useSelector((state: any) => state.user);

	const select = fields;

	const [editorData, setEditorData] = useState(content);

	const navigate = useNavigate();

	useEffect(() => {

		window.scrollTo(0, 0);

		if (id !== "0") {

			getJob(id).then((res) => {

				form.setValues(res);
				setEditorData(res.description);

			}).catch((err) => {

				console.log(err);
				
			})
		}

		else {

			form.reset();
			setEditorData(content);
		}
		
	}, [id])

	const form = useForm ({

		mode : 'controlled',
		validateInputOnChange : true,
		initialValues : {

			jobTitle : '',
			company : '',
			experience : '', 
			jobType : '',
			location : '',
			packageOffered : '',
			skillsRequired : [],
			about : '',
			description : content
		},

		validate : {

			jobTitle : isNotEmpty('Title is required'),
			company : isNotEmpty('Company is required'),
			experience : isNotEmpty('Experience is required'),
			jobType : isNotEmpty('Job Type is required'),
			location : isNotEmpty('Location is required'),
			packageOffered : isNotEmpty('Package is required'),
			skillsRequired : isNotEmpty('Mention the skills required'),
			about : isNotEmpty('About is required'),
			description : isNotEmpty('Job Description is required'),
		}
	});

	
	const handlePost = () => {

		form.validate();
		if(!form.isValid()) return;
		
		console.log(form.getValues());

		postJob({...form.getValues(), id, postedBy: user.id, jobStatus: "ACTIVE"}).then((res) => {

			successNotification("Success", "Job Posted Successfully");

			navigate(`/posted-job/${res.id}`);
		}).catch((err) => {

			console.log(err);
			errorNotification("Error Posting Job", err.response.data.errorMessage);
		})
		
	}

	
	const handleDraft = () => {

		// form.validate();
		// if(!form.isValid()) return;
		
		console.log(form.getValues());

		postJob({...form.getValues(), id, postedBy: user.id, jobStatus: "DRAFT"}).then((res) => {

			successNotification("Success", "Job Saved as Draft Successfully");

			navigate(`/posted-job/${res.id}`);
		}).catch((err) => {

			console.log(err);
			errorNotification("Error Posting Job", err.response.data.errorMessage);
		})
		
	}

	return (

		<div className="w-1/2 mx-auto">

			<div className="text-2xl font-semibold mt-4 mb-5">Post a Job</div>	

			<div className="flex flex-col gap-5 [&_input]:!placeholder-congress-blue-500 [&_input]:!border-congress-blue-700">

				<div className="flex gap-10 [&>*]:w-1/2 ">

					<SelectInput form={form} name="jobTitle" {...select[0]}/>
					<SelectInput form={form} name="company" {...select[1]}/>

				</div>

				<div className="flex gap-10 [&>*]:w-1/2">

					<SelectInput form={form} name="experience" {...select[2]}/>
					<SelectInput form={form} name="jobType" {...select[3]}/>

				</div>

				<div className="flex gap-10 [&>*]:w-1/2">

					<SelectInput form={form} name="location" {...select[4]}/>
					<NumberInput {...form.getInputProps('packageOffered')} className="[&_input]:bg-congress-blue-950" label="Salary" withAsterisk placeholder="Enter Salary" hideControls />

				</div>

				<div className="[&_*]:bg-congress-blue-950 [&_*]:!border-congress-blue-900 [&_input]:!placeholder-congress-blue-500">

					<TagsInput {...form.getInputProps('skillsRequired')} withAsterisk label="Skills" placeholder="Enter skills" splitChars={[',', ' ', '|']} clearable acceptValueOnBlur />

					<Textarea {...form.getInputProps('about')} withAsterisk autosize minRows={2}
					className="mt-5 [&_textarea]:bg-congress-blue-900 [&_textarea]:border-congress-blue-700 [&_textarea]:placeholder-congress-blue-300"
					label="About Job"
					placeholder="Job summary..."
				/>

				</div>


				<div className="[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-congress-blue-400/40 [&_button]:!bg-congress-blue-900 [&_*]:!border-congress-blue-900">
					<div className="text-sm font-medium ">
						Add Job Description

						<span className="text-red-600"> *</span>
					</div>

					<TextEditor form={form} data={editorData} />
				</div>

				<div className="flex gap-4">
					<Button onClick={handlePost} color="bright-sun.4" variant="light" >Publish Job</Button>

					<Button onClick={handleDraft} color="bright-sun.4" variant="outline" >Save as Draft</Button>
				</div>

			</div>

		</div>
	)
}

export default PostJob;