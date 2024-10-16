import { talents } from "../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";

const Talents = () => {
	return (

		<div className="p-5">

			<div className="flex justify-between text-congress-blue-100">

				<div className="font-semibold text-2xl">
					Talents
				</div>

				<div>
					<Sort />
				</div>

			</div>

			<div className="mt-10 flex flex-wrap gap-5 justify-center">

				{
					talents.map((talent, index) =>  <TalentCard key={index}  {...talent}/>)
				}

			</div>


		</div>
	)
}

export default Talents;