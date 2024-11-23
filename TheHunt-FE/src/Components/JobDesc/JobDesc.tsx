import { ActionIcon, Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
// @ts-ignore
import DOMPurify from 'dompurify';
import { card } from "../../Data/JobDescData";
import { timeAgo } from "../../Services/Utilities";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { useEffect, useState } from "react";
import { postJob } from "../../Services/JobService";
import { errorNotification, successNotification } from "../../Services/NotificationService";

const JobDesc = (props: any) => {

	const data = DOMPurify.sanitize(props.description);

	const user = useSelector((state: any) => state.user);

	const [applied, setApplied] = useState(false);

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

	const handleClose = () => {

		postJob({ ...props, jobStatus: "CLOSED" }).then((res) => {

			successNotification("Job Closed", "Job Closed Successfully");
		}).catch((err) => {

			console.log(err);
			errorNotification("Error", err.response.data.errorMessage);
		})
	}


	useEffect(() => {

		if (props.applicants?.filter((applicant: any) => applicant.applicantId === user.id).length > 0) {

			setApplied(true);
		}
		else {
			setApplied(false);
		}
	}, [props]);

	return (
		<div className="w-2/3">

			<div className="flex justify-between">

				<div className="flex gap-2 items-center">

					<div className="p-3 bg-congress-blue-800 rounded-xl">

						{/* <img className="h-14 " src={`/Icons/${props.company}.png`} alt="" /> */}

						<img
							className="h-14"
							src={`/Icons/${props.company}.png`}
							alt=""
							onError={(e) => {
								const target = e.target as HTMLImageElement;
								target.onerror = null; // Prevents looping in case fallback fails
								target.src = "/Avatars/suitcase.png";
							}}
						/>


					</div>
					<div className="flex flex-col gap-1">

						<div className="font-semibold text-2xl">{props.jobTitle}</div>
						<div className="text-lg text-congress-blue-300">{props.company} &#x2022; {timeAgo(props.postTime)} &#x2022; {props.applicants ? props.applicants.length : 0} Applicants </div>

					</div>
				</div>

				<div className="flex flex-col gap-5 items-center">

					{(props.edit || !applied) && <Link to={props.edit ? `/post-job/${props.id}` : `/apply-job/${props.id}`}>

						<Button color="bright-sun.4" size="sm" variant="light" >{props.closed ? "Reopen" : props.edit ? "Edit" : "Apply"} </Button>

						{/* {!props.closed && (
							<Button color="bright-sun.4" size="sm" variant="light">
								{props.edit ? "Edit" : "Apply"}
							</Button>
						)} */}


					</Link>}

					{
						!props.edit && applied && <Button color="green.8" size="sm" variant="light" > Applied </Button>
						// applied && <Button color="green.8" size="sm" variant="light" > Applied </Button>
					}

					{/* {props.edit && !props.closed ? <Button onClick={handleClose} color="red.4" size="sm" variant="light">Close</Button> : profile.savedJobs?.includes(props.id) ? <BsBookmarkFill onClick={handleSaveJob} className="h-5 w-5 cursor-pointer text-bright-sun-400" /> : <BsBookmark onClick={handleSaveJob} className="h-5 w-5 text-congress-blue-300 cursor-pointer hover:text-bright-sun-400" />} */}

					{props.edit && !props.closed ? (
						<Button onClick={handleClose} color="red.4" size="sm" variant="light">
							Close
						</Button>
					) :
						!props.closed && (
							profile.savedJobs?.includes(props.id) ? (
								<BsBookmarkFill
									onClick={handleSaveJob}
									className="h-5 w-5 cursor-pointer text-bright-sun-400"
								/>
							) : (
								<BsBookmark
									onClick={handleSaveJob}
									className="h-5 w-5 text-congress-blue-300 cursor-pointer hover:text-bright-sun-400"
								/>
							)
						)
					}



				</div>

			</div>

			<Divider size="xs" my="xl" color="congress-blue.9" />

			<div className="flex justify-between">

				{
					card.map((item: any, index: number) => <div key={index} className="flex flex-col items-center gap-1">

						<ActionIcon className="!h-12 !w-12" color="bright-sun.4" variant="light" radius="xl" aria-label="Settings">
							<item.icon className="h-4/5 w-4/5" style={{ width: '70%', height: '70%' }} />
						</ActionIcon>

						<div className="text-sm text-congress-blue-300">{item.name}</div>
						<div className="font-semibold">{props ? props[item.id] : "NA"} {item.id == "packageOffered" && <>/ month</>}</div>

					</div>)
				}

			</div>

			<Divider size="xs" my="xl" color="congress-blue.9" />

			<div>
				<div className="text-xl font-semibold mb-5">Required Skills</div>

				<div className="flex flex-wrap gap-2">

					{
						props?.skillsRequired?.map((item: any, index: number) => <ActionIcon key={index} className="!h-fit !w-fit font-medium !text-sm" color="bright-sun.4" variant="light" p="xs" radius="xl" aria-label="Settings">
							{item}
						</ActionIcon>)
					}

				</div>

			</div>

			<Divider size="xs" my="xl" color="congress-blue.9" />

			<div className="[&_h4]:text-xl [&_*]:text-congress-blue-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-congress-blue-200 [&_p]:text-justify" dangerouslySetInnerHTML={{ __html: data }}>

			</div>

			<Divider size="xs" my="xl" color="congress-blue.9" />

			<div>

				<div className="text-xl font-semibold mb-5">About Us</div>

				<div>

					<div className="flex justify-between mb-3">

						<div className="flex gap-2 items-center">

							<div className="p-3 bg-congress-blue-800 rounded-xl">

								{/* <img className="h-8 " src={`/Icons/${props.company}.png`} alt="" /> */}

								<img
									className="h-8"
									src={`/Icons/${props.company}.png`}
									alt=""
									onError={(e) => {
										const target = e.target as HTMLImageElement;
										target.onerror = null; // Prevents looping in case fallback fails
										target.src = "/Avatars/suitcase.png";
									}}
								/>


							</div>
							<div className="flex flex-col">

								<div className="font-medium text-lg">{props.company}</div>
								<div className=" text-congress-blue-300">10K+ Employees</div>

							</div>
						</div>

						<div className="flex flex-col gap-2 items-center">

							<Link to={`/company/${props.company}`}>

								<Button color="bright-sun.4" variant="light" >More About Us</Button>
							</Link>

						</div>


					</div>

					<div className="text-congress-blue-300 text-justify">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas enim sunt dolor, laudantium amet unde veniam labore porro libero vero aut magnam totam cupiditate tempora repellat repudiandae quia voluptas dolore nostrum obcaecati reprehenderit, ipsa doloribus eius voluptatum! Hic, dicta nemo.
					</div>
				</div>

			</div>

		</div>
	)
}

export default JobDesc;