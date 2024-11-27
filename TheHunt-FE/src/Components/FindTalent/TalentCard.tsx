import { Avatar, Button, Divider, Modal, Text } from '@mantine/core';
import { FiMapPin } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BsCalendar3 } from 'react-icons/bs';
import { useDisclosure } from '@mantine/hooks';
import { DateInput, TimeInput } from '@mantine/dates';
import { useEffect, useRef, useState } from 'react';
import { getProfile } from '../../Services/ProfileService';
import { changeAppStatus } from '../../Services/JobService';
import { errorNotification, successNotification } from '../../Services/NotificationService';
import { formatInterviewTime, openBase64PDF } from '../../Services/Utilities';




const TalentCard = (props: any) => {

	const { id } = useParams();

	const ref = useRef<HTMLInputElement>(null);

	const [opened, { open, close }] = useDisclosure(false);

	const [app, { open: openApp, close: closeApp }] = useDisclosure(false);

	const [date, setDate] = useState<Date | null>(null);

	const [time, setTime] = useState<any>(null);

	const [profile, setProfile] = useState<any>({});

	useEffect(() => {

		if (props.applicantId) getProfile(props.applicantId).then((res) => {

			setProfile(res);
		}).catch((err) => {

			console.log(err);

		})

		else setProfile(props);
	}, [props])


	const handleOffer = (status: string) => {

		let interview: any = { id, applicantId: profile?.id, applicationStatus: status };

		if (status == "INTERVIEWING") {

			const [hours, minutes] = time.split(":").map(Number);
			date?.setHours(hours, minutes);
			interview = {...interview, interviewTime: date}

			console.log(date);
		}

		changeAppStatus(interview).then((res) => {

			if(status == 'INTERVIEWING') successNotification("Interview Scheduled", "Interview Scheduled Successfully");

			else if (status == "OFFERED") successNotification("Offered", "Offered Sent Successfully");

			else successNotification("Rejected", "Candidate Rejected Status Updated");

			window.location.reload();

		}).catch((err) => {

			console.log(err);

			errorNotification("Error", err.response.data.errorMessage);
		})

	}



	return (
		<div className="flex flex-col gap-3 rounded-xl bg-congress-blue-900 p-4 w-96 hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">

			<div className="flex justify-between">

				<div className="flex gap-2 items-center">

					<div className="p-2 bg-congress-blue-800 rounded-full">

						{/* <Avatar className="" size="lg" src={profile?.picture ? `data : image/jpeg; base64, ${profile?.picture}` : "/Avatars/avatar1.png"} alt="" /> */}

						<Avatar
						// className="!h-48 !w-48 border-congress-blue-950 border-8 rounded-full"
						src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : "/Avatars/avatar1.png"}
						alt="user"
						onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
							const target = e.target as HTMLImageElement;
							target.src = "/Avatars/avatar1.png"; 
						}}
					/>
					</div>

					<div className="flex flex-col ">

						<div className="font-semibold text-lg">{props.name}</div>
						<div className="text-sm text-congress-blue-300">{profile?.jobTitle} &#x2022; {profile?.company} </div>

					</div>
				</div>
				{/* <FaRegHeart className="text-congress-blue-300 cursor-pointer" /> */}

			</div >

			<div className='flex gap-2'>
				{
					profile?.skills?.map((skills: any, index: any) => index < 5 && <div key={index} className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-congress-blue-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">

						<div>{skills}</div>
					</div>)
				}
			</div>

			<div>

				<Text className="!text-xs text-justify !text-congress-blue-300" lineClamp={2}>
					{profile.about}
				</Text>

			</div>

			<Divider size="xs" className="mt-2" color="congress-blue.7" />

			{
				props.invited ? <div className='flex gap-2 text-congress-blue-200 text-sm items-center'>

					<BsCalendar3 className='' />Interview: {formatInterviewTime(props.interviewTime)}

				</div> :

					<div className="flex justify-between">

						{/* <div className="font-semibold text-congress-blue-200">
							{props.expectedCtc}
							23 LPA
						</div> */}

						<div className="flex gap-1 items-center text-xs text-congress-blue-400">
							<FiMapPin className="h-4 w-4" />

							{profile?.location}
						</div>

					</div>

			}

			<Divider size="xs" className="" color="congress-blue.7" />

			<div className="flex [&>*]:w-1/2 [&>*]:p-1">

				{

					!props.invited && <>
						<Link to={`/talent-profile/${profile?.id}`}>

							<Button color="bright-sun.4" variant="outline" fullWidth>Profile</Button>

						</Link>

						<div>
							{props.posted ? <Button onClick={open} rightSection={<BsCalendar3 className='h-4 w-4' />} color="bright-sun.4" variant="light" fullWidth>Schedule</Button> : <Button color="bright-sun.4" variant="light" fullWidth>Message</Button>}
						</div>

					</>
				}

				{

					props.invited && <>

						<div>
							<Button
								onClick={() => handleOffer('OFFERED')}
								color="bright-sun.4" variant="outline" fullWidth>Accept</Button>
						</div>


						<div>
							<Button
								onClick={() => handleOffer('REJECTED')}
								color="bright-sun.4" variant="light" fullWidth>Reject</Button>
						</div>
					</>
				}

			</div>

			{(props.invited || props.posted) && <Button onClick={openApp} color="bright-sun.4" variant="filled" fullWidth autoContrast>View Application</Button>}

			<Modal className='[&_section]:bg-congress-blue-900 [&_header]:bg-congress-blue-900 [&_header>button]:hover:bg-congress-blue-900 [&_input]:bg-congress-blue-950 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-800' opened={opened} onClose={close} title="Schedule Interview" centered>

				<div className='flex flex-col gap-4'>
					<DateInput
						value={date}
						minDate={new Date()}
						onChange={setDate}
						label="Date"
						placeholder="Schedule Interview Date"
					/>

					<TimeInput

						value={time}
						onChange={(event) => setTime(event.currentTarget.value)}
						label="Time" ref={ref} onClick={() => ref.current?.showPicker()} />

					<Button onClick={() => handleOffer("INTERVIEWING")} color="bright-sun.4" variant="light" fullWidth>Schedule</Button>
				</div>
			</Modal>



			<Modal className='[&_section]:bg-congress-blue-900 [&_header]:bg-congress-blue-900 [&_header>button]:hover:bg-congress-blue-900 [&_input]:bg-congress-blue-950 [&_input]:border-congress-blue-800 [&_input]:placeholder-congress-blue-800' opened={app} onClose={closeApp} title="Applicant Details" centered>

				<div className='flex flex-col gap-4'>

					<div>
						Email: &emsp; <a href={`mailto:${props.email}`} className="text-bright-sun-400 hover:underline cursor-pointer text-center">{props.email}</a>
					</div>

					<div>
						Phone: &emsp; <a className="text-bright-sun-400 hover:underline cursor-pointer text-center">{props.phone}</a>
					</div>

					<div>
						Resume: &emsp; <span className="text-bright-sun-400 hover:underline cursor-pointer text-center" onClick={() => openBase64PDF(props.resume)} >{props.name}</span>
					</div>

					<div>
						Cover Letter: &emsp; <div className="text-bright-sun-400" >{props.coverLetter}</div>
					</div>

				</div>
			</Modal>
		</div>
	)
}

export default TalentCard;