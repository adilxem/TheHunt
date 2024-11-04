import { useState } from "react";
import fields from "../../Data/Profile";
import { ActionIcon } from "@mantine/core";
import { FaRegSave, FaBriefcase } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { TbPencil } from "react-icons/tb";
import SelectInput from "./SelectInput";
import { useForm } from '@mantine/form';
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";

const Info = () => {

	const select = fields;

	const dispatch = useDispatch();

	const user = useSelector((state : any) => state.user);

	const profile = useSelector((state : any) => state.profile);

	const [edit, setEdit] = useState(false);

	const handleClick = () => {

		if (!edit) {

			setEdit(true);
			form.setValues({jobTitle: profile.jobTitle, company: profile.company, location: profile.location});
		}
		else {

			setEdit(false);
			
			let updatedProfile = {...profile, ...form.getValues()};

			dispatch(changeProfile(updatedProfile));

			successNotification("Success", "Profile Updated Successfully");
			console.log(updatedProfile);

		}
	}

	const form = useForm({
		mode: 'controlled',
		initialValues: { jobTitle: '', company: '', location: '' }
	});

	return <>

		<div className="text-3xl font-semibold flex justify-between text-congress-blue-50">
			{user.name} 

			<ActionIcon onClick={handleClick} color="bright-sun.4" size="xl" variant="subtle">
				{edit ? <FaRegSave className="h-4/5 w-4/5" /> : <TbPencil className="h-4/5 w-4/5" />}
			</ActionIcon>

		</div>

		{

			edit ? <div className="flex flex-col gap-5 [&_input]:!placeholder-congress-blue-800 [&_input]:!border-congress-blue-900">

				<div className="flex gap-10 [&>*]:w-1/2 ">

					<SelectInput form={form} name="jobTitle" {...select[0]} />
					<SelectInput form={form} name="company" {...select[1]} />

				</div>

				<SelectInput form={form} name="location" {...select[2]} />

			</div> : <><div className="text-xl flex gap-1 items-center">
				<FaBriefcase className="h-4 w-4 text-congress-blue-400" />

				{profile.jobTitle} &bull; {profile.company}
				
			</div>

				<div className="flex gap-1 items-center text-lg text-congress-blue-400">
					<FiMapPin className="h-4 w-4" />

					{profile.location}
					
				</div></>
		}


	</>
}

export default Info;
