import { ActionIcon, Button, Divider } from "@mantine/core";
import { LuBookmark } from "react-icons/lu";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";
// @ts-ignore
import DOMPurify from 'dompurify';

const JobDesc = (props:any) => {

	const data = DOMPurify.sanitize(desc);

	return (
		<div className="w-2/3">

			<div className="flex justify-between">

				<div className="flex gap-2 items-center">

					<div className="p-3 bg-congress-blue-800 rounded-xl">
						<img className="h-14 " src={`/Icons/Google.png`} alt="" />
					</div>
					<div className="flex flex-col gap-1">

						<div className="font-semibold text-2xl">Software Engineer</div>
						<div className="text-lg text-congress-blue-300">Google &#x2022; 3 days ago &#x2022; 48 Applicants </div>

					</div>
				</div>

				<div className="flex flex-col gap-3 items-center">

					<Link to="/apply-job">

						<Button color="bright-sun.4" size="sm" variant="light" >{props.edit?"Edit":"Apply"} </Button>
					</Link>

					{props.edit?<Button color="red.4" size="sm" variant="outline">Delete</Button>:<LuBookmark className="text-bright-sun-400 cursor-pointer" />}

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
						<div className="font-semibold">{item.value}</div>

					</div>)
				}

			</div>

			<Divider size="xs" my="xl" color="congress-blue.9" />

			<div>
				<div className="text-xl font-semibold mb-5">Required Skills</div>

				<div className="flex flex-wrap gap-2">

					{
						skills.map((item, index) => <ActionIcon key={index} className="!h-fit !w-fit font-medium !text-sm" color="bright-sun.4" variant="light" p="xs" radius="xl" aria-label="Settings">
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
								<img className="h-8 " src={`/Icons/Google.png`} alt="" />
							</div>
							<div className="flex flex-col">

								<div className="font-medium text-lg">Google</div>
								<div className=" text-congress-blue-300">10K+ Employees</div>

							</div>
						</div>

						<div className="flex flex-col gap-2 items-center">

							<Link to="/company">

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