import { ActionIcon, TagsInput } from "@mantine/core";
import { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbPencil } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { successNotification } from "../../Services/NotificationService";
import { changeProfile } from "../../Slices/ProfileSlice";

const Skills = () => {

	const dispatch = useDispatch();

	const profile = useSelector((state: any) => state.profile);

	const [skills, setSkills] = useState<string[]>([]);

	const [edit, setEdit] = useState(false);

	const handleClick = () => {

		if (!edit) {

			setEdit(true);
			setSkills(profile.skills);
		}
		else {

			setEdit(false);
		}
	}

	const handleSave = () => {

		setEdit(false);

		let updatedProfile = { ...profile, skills : skills };

		dispatch(changeProfile(updatedProfile));

		successNotification("Success", "Skills Updated Successfully");
		console.log(updatedProfile);
	}

	return <div>

		<div className="px-3">
			<div className="text-2xl font-semibold mb-3 text-congress-blue-100 flex justify-between">

				Skills

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
				edit ? <div className="[&_div]:bg-congress-blue-950 [&_span]:text-bright-sun-400 [&_span]:bg-congress-blue-900  [&_div]:!border-congress-blue-950 [&_*]:!placeholder-congress-blue-300 [&_span]:text-sm">

					<TagsInput
						value={skills} onChange={setSkills}
						withAsterisk placeholder="+ Add skills" splitChars={[',', ' ', '|']} clearable acceptValueOnBlur />

				</div> : <div className="flex flex-wrap gap-2">

					{
						profile?.skills?.map((skill: any, index: number) => <div key={index} className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1">
							{skill}
						</div>)
					}

				</div>
			}


		</div>

	</div>

}

export default Skills;