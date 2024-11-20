import { useEffect, useState } from "react"
// import { jobList } from "../../Data/JobsData"
import JobCard from "./JobCard"
import Sort from "./Sort"
import { getAllJobs } from "../../Services/JobService"
import { useDispatch, useSelector } from "react-redux"
import { resetFilter } from "../../Slices/FilterSlice"
import { resetSort } from "../../Slices/SortSlice"

const Jobs = () => {

	const dispatch = useDispatch();

	const [jobList, setJobList] = useState([{}]);

	const filter = useSelector((state: any) => state.filter);

	const sort = useSelector((state: any) => state.sort);

	const [filteredJobs, setFilteredJobs] = useState<any>([]);

	useEffect(() => {

		dispatch(resetFilter());

		dispatch(resetSort());

		getAllJobs().then((res) => {

			setJobList(res.filter((job: any) => job.jobStatus == "ACTIVE"));
		}).catch((err) => {

			console.log(err);

		});
	}, []);


	useEffect(() => {

		if (sort == "Most Recent") {

			setJobList([...jobList].sort((a: any, b: any) => new Date(b.postTime).getTime() - new Date(a.postTime).getTime()));	
		}

		else if (sort == "Salary: Low to High") {

			setJobList([...jobList].sort((a: any, b: any) => a.packageOffered - b.packageOffered));
		}

		else if (sort == "Salary: High to Low") {

			setJobList([...jobList].sort((a: any, b: any) => b.packageOffered - a.packageOffered));
		}

	}, [sort]);



	useEffect(() => {

		let filtered = jobList;

		console.log(filter);

		if (filter["Job Title"] && filter["Job Title"].length > 0) {

			filtered = filtered.filter((job: any) =>
				filter["Job Title"]?.some((x: any) => job.jobTitle.toLowerCase().includes(x.toLowerCase())));
		}

		if (filter.Location && filter.Location.length > 0) {

			filtered = filtered.filter((job: any) =>
				filter.location && filter.Location?.some((x: any) => job.location.toLowerCase().includes(x.toLowerCase())));
		}

		// if (filter.Qualification && filter.Qualification.length > 0) {

		// 	filtered = filtered.filter((job: any) =>
		// 		filter.Qualification?.some((x: any) => job.qualification?.toLowerCase().includes(x.toLowerCase())));
		// }

		if (filter.Experience && filter.Experience.length > 0) {

			filtered = filtered.filter((job: any) =>
				filter.Experience?.some((x: any) => job.experience?.toLowerCase().includes(x.toLowerCase())));
		}

		if (filter["Job Type"] && filter["Job Type"].length > 0) {

			filtered = filtered.filter((job: any) =>
				filter["Job Type"]?.some((x: any) => job.jobType.toLowerCase().includes(x.toLowerCase())));
		}

		setFilteredJobs(filtered);

	}, [filter, jobList]);



	return (

		<div className="p-5">

			<div className="flex justify-between text-congress-blue-100">

				<div className="font-semibold text-2xl">
					Recommended Jobs
				</div>

				<div>
					<Sort sort="job"/>
				</div>

			</div>

			<div className="mt-10 flex flex-wrap gap-5 justify-start">

				{
					filteredJobs.length? filteredJobs.map((job: any, index: any) => <JobCard key={index} {...job} />) : <div className="text-xl font-semibold">No Jobs Found</div>
				}

			</div>


		</div>
	)
}

export default Jobs