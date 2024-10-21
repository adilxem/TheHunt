import { LuExternalLink } from "react-icons/lu";

const CompanyCard = (props:any) => {

	return (
		<div>

			<div className="flex justify-between bg-congress-blue-900 items-center p-2 rounded-lg">

				<div className="flex gap-2 items-center">

					<div className="p-2 bg-congress-blue-800 rounded-md">
						<img className="h-7 " src={`/Icons/${props.name}.png`} alt="" />
					</div>
					<div>

						<div className="font-semibold">{props.name}</div>
						<div className="text-xs text-congress-blue-300">{props.employees} Employees</div>

					</div>
				</div>
				<LuExternalLink className='h-5 w-5 text-bright-sun-400 '/>

			</div>

		</div>
	)
}

export default CompanyCard;