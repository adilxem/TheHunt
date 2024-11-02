import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";

const ExpCard = (props: any) => {

	const [edit, setEdit] = useState(false);

	return !edit ? <div>

		<div className="flex flex-col gap-2">

			<div className="flex justify-between">

				<div className="flex gap-2 items-center">

					<div className="p-2 bg-congress-blue-800 rounded-md">
						<img className="h-7 " src={`/Icons/${props.company}.png`} alt="" />
					</div>
					<div>

						<div className="font-semibold">{props.title}</div>
						<div className="text-sm text-congress-blue-300">{props.company} &#x2022; {props.location}</div>

					</div>
				</div>

				<div className="text-sm text-congress-blue-300">
					{props.startDate} - {props.endDate}
				</div>

			</div>

			<div className="text-sm text-congress-blue-300 text-justify">
				{props.description}
			</div>

			{props.edit && <div className="flex gap-5">
				<Button onClick={()=> setEdit(true)} color="bright-sun.4" variant="outline" >Edit</Button>
				<Button color="red.8" variant="light" >Delete</Button>
			</div>}

		</div>
	</div> : <ExpInput setEdit={setEdit}/>
}
export default ExpCard;