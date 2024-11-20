import { ActionIcon, Textarea } from "@mantine/core";
import { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbPencil } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { successNotification } from "../../Services/NotificationService";
import { changeProfile } from "../../Slices/ProfileSlice";

const About = () => {

	const dispatch = useDispatch();

	const profile = useSelector((state: any) => state.profile);

	const [about, setAbout] = useState("");

	const [edit, setEdit] = useState(false);

	const handleClick = () => {

		if (!edit) {

			setEdit(true);
			setAbout(profile.about);
		}
		else {

			setEdit(false);
		}
	}

	const handleSave = () => {

		setEdit(false);

		let updatedProfile = { ...profile, about : about };

		dispatch(changeProfile(updatedProfile));

		successNotification("Success", "About Updated Successfully");
		console.log(updatedProfile);
	}

	return <div>

		<div className="px-3">
			<div className="text-2xl font-semibold mb-3 text-congress-blue-100 flex justify-between">
				About

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
				edit ? <Textarea autosize minRows={3}
					className="[&_textarea]:bg-congress-blue-900 [&_textarea]:border-congress-blue-900 [&_textarea]:placeholder-congress-blue-300"
					placeholder="write something about yourself..."
					value={about}
					onChange={(event) => setAbout(event.currentTarget.value)}
				/> : <div className="text-sm text-congress-blue-300 text-justify">
					{profile?.about}
				</div>
			}




		</div>

	</div>

}

export default About;