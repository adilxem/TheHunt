import { useState } from "react";
import { useSelector } from "react-redux";
import ExpInput from "./ExpInput";
import { ActionIcon } from "@mantine/core";
import { TbPencil, TbPlus } from "react-icons/tb";
import ExpCard from "./ExpCard";
import { RxCross2 } from "react-icons/rx";

const Experience = () => {

	const [edit, setEdit] = useState(false);

	const profile = useSelector((state: any) => state.profile);

	const [addExp, setAddExp] = useState(false);

	const handleClick = () => {

		setEdit(!edit);
	}

	return <div className="px-3 ">

		< div className="text-2xl font-semibold mb-5 text-congress-blue-100 flex justify-between" >
			Experience

			< div className="flex gap-2" >

				<ActionIcon onClick={() => setAddExp(true)} color="bright-sun.4" size="xl" variant="subtle">
					<TbPlus className="h-4/5 w-4/5" />
				</ActionIcon>

				<ActionIcon onClick={handleClick} color={edit ? "red.8" : "bright-sun.4"} size="xl" variant="subtle">
					{edit ? <RxCross2 className="h-4/5 w-4/5" /> : <TbPencil className="h-4/5 w-4/5" />}
				</ActionIcon>
			</div >

		</div >

		<div className="flex flex-col gap-8">

			{
				profile?.experiences?.map((exp: any, index: number) => <ExpCard key={index} index={index} {...exp} edit={edit} />)
			}
			{addExp && <ExpInput add setEdit={setAddExp} />}
		</div>

	</div >

}

export default Experience;