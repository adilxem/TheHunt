import { Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../../Data/Profile";
import SelectInput from "./SelectInput";
import { useEffect } from "react";
import { MonthPickerInput } from "@mantine/dates";
import { useDispatch, useSelector } from "react-redux";
import { isNotEmpty, useForm } from "@mantine/form";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";

const ExpInput = (props: any) => {

	const select = fields;

	const profile = useSelector((state: any) => state.profile);

	const dispatch = useDispatch();

	useEffect(() => {

		if (!props.add) form.setValues({

			title: props.title,
			company: props.company,
			location: props.location,
			description: props.description,
			startDate: new Date(props.startDate),
			endDate: new Date(props.endDate),
			working: props.working
		})
	}, [])

	const form = useForm({
		mode: 'controlled',
		validateInputOnChange: true,
		initialValues: {

			title: '',
			company: '',
			location: '',
			description: '',
			startDate: new Date,
			endDate: new Date,
			working: false
		},

		validate: {

			title: isNotEmpty("Title is required"),
			company: isNotEmpty("Company is required"),
			location: isNotEmpty("Location is required"),
			description: isNotEmpty("Description is required"),
		}
	});

	const handleSave = () => {

		form.validate();

		if (!form.isValid()) return;

		let exp = [...profile.experiences];

		if (props.add) {
			
			exp.push(form.getValues());

			exp[exp.length - 1].startDate = exp[exp.length - 1].startDate.toISOString();
			exp[exp.length - 1].endDate = exp[exp.length - 1].endDate.toISOString();
		}
		else {
			
			exp[props.index] = form.getValues();

			exp[props.index].startDate = exp[props.index].startDate.toISOString();
			exp[props.index].endDate = exp[props.index].endDate.toISOString();
		}

		let updatedProfile = {...profile, experiences:exp};

		props.setEdit(false);

		dispatch(changeProfile(updatedProfile));

		successNotification("Success", `Experience ${props.add ? "Added" : "Updated"} Successfully`);

		console.log(updatedProfile);
		
	}

	return (

		<div className="flex flex-col gap-3">
			<div className="text-lg font-semibold" >{props.add ? "Add " : "Edit "} Experience</div>
			<div className="flex flex-col gap-5 [&_input]:!placeholder-congress-blue-500 [&_input]:!border-congress-blue-900">

				<div className="flex gap-10 [&>*]:w-1/2 ">

					<SelectInput form={form} name="title" {...select[0]} />
					<SelectInput form={form} name="company" {...select[1]} />

				</div>

				<SelectInput form={form} name="location" {...select[2]} />

				<Textarea {...form.getInputProps('description')} withAsterisk autosize minRows={2}
					className="[&_textarea]:bg-congress-blue-900 [&_textarea]:border-congress-blue-700 [&_textarea]:placeholder-congress-blue-300"
					label="Summary"
					placeholder="Job Summary..."
				/>

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

						disabled={form.getValues().working}
						withAsterisk
						minDate={form.getValues().startDate || undefined}
						maxDate={new Date()}
						className="[&_button]:bg-congress-blue-900  [&_button]:border-congress-blue-700"
						label="End date"
						placeholder="Pick date"
					/>

				</div>

				<Checkbox autoContrast className="[&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800"

					{...form.getInputProps("working")}

					checked={form.getValues().working}
					onChange={(event) => form.setFieldValue("working", event.currentTarget.checked)}

					label="Currently working here"
				/>

				<div className="flex gap-5">
					<Button onClick={handleSave} color="green.8" variant="light" >Save</Button>
					<Button onClick={() => props.setEdit(false)} color="red.8" variant="light" >Cancel</Button>
				</div>

			</div>
		</div>
	)
}

export default ExpInput;