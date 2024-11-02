import { Divider } from "@mantine/core";
import PostJob from "../Components/PostJob/PostJob";

const PostJobPage = () => {

	return (

		<div className="min-h-[100vh] bg-congress-blue-950 font-['poppins'] px-4">

			<Divider size="xs" mx="md" color="congress-blue.9" />

			<PostJob/>

		</div>
	)
}

export default PostJobPage;