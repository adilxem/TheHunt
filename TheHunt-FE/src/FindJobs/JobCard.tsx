import { LuBookmark, LuClock3 } from "react-icons/lu"
import { Divider, Text } from '@mantine/core';
import { Link } from "react-router-dom";


const JobCard = (props: any) => {
	return (
		<Link to="/jobs" className="flex flex-col gap-3 rounded-xl bg-congress-blue-900 p-4 w-72 hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">

			<div className="flex justify-between">

				<div className="flex gap-2 items-center">

					<div className="p-2 bg-congress-blue-800 rounded-md">
						<img className="h-7 " src={`/Icons/${props.company}.png`} alt="" />
					</div>
					<div>

						<div className="font-semibold">{props.jobTitle}</div>
						<div className="text-xs text-congress-blue-300">{props.company} &#x2022; {props.applicants} Applicants </div>

					</div>
				</div>
				<LuBookmark className="text-congress-blue-300 cursor-pointer" />

			</div>

			<div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-congress-blue-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">

				<div>{props.experience}</div>
				<div>{props.jobType}</div>
				<div>{props.location}</div>

			</div>

			<div>

				<Text className="!text-xs text-justify !text-congress-blue-300" lineClamp={3}>
					{props.description}
				</Text>

				<Divider size="xs" className="mt-2" color="congress-blue.7" />

			</div>
			<div className="flex justify-between">

				<div className="font-semibold text-congress-blue-200">
					&#8377;{props.package}
				</div>

				<div className="flex gap-1 items-center text-xs text-congress-blue-400">
					<LuClock3 className="h-4 w-4" />

					{props.postedDaysAgo} days ago
				</div>

			</div>

		</Link>
	)
}

export default JobCard