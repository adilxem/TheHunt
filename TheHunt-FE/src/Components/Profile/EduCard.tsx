import { Button } from "@mantine/core";
import { useState } from "react";
import { formatDate } from "../../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";
import EduInput from "./EduInput";

const EduCard = (props: any) => {

	const [edit, setEdit] = useState(false);

	const profile = useSelector((state: any) => state.profile);

	const dispatch = useDispatch();

	const handleDelete = () => {

		let edu = [...profile.educations];

		edu.splice(props.index, 1);

		let updatedProfile = {...profile, educations : edu}

		dispatch(changeProfile(updatedProfile));

		successNotification("Success", "Education Deleted Successfully");

		console.log(updatedProfile);
		
	}

	return !edit ? <div>

		<div className="flex flex-col gap-2">

			<div className="flex justify-between">

				<div className="flex gap-2 items-center">

					{/* <div className="p-2 bg-congress-blue-800 rounded-md">
						<img className="h-7 " src={`/Icons/${props.company}.png`} alt="" />
					</div> */}
					<div>

						<div className="font-semibold">{props.course}</div>
						<div className="text-sm text-congress-blue-300">{props.institution} &#x2022; {props.location}</div>

					</div>
				</div>

				<div className="text-sm text-congress-blue-300">
					{formatDate(props.startDate)} - {props.currentlyStudying ? "Present" : formatDate(props.endDate)}
				</div>

			</div>

			{/* <div className="text-sm text-congress-blue-300 text-justify">
				{props.description}
			</div> */}

			{props.edit && <div className="flex gap-5">
				<Button onClick={()=> setEdit(true)} color="bright-sun.4" variant="outline" >Edit</Button>
				<Button onClick={handleDelete} color="red.8" variant="light" >Delete</Button>
			</div>}

		</div>
	</div> : <EduInput {...props} setEdit={setEdit}/>
}
export default EduCard;