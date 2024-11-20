import { useEffect, useState } from "react";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import { getAllProfiles } from "../../Services/ProfileService";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../Slices/FilterSlice";

const Talents = () => {

	const dispatch = useDispatch();

	const sort = useSelector((state: any) => state.sort);

	const [talents, setTalents] = useState<any>([]);

	const filter = useSelector((state: any) => state.filter);

	const [filteredTalents, setFilteredTalents] = useState<any>([]);

	useEffect(() => {

		dispatch(resetFilter());

		getAllProfiles().then((res) => {

			setTalents(res);

		}).catch((err) => {
			console.log(err);
			
		})
	}, [])


	useEffect(() => {

		if (sort == "Most Recent") {

			setTalents([...talents].sort((a: any, b: any) => new Date(b.postTime).getTime() - new Date(a.postTime).getTime()));	
		}

		else if (sort == "Stipend Expectation: Low to High") {

			setTalents([...talents].sort((a: any, b: any) => a.packageOffered - b.packageOffered));
		}

		else if (sort == "Stipend Expectation: High to Low") {

			setTalents([...talents].sort((a: any, b: any) => b.packageOffered - a.packageOffered));
		}

	}, [sort]);



	useEffect(() => {

		let filterTalent = talents;

		console.log(filter);
		
		if (filter.name) {
			
			filterTalent = filterTalent.filter((talent: any) => 
				
				talent.name && talent.name.toLowerCase().includes(filter.name.toLowerCase()));
		}

		if (filter["Job Title"] && filter["Job Title"].length > 0) {

			filterTalent = filterTalent.filter((talent: any) => 
				filter["Job Title"]?.some((title: any) => talent.jobTitle.toLowerCase().includes(title.toLowerCase())));
		}

		if (filter.Location && filter.Location.length > 0) {

			filterTalent = filterTalent.filter((talent: any) => 
				filter.Location?.some((location: any) => talent.location.toLowerCase().includes(location.toLowerCase())));
		}
		
		if (filter.Skills && filter.Skills.length > 0) {

			filterTalent = filterTalent.filter((talent: any) => 
				filter.Skills?.some((skill: any) => talent.skills?.some((talentSkill : any) => talentSkill.toLowerCase().includes(skill.toLowerCase())))); 
		}

		setFilteredTalents(filterTalent);

	}, [filter, talents]);


	return (

		<div className="p-5">

			<div className="flex justify-between text-congress-blue-100">

				<div className="font-semibold text-2xl">
					Talents
				</div>

				<div>
					{/* <Sort /> */}
				</div>

			</div>

			<div className="mt-10 flex flex-wrap gap-5 justify-start">

				{
					filteredTalents.length? filteredTalents.map((talent: any, index: any) =>  <TalentCard key={index}  {...talent}/>) : <div className="text-xl font-semibold">No Talents Found</div>
				}

			</div>


		</div>
	)
}

export default Talents;