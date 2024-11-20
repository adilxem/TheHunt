import { ActionIcon } from "@mantine/core";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { TbPencil, TbPlus } from "react-icons/tb";
import { useSelector } from "react-redux";
import CertiCard from "./CertiCard";
import CertiInput from "./CertiInput";

const Certificate = () => {

	const [edit, setEdit] = useState(false);

	const [addCerti, setAddCerti] = useState(false);

	const profile = useSelector((state: any) => state.profile);

	const handleClick = () => {

		setEdit(!edit);
	}



	return <div className="px-3">

		<div className="text-2xl font-semibold mb-5 text-congress-blue-100 flex justify-between">

			Certifications

			<div className="flex gap-2">



				<ActionIcon onClick={() => setAddCerti(true)} color="bright-sun.4" size="xl" variant="subtle">
					<TbPlus className="h-4/5 w-4/5" />
				</ActionIcon>

				<ActionIcon onClick={handleClick} color={edit ? "red.8" : "bright-sun.4"} size="xl" variant="subtle">
					{edit ? <RxCross2 className="h-4/5 w-4/5" /> : <TbPencil className="h-4/5 w-4/5" />}
				</ActionIcon>
			</div>

		</div>
		<div className="flex flex-col gap-8">

			{
				profile?.certifications?.map((certi: any, index: number) => <CertiCard key={index} index={index} edit={edit} {...certi} />)
			}
			{
				addCerti && <CertiInput setEdit={setAddCerti} />
			}
		</div>
	</div>
}

export default Certificate;