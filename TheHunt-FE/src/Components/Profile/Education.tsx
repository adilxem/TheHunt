import { useState } from "react";
import { useSelector } from "react-redux";
import { ActionIcon } from "@mantine/core";
import { TbPencil, TbPlus } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import EduCard from "./EduCard";
import EduInput from "./EduInput";

const Education = () => {

	const [edit, setEdit] = useState(false);

	const profile = useSelector((state: any) => state.profile);

	const [addEdu, setAddEdu] = useState(false);

	const handleClick = () => {

		setEdit(!edit);
	}

	return <div className="px-3 ">

		< div className="text-2xl font-semibold mb-5 text-congress-blue-100 flex justify-between" >

			Education

			< div className="flex gap-2" >

				<ActionIcon onClick={() => setAddEdu(true)} color="bright-sun.4" size="xl" variant="subtle">
					<TbPlus className="h-4/5 w-4/5" />
				</ActionIcon>

				<ActionIcon onClick={handleClick} color={edit ? "red.8" : "bright-sun.4"} size="xl" variant="subtle">
					{edit ? <RxCross2 className="h-4/5 w-4/5" /> : <TbPencil className="h-4/5 w-4/5" />}
				</ActionIcon>
			</div >

		</div >

		<div className="flex flex-col gap-8">

			{
				profile?.educations?.map((edu: any, index: number) => <EduCard key={index} index={index} {...edu} edit={edit} />)
			}
			{addEdu && <EduInput add setEdit={setAddEdu} />}
		</div>

	</div >

}

export default Education;