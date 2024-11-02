import { LuClock3 } from "react-icons/lu"
import { Button, Divider, Text } from '@mantine/core';
import { Link } from "react-router-dom";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";


const Card = (props: any) => {
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
				{props.saved?<IoBookmark className="h-5 w-5 text-bright-sun-400 cursor-pointer" />:<IoBookmarkOutline className="h-5 w-5 text-bright-sun-400 cursor-pointer" />}

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

					{props.applied || props.interviewing?"Applied ":props.offered?"Interviewed ":"Posted "}

					{props.postedDaysAgo} days ago
				</div>

			</div>

			{
				(props.offered || props.interviewing) && <Divider size="xs" className="" color="congress-blue.7" />
			}

			{
				props.offered && <div className="flex gap-2">
					<Button color="bright-sun.4" variant="outline" fullWidth>Accept</Button>
					
					<Button color="bright-sun.4" variant="light" fullWidth>Reject</Button>
				</div>
			}

			{
				props.interviewing && <div className='flex gap-2 text-congress-blue-200 text-sm items-center'>

				<BsCalendar3 className='text-bright-sun-400 h-5 w-5' /> October 20, 2024 &bull; <span className="text-congress-blue-400"> 10:00 AM</span>

			</div>
			}

		</Link>
	)
}

export default Card;