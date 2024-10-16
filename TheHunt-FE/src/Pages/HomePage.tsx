import Companies from "../LandingPageComponents/Companies";
import DreamJob from "../LandingPageComponents/DreamJob";
import JobCategory from "../LandingPageComponents/JobCategory";
import Subscribe from "../LandingPageComponents/Subscribe";
import Testimonials from "../LandingPageComponents/Testimonials";
import Working from "../LandingPageComponents/Working";

const HomePage = () => {

	return (

		<div className="min-h-[100vh] bg-congress-blue-950 font-['poppins']">



			<DreamJob />
			<Companies />
			<JobCategory />
			<Working />
			<Testimonials />
			<Subscribe />


		</div>

	)

}

export default HomePage;