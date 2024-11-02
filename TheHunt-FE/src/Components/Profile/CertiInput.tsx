import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import fields from "../../Data/Profile";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";

const CertiInput = (props: any) => {

	const select = fields;

	const [issueDate, setIssueDate] = useState<Date | null>(new Date());

	return (

		<div className="flex flex-col gap-3">

			<div className="text-lg font-semibold">Add Certificate</div>

			<div className="flex flex-col gap-5 [&_input]:!placeholder-congress-blue-500 [&_input]:!border-congress-blue-900">

				<div className="flex gap-10 [&>*]:w-1/2 ">

					<TextInput withAsterisk className="[&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-200"

						label="Title"
						placeholder="Certificate Title"
					/>

					<div className=" [&_input]:!placeholder-congress-blue-800 [&_input]:!border-congress-blue-900">

						<SelectInput {...select[1]} />

					</div>

				</div>

				<div className="flex gap-10 [&>*]:w-1/2 ">

					<MonthPickerInput
						withAsterisk
						maxDate={new Date()}
						className="[&_button]:bg-congress-blue-900  [&_button]:border-congress-blue-700"
						label="Issue date"
						placeholder="Pick date"
						value={issueDate}
						onChange={setIssueDate}
					/>

					<TextInput withAsterisk className="[&_input]:bg-congress-blue-900 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-200"

						label="Certificate ID"
						placeholder="Certificate ID"
					/>

				</div>

				<div className="flex gap-5">
					<Button onClick={() => props.setEdit(false)} color="bright-sun.4" variant="outline" >Save</Button>
					<Button onClick={() => props.setEdit(false)} color="red.8" variant="light" >Cancel</Button>

				</div>

			</div>


		</div>
	)
}

export default CertiInput;