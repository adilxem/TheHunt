import { Button, TagsInput } from "@mantine/core";
import { fields } from "../../Data/PostJob";
import SelectInput from "./SelectInput";
import TextEditor from "./TextEditor";

const PostJob = () => {

	const select = fields;

	return (

		<div className="w-4/5 mx-auto">

			<div className="text-2xl font-semibold mt-4 mb-5">Post a Job</div>	

			<div className="flex flex-col gap-5 [&_input]:!placeholder-congress-blue-800 [&_input]:!border-congress-blue-900">

				<div className="flex gap-10 [&>*]:w-1/2 ">

					<SelectInput {...select[0]}/>
					<SelectInput {...select[1]}/>

				</div>

				<div className="flex gap-10 [&>*]:w-1/2">

					<SelectInput {...select[2]}/>
					<SelectInput {...select[3]}/>

				</div>

				<div className="flex gap-10 [&>*]:w-1/2">

					<SelectInput {...select[4]}/>
					<SelectInput {...select[5]}/>

				</div>

				<div className="[&_*]:bg-congress-blue-950 [&_*]:!border-congress-blue-900">

					<TagsInput withAsterisk label="Skills" placeholder="Enter skills" splitChars={[',', ' ', '|']} clearable acceptValueOnBlur />

				</div>


				<div className="[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-congress-blue-400/40 [&_button]:!bg-congress-blue-900 [&_*]:!border-congress-blue-900">
					<div className="text-sm font-medium ">
						Add Job Description
					</div>

					<TextEditor />
				</div>

				<div className="flex gap-4">
					<Button color="bright-sun.4" variant="light" >Publish Job</Button>

					<Button color="bright-sun.4" variant="outline" >Save as Draft</Button>
				</div>

			</div>

		</div>
	)
}

export default PostJob;