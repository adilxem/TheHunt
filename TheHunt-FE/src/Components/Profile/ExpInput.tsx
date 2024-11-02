import { Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../../Data/Profile";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = (props: any) => {

	const select = fields;

	const [checked, setChecked] = useState(false);

	const [startDate, setStartDate] = useState<Date | null>(new Date());
	const [endDate, setEndDate] = useState<Date | null>(new Date());

	const [desc, setDesc] = useState("As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process.");

	return (

		<div className="flex flex-col gap-3">
			<div className="text-lg font-semibold" >{props.add ? "Add " : "Edit "} Experience</div>
			<div className="flex flex-col gap-5 [&_input]:!placeholder-congress-blue-800 [&_input]:!border-congress-blue-900">

				<div className="flex gap-10 [&>*]:w-1/2 ">

					<SelectInput {...select[0]} />
					<SelectInput {...select[1]} />

				</div>

				<SelectInput {...select[2]} />

				<Textarea withAsterisk autosize minRows={3}
					className="[&_textarea]:bg-congress-blue-900 [&_textarea]:border-congress-blue-700 [&_textarea]:placeholder-congress-blue-300"
					label="Summary"
					placeholder="Job Summary..."
					value={desc}
					onChange={(event) => setDesc(event.currentTarget.value)}
				/>

				<div className="flex gap-10 [&>*]:w-1/2 ">
					<MonthPickerInput
						withAsterisk
						maxDate={endDate || undefined}
						className="[&_button]:bg-congress-blue-900  [&_button]:border-congress-blue-700"
						label="Start date"
						placeholder="Pick date"
						value={startDate}
						onChange={setStartDate}
					/>

					<MonthPickerInput

						disabled={checked}
						withAsterisk
						minDate={startDate || undefined}
						maxDate={new Date()}
						className="[&_button]:bg-congress-blue-900  [&_button]:border-congress-blue-700"
						label="End date"
						placeholder="Pick date"
						value={endDate}
						onChange={setEndDate}
					/>

				</div>

				<Checkbox autoContrast className="[&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800"

					checked={checked}
					onChange={(event) => setChecked(event.currentTarget.checked)}

					label="Currently working here"
				/>

				<div className="flex gap-5">
					<Button onClick={() => props.setEdit(false)} color="bright-sun.4" variant="outline" >Save</Button>
					<Button onClick={() => props.setEdit(false)} color="red.8" variant="light" >Cancel</Button>
				</div>

			</div>
		</div>
	)
}

export default ExpInput;