import { Divider, Input } from "@mantine/core";
// import { useState } from "react";
import MultiInput from "../FindJobs/MultiInput";
import { searchFields } from "../../Data/TalentData";
import { FaRegCircleUser } from "react-icons/fa6";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../Slices/FilterSlice";

const SearchBar = () => {

	// const [value, setValue] = useState<[number, number]>([3, 99]);

	const dispatch = useDispatch();

	const [name, setName] = useState('');

	const handleChange = (name: any, event: any) => {

		if (name == "exp") dispatch(updateFilter({ exp: event }));

		else {

			setName(event.target.value);
			dispatch(updateFilter({ name: event.target.value }));
		}
	}

	return (

		<div className="flex px-5 py-8 justify-between items-center !text-congress-blue-100">

			{/* <Divider mr="xs" size="xs" orientation="vertical" color="congress-blue.9" /> */}

			<div className="flex items-center">
				<div className="text-bright-sun-400 bg-congress-blue-900 rounded-full p-1 mr-2"><FaRegCircleUser size={20} /></div>

				<Input defaultValue={name} onChange={(e) => handleChange("name", e)} className="[&_input]:!placeholder-congress-blue-300" variant="unstyled" placeholder="Talent Name" />

			</div>

			{/* <Divider mr="xs" size="xs" orientation="vertical" color="congress-blue.9" /> */}

			{
				searchFields.map((item, index) => {

					return <React.Fragment key={index}>
						
						<Divider mr="xs" size="xs" orientation="vertical" color="congress-blue.9" />

						<div key={index} className="w-1/5 [&_input]:!placeholder-congress-blue-400 [&_input]:!border-congress-blue-700">

							<MultiInput {...item} />

						</div>


					</React.Fragment>
				})
			}

			{/* <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-11">

				<div className="flex justify-between text-sm">

					<div>Salary</div>
					<div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>

				</div>

				<RangeSlider color="bright-sun.4" size="xs" value={value} labelTransitionProps={{
					transition: 'skew-down',
					duration: 150,
					timingFunction: 'linear',
				}} onChange={setValue} />
			</div> */}

		</div>
	)
}

export default SearchBar;