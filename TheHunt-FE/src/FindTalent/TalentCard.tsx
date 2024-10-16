import { Avatar, Button, Divider, Text } from '@mantine/core';
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";


const TalentCard = (props: any) => {
	return (
		<div className="flex flex-col gap-3 rounded-xl bg-congress-blue-900 p-4 w-96 hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">

			<div className="flex justify-between">

				<div className="flex gap-2 items-center">

					<div className="p-2 bg-congress-blue-800 rounded-full">
						<Avatar className="" size="lg" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png" alt="" />
					</div>

					<div className="flex flex-col gap-3">

						<div className="font-semibold text-lg">{props.name}</div>
						<div className="text-sm text-congress-blue-300">{props.role} &#x2022; {props.company} </div>

					</div>
				</div>
				<FaRegHeart className="text-congress-blue-300 cursor-pointer" />

			</div >

			<div className='flex gap-2'>
				{
					props.topSkills?.map((skills:any, index:any) => <div key={index} className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-congress-blue-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">

					<div>{skills}</div>
					</div>)
				}
			</div>

			<div>

				<Text className="!text-xs text-justify !text-congress-blue-300" lineClamp={3}>
					{props.about}
				</Text>

				<Divider size="xs" className="mt-2" color="congress-blue.7" />

			</div>
			<div className="flex justify-between">

				<div className="font-semibold text-congress-blue-200">
					{props.expectedCtc}
				</div>

				<div className="flex gap-1 items-center text-xs text-congress-blue-400">
					<FiMapPin className="h-4 w-4" />

					{props.location}
				</div>

			</div>

			<Divider size="xs" className="" color="congress-blue.7" />

			<div className="flex [&>*]:w-1/2 [&>*]:p-1">
				<Link to="/talent-profile">

					<Button color="bright-sun.4" variant="outline" fullWidth>Profile</Button>

				</Link>

				<div>
					<Button color="bright-sun.4" variant="light" fullWidth>Message</Button>
				</div>
			</div>

		</div>
	)
}

export default TalentCard;