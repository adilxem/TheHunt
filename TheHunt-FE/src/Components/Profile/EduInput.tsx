import { Button, Checkbox, TextInput } from "@mantine/core";
import fields from "../../Data/Profile";
import SelectInput from "./SelectInput";
import { useEffect } from "react";
import { MonthPickerInput } from "@mantine/dates";
import { useDispatch, useSelector } from "react-redux";
import { isNotEmpty, useForm } from "@mantine/form";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";

const EduInput = (props: any) => {

	const select = fields;

	const profile = useSelector((state: any) => state.profile);

	console.log('profile from redux', profile);
	

	const dispatch = useDispatch();

	useEffect(() => {

		if (!props.add) form.setValues({

			course: props.course,
			institution: props.institution,
			location: props.location,
			startDate: new Date(props.startDate),
			endDate: new Date(props.endDate),
			currentlyStudying: props.currentlyStudying
		})
	}, [])

	const form = useForm({
		mode: 'controlled',
		validateInputOnChange: true,
		initialValues: {

			course: '',
			institution: '',
			location: '',
			startDate: new Date,
			endDate: new Date,
			currentlyStudying: false
		},

		validate: {

			course: isNotEmpty("Course is required"),
			institution: isNotEmpty("Institution is required"),
			location: isNotEmpty("Location is required"),
		}
	});

	const handleSave = () => {

		form.validate();

		if (!form.isValid()) return;

		let edu = [...(profile.educations || [])];	
		

		if (props.add) {

			edu.push(form.getValues());

			edu[edu.length - 1].startDate = edu[edu.length - 1].startDate.toISOString();
			edu[edu.length - 1].endDate = edu[edu.length - 1].endDate.toISOString();
		}
		else {

			edu[props.index] = form.getValues();

			edu[props.index].startDate = edu[props.index].startDate.toISOString();
			edu[props.index].endDate = edu[props.index].endDate.toISOString();
		}

		let updatedProfile = { ...profile, educations: edu || [] };

		props.setEdit(false);

		dispatch(changeProfile(updatedProfile));

		successNotification("Success", `Education ${props.add ? "Added" : "Updated"} Successfully`);

		console.log(updatedProfile);

	}

	return (

		<div className="flex flex-col gap-3">
			<div className="text-lg font-semibold" >{props.add ? "Add " : "Edit "} Education</div>
			<div className="flex flex-col gap-5 [&_input]:!placeholder-congress-blue-500 [&_input]:!border-congress-blue-900">

				<div className="flex gap-10 [&>*]:w-1/2 ">

					<TextInput {...form.getInputProps("course")} withAsterisk className="[&_input]:bg-congress-blue-950 "

						label="Course"
						placeholder="Course Name"
					/>

					<TextInput {...form.getInputProps("institution")} withAsterisk className="[&_input]:bg-congress-blue-950 "

						label="Institution"
						placeholder="Institution Name"
					/>

					{/* <SelectInput form={form} name="title" {...select[0]} /> */}
					{/* <SelectInput form={form} name="company" {...select[1]} /> */}

				</div>

				<SelectInput form={form} name="location" {...select[2]} />

				{/* <Textarea {...form.getInputProps('description')} withAsterisk autosize minRows={2}
					className="[&_textarea]:bg-congress-blue-900 [&_textarea]:border-congress-blue-700 [&_textarea]:placeholder-congress-blue-300"
					label="Summary"
					placeholder="Job Summary..."
				/> */}

				<div className="flex gap-10 [&>*]:w-1/2 ">
					<MonthPickerInput

						{...form.getInputProps("startDate")}

						withAsterisk
						maxDate={form.getValues().endDate || undefined}
						className="[&_button]:bg-congress-blue-900  [&_button]:border-congress-blue-700"
						label="Start date"
						placeholder="Pick date"
					/>

					<MonthPickerInput

						{...form.getInputProps("endDate")}

						disabled={form.getValues().currentlyStudying}
						withAsterisk
						minDate={form.getValues().startDate || undefined}
						maxDate={new Date()}
						className="[&_button]:bg-congress-blue-900  [&_button]:border-congress-blue-700"
						label="End date"
						placeholder="Pick date"
					/>

				</div>

				<Checkbox autoContrast className="[&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800"

					{...form.getInputProps("currentlyStudying")}

					checked={form.getValues().currentlyStudying}
					onChange={(event) => form.setFieldValue("currentlyStudying", event.currentTarget.checked)}

					label="Currently Studying"
				/>

				<div className="flex gap-5">
					<Button onClick={handleSave} color="green.8" variant="light" >Save</Button>
					<Button onClick={() => props.setEdit(false)} color="red.8" variant="light" >Cancel</Button>
				</div>

			</div>
		</div>
	)
}

export default EduInput;