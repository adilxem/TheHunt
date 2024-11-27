import { useState } from "react";
import fields from "../../Data/Profile";
import { ActionIcon } from "@mantine/core";
import { FiMapPin } from "react-icons/fi";
import { TbPencil } from "react-icons/tb";
import { useForm } from '@mantine/form';
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkSharp } from "react-icons/io5";
import SelectInput from "../Profile/SelectInput";

const Info = () => {

	const select = fields;

	const dispatch = useDispatch();

	const user = useSelector((state: any) => state.user);

	const profile = useSelector((state: any) => state.profile);

	const [edit, setEdit] = useState(false);

	const handleClick = () => {

		if (!edit) {

			setEdit(true);
			form.setValues({ jobTitle: profile.jobTitle, company: profile.company, location: profile.location });
		}
		else {

			setEdit(false);
		}
	}

	const handleSave = () => {

		setEdit(false);

		let updatedProfile = { ...profile, ...form.getValues() };

		dispatch(changeProfile(updatedProfile));

		successNotification("Success", "Profile Updated Successfully");
		console.log(updatedProfile);
	}

	const form = useForm({
		mode: 'controlled',
		initialValues: { jobTitle: '', company: '', location: '' }
	});

	return <>

		<div className="text-3xl font-semibold flex justify-between text-congress-blue-50">

			{/* {user.name} */}

			Goods Bakery

			<div>

				{edit && <ActionIcon onClick={handleSave} color="green.8" size="xl" variant="subtle">
					<IoCheckmarkSharp className="h-4/5 w-4/5" />
				</ActionIcon>}

				<ActionIcon onClick={handleClick} color={edit ? "red.8" : "bright-sun.4"} size="xl" variant="subtle">
					{edit ? <RxCross2 className="h-4/5 w-4/5 font-semibold" /> : <TbPencil className="h-4/5 w-4/5" />}
				</ActionIcon>

			</div>

		</div>

		{

			edit ? <div className="flex flex-col gap-5 [&_input]:!placeholder-congress-blue-500 [&_input]:!border-congress-blue-900">

				<div className="flex gap-10 [&>*]:w-1/2 ">

					{/* <TextInput {...form.getInputProps("jobTitle")} withAsterisk className="[&_input]:bg-congress-blue-950 "

						label="Course"
						placeholder="Course Name"
					/>


					<TextInput {...form.getInputProps("company")} withAsterisk className="[&_input]:bg-congress-blue-950 "

						label="Institution"
						placeholder="Institution Name"
					/> */}

					{/* <SelectInput form={form} name="course" {...select[0]} /> */}
					{/* <SelectInput form={form} name="company" {...select[1]} /> */}

				</div>

				<SelectInput form={form} name="location" {...select[2]} />

			</div> : <>

				{/* <div className="text-xl flex gap-3 items-center">
					<FaBriefcase className="h-4 w-4 text-congress-blue-400" />

					{profile.jobTitle} &bull; {profile.company}

				</div> */}

				<div className="flex gap-3 items-center text-lg text-congress-blue-400">
					<FiMapPin className="h-4 w-4" />

					{/* {profile.location} */}

					Hyderabad

				</div></>
		}


	</>
}

export default Info;
