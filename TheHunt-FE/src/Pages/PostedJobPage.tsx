import { Divider } from "@mantine/core";
import PostedJob from "../Components/PostedJob/PostedJob";
import PostedJobDesc from "../Components/PostedJob/PostedJobDesc";

const PostedJobPage = () => {

	return (
		
		<div className="min-h-[100vh] bg-congress-blue-950 font-['poppins'] px-4">

			<Divider size="xs" color="congress-blue.9" />


			<div className="flex gap-5 ">

				<PostedJob/>
				<PostedJobDesc/>
			</div>

		</div>
	)
}

export default PostedJobPage;