import { ActionIcon } from "@mantine/core";
import { TbTrash } from "react-icons/tb";
import { formatDate } from "../../Services/Utilities";

const CertiCard = (props:any) => {

	return (
			
			<div className="flex justify-between">

				<div className="flex gap-2 items-center">

					<div className="p-2 bg-congress-blue-800 rounded-md">
						<img className="h-7 " src={`/Icons/${props.issuer}.png`} alt="" />
					</div>
					<div>

						<div className="font-semibold">{props.name}</div>
						<div className="text-sm text-congress-blue-300">{props.issuer}</div>

					</div>
				</div>

				<div className="flex items-center gap-2">

					<div className="flex flex-col items-end">

						<div className="text-sm text-congress-blue-300">{formatDate(props.issueDate)}</div>
						<div className="text-sm text-congress-blue-300">ID: {props.certificateId}</div>
					</div>

					{props.edit && <ActionIcon color="red.8" size="lg" variant="subtle">
						<TbTrash className="h-4/5 w-4/5" />
					</ActionIcon>}
				</div>
				

			</div>
	)
}

export default CertiCard;