import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import fields from "../../Data/Profile";
import { MonthPickerInput } from "@mantine/dates";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";

const CertiInput = (props: any) => {

	const select = fields;

	const dispatch = useDispatch();

	// const [issueDate, setIssueDate] = useState<Date | null>(new Date());

	const profile = useSelector((state: any) => state.profile);

	const form = useForm({
		mode: 'controlled',
		validateInputOnChange: true,
		initialValues: {

			name: '',
			issuer: '',
			issueDate: new Date,
			certificateId: ''
		},

		validate: {

			name: isNotEmpty("Name is required"),
			issuer: isNotEmpty("Issuer is required"),
			issueDate: isNotEmpty("Issue Date is required"),
			certificateId: isNotEmpty("Certificate ID is required")
		}
	});

	const handleSave = () => {

		form.validate();

		if (!form.isValid()) return;

		let certi = [...profile.certifications];

		certi.push(form.getValues());

		certi[certi.length - 1].issueDate = certi[certi.length - 1].issueDate.toISOString();

		let updatedProfile = {...profile, certifications:certi};

		props.setEdit(false);

		dispatch(changeProfile(updatedProfile));

		successNotification("Success", "Certificate Added Successfully");
		console.log(updatedProfile);

	}

	return (

		<div className="flex flex-col gap-3">

			<div className="text-lg font-semibold">Add Certificate</div>

			<div className="flex flex-col gap-5 [&_input]:!placeholder-congress-blue-500 [&_input]:!border-congress-blue-900">

				<div className="flex gap-10 [&>*]:w-1/2 ">

					<TextInput {...form.getInputProps("name")} withAsterisk className="[&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-200"

						label="Title"
						placeholder="Certificate Title"
					/>

					<div className=" [&_input]:!placeholder-congress-blue-800 [&_input]:!border-congress-blue-900">

						<SelectInput form={form} name="issuer" {...select[1]} />

					</div>

				</div>

				<div className="flex gap-10 [&>*]:w-1/2 ">

					<MonthPickerInput

						{...form.getInputProps("issueDate")}

						withAsterisk
						maxDate={new Date()}
						className="[&_button]:bg-congress-blue-900  [&_button]:border-congress-blue-700"
						label="Issue date"
						placeholder="Pick date"
						// value={issueDate}
						// onChange={setIssueDate}
					/>

					<TextInput {...form.getInputProps("certificateId")} withAsterisk className="[&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-200"

						label="Certificate ID"
						placeholder="Certificate ID"
					/>

				</div>

				<div className="flex gap-5">
					<Button onClick={handleSave} color="green.8" variant="light" >Save</Button>
					<Button onClick={() => props.setEdit(false)} color="red.8" variant="light" >Cancel</Button>

				</div>

			</div>


		</div>
	)
}

export default CertiInput;