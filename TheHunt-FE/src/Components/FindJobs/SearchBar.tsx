import { Divider } from "@mantine/core";
import { dropdownData } from "../../Data/JobsData";
import MultiInput from "./MultiInput";
// import { useState } from "react";

const SearchBar = () => {

	// const [value, setValue] = useState<[number, number]>([3, 99]);        

	return (

		<div className="flex justify-between px-5 py-8 [&_dropdown]:!border-red-500">

			<Divider mr="xs" size="xs" orientation="vertical" color="congress-blue.9" />

			{
				dropdownData.map((item, index) => <>

					<div key={index} className="w-1/5 [&_input]:!placeholder-congress-blue-400 [&_input]:!border-congress-blue-700">

						<MultiInput {...item} />

					</div>

					<Divider mr="xs" size="xs" orientation="vertical" color="congress-blue.9" />

				</>)
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