import { jobList } from "../../Data/JobsData"
import JobCard from "./JobCard"
import Sort from "./Sort"

const Jobs = () => {
  return (

    <div className="p-5">
        
        <div className="flex justify-between text-congress-blue-100">

            <div className="font-semibold text-2xl">
                Recommended Jobs
            </div>

            <div>
                <Sort/>
            </div>

        </div>

        <div className="mt-10 flex flex-wrap gap-5 justify-center">

          {
            jobList.map((job, index) => <JobCard key={index} {...job} />)
          }

        </div>


    </div>
  )
}

export default Jobs