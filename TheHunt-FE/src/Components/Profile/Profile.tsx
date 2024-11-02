import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import { useState } from "react";
import { FaBriefcase, FaRegSave } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { TbPencil, TbPlus } from "react-icons/tb";
import SelectInput from "./SelectInput";
import fields from "../../Data/Profile";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { profile } from "../../Data/TalentData";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";

// const Profile = (props:any) => {
const Profile = () => {

	const [skills, setSkills] = useState(['React', 'Spring Boot', 'Java', 'Python', 'Node.js', 'MongoDB', 'Express', 'Django', 'PostgreSQL']);

	const [about, setAbout] = useState('As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.');

	const select = fields;

	const [edit, setEdit] = useState([false, false, false, false, false]);

	const [addExp, setAddExp] = useState(false);

	const [addCerti, setAddCerti] = useState(false);

	const handleEdit = (index: any) => {

		const newEdit = [...edit];
		newEdit[index] = !newEdit[index];
		setEdit(newEdit);
	}


	return (

		<div className="w-4/5 mx-auto">

			<div className="relative">
				<img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
				<img className="h-48 w-48 rounded-full -bottom-1/4 absolute left-3 border-congress-blue-950 border-8" src="/Avatars/avatar2.png" alt="" />
			</div>

			<div className="px-3 py-3 mt-16 ">

				<div className="text-3xl font-semibold flex justify-between text-congress-blue-50">
					{/* {props.name} */}
					Meow

					<ActionIcon onClick={() => handleEdit(0)} color="bright-sun.4" size="xl" variant="subtle">
						{edit[0] ? <FaRegSave className="h-4/5 w-4/5" /> : <TbPencil className="h-4/5 w-4/5" />}
					</ActionIcon>

				</div>

				{

					edit[0] ? <div className="flex flex-col gap-5 [&_input]:!placeholder-congress-blue-800 [&_input]:!border-congress-blue-900">

						<div className="flex gap-10 [&>*]:w-1/2 ">

							<SelectInput {...select[0]} />
							<SelectInput {...select[1]} />

						</div>

						<SelectInput {...select[2]} />

					</div> : <><div className="text-xl flex gap-1 items-center">
						<FaBriefcase className="h-4 w-4 text-congress-blue-400" />
						{/* {props.role} &bull; {props.company} */}
						SDE &bull; MeowComp
					</div>

						<div className="flex gap-1 items-center text-lg text-congress-blue-400">
							<FiMapPin className="h-4 w-4" />

							{/* {props.location} */}
							Mumbai, India
						</div></>
				}





			</div>

			<Divider size="xs" mx="xs" my="xl" color="congress-blue.7" />

			<div className="px-3">
				<div className="text-2xl font-semibold mb-3 text-congress-blue-100 flex justify-between">
					About

					<ActionIcon onClick={() => handleEdit(1)} color="bright-sun.4" size="xl" variant="subtle">
						{edit[1] ? <FaRegSave className="h-4/5 w-4/5" /> : <TbPencil className="h-4/5 w-4/5" />}
					</ActionIcon>
				</div>

				{
					edit[1] ? <Textarea autosize minRows={3}
						className="[&_textarea]:bg-congress-blue-900 [&_textarea]:border-congress-blue-900 [&_textarea]:placeholder-congress-blue-300"
						placeholder="write something about yourself..."
						value={about}
						onChange={(event) => setAbout(event.currentTarget.value)}
					/> : <div className="text-sm text-congress-blue-300 text-justify">
						{about}
					</div>
				}




			</div>

			<Divider my="xl" mx="xs" color="congress-blue.7" />

			<div className="px-3">
				<div className="text-2xl font-semibold mb-3 text-congress-blue-100 flex justify-between">

					Skills

					<ActionIcon onClick={() => handleEdit(2)} color="bright-sun.4" size="xl" variant="subtle">
						{edit[2] ? <FaRegSave className="h-4/5 w-4/5" /> : <TbPencil className="h-4/5 w-4/5" />}
					</ActionIcon>
				</div>

				{
					edit[2] ? <div className="[&_div]:bg-congress-blue-950 [&_span]:text-bright-sun-400 [&_span]:bg-congress-blue-900  [&_div]:!border-congress-blue-950 [&_*]:!placeholder-congress-blue-300 [&_span]:text-sm">

						<TagsInput
							value={skills} onChange={setSkills}
							withAsterisk placeholder="+ Add skills" splitChars={[',', ' ', '|']} clearable acceptValueOnBlur />

					</div> : <div className="flex flex-wrap gap-2">

						{
							skills.map((skill: any, index: any) => <div key={index} className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1">
								{skill}
							</div>)
						}

					</div>
				}




			</div>

			<Divider my="xl" mx="xs" color="congress-blue.7" />

			<div className="px-3 ">
				<div className="text-2xl font-semibold mb-5 text-congress-blue-100 flex justify-between">
					Experience

					<div className="flex gap-2">

					

					<ActionIcon onClick={() => setAddExp(true)} color="bright-sun.4" size="xl" variant="subtle">
						<TbPlus className="h-4/5 w-4/5" />
					</ActionIcon>

					<ActionIcon onClick={() => handleEdit(3)} color="bright-sun.4" size="xl" variant="subtle">
						{edit[3] ? <FaRegSave className="h-4/5 w-4/5" /> : <TbPencil className="h-4/5 w-4/5" />}
					</ActionIcon>
					</div>

				</div>

				<div className="flex flex-col gap-8">

					{
						profile.experience.map((exp: any, index: any) => <ExpCard key={index} {...exp} edit={edit[3]} />)
					}
					{addExp && <ExpInput add setEdit={setAddExp}/>}
				</div>
			</div>

			<Divider my="xl" mx="xs" color="congress-blue.7" />

			<div className="px-3">
				<div className="text-2xl font-semibold mb-5 text-congress-blue-100 flex justify-between">
					Certifications

					<div className="flex gap-2">

					

					<ActionIcon onClick={() => setAddCerti(true)} color="bright-sun.4" size="xl" variant="subtle">
						<TbPlus className="h-4/5 w-4/5" />
					</ActionIcon>

					<ActionIcon onClick={() => handleEdit(4)} color="bright-sun.4" size="xl" variant="subtle">
						{edit[4] ? <FaRegSave className="h-4/5 w-4/5" /> : <TbPencil className="h-4/5 w-4/5" />}
					</ActionIcon>
					</div>

				</div>
				<div className="flex flex-col gap-8">

					{
						profile.certifications.map((certi: any, index: any) => <CertiCard key={index} edit={edit[4]} {...certi} />)
					}
					{
						addCerti && <CertiInput setEdit={setAddCerti}/>
					}
				</div>
			</div>
		</div>
	)
}

export default Profile;