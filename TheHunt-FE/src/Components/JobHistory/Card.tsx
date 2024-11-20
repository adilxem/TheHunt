import { LuClock3 } from "react-icons/lu"
import { Button, Divider, Text } from '@mantine/core';
import { Link } from "react-router-dom";
import { BsBookmark, BsBookmarkFill, BsCalendar3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { timeAgo } from "../../Services/Utilities";


const Card = (props: any) => {


	const profile = useSelector((state: any) => state.profile);

	const dispatch = useDispatch();

	const handleSaveJob = () => {

		let savedJobs: any = Array.isArray(profile.savedJobs) ? [...profile.savedJobs] : [];

		if (savedJobs?.includes(props.id)) {

			savedJobs = savedJobs?.filter((id: any) => id !== props.id);
		}

		else {

			savedJobs = [...savedJobs, props.id];
		}

		let updatedProfile = { ...profile, savedJobs: savedJobs };
		dispatch(changeProfile(updatedProfile));

		console.log("job saved");

	}



	return (
		<div className="flex flex-col gap-3 rounded-xl bg-congress-blue-900 p-4 w-72 hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">

			<div className="flex justify-between">

				<div className="flex gap-2 items-center">

					<div className="p-2 bg-congress-blue-800 rounded-md">
						<img className="h-7 " src={`/Icons/${props.company}.png`} alt="" />
					</div>
					<div>

						<div className="font-semibold">{props.jobTitle}</div>
						<div className="text-xs text-congress-blue-300">{props.company} &#x2022; {props.applicants ? props.applicants.length : 0} Applicants </div>

					</div>
				</div>
				{profile.savedJobs?.includes(props.id) ? <BsBookmarkFill onClick={handleSaveJob} className="h-5 w-5 cursor-pointer text-bright-sun-400" /> : <BsBookmark onClick={handleSaveJob} className="h-5 w-5 text-congress-blue-300 cursor-pointer hover:text-bright-sun-400" />}

			</div>

			<div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-congress-blue-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">

				<div>{props.experience}</div>
				<div>{props.jobType}</div>
				<div>{props.location}</div>

			</div>

			<div>

				<Text className="!text-xs text-justify !text-congress-blue-300" lineClamp={3}>
					{props.about}
				</Text>

				<Divider size="xs" className="mt-2" color="congress-blue.7" />

			</div>
			<div className="flex justify-between">

				<div className="font-semibold text-congress-blue-200">
					&#8377;{props.packageOffered} PM
				</div>

				<div className="flex gap-1 items-center text-xs text-congress-blue-400">
					<LuClock3 className="h-4 w-4" />

					{props.applied || props.interviewing ? "Applied " : props.offered ? "Interviewed " : "Posted "}

					{timeAgo(props.postTime)}
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

			<Link to={`/jobs/${props.id}`}>

				<Button fullWidth color="bright-sun.4" variant="outline" >View Job</Button>
			</Link>

		</div>
	)
}

export default Card;