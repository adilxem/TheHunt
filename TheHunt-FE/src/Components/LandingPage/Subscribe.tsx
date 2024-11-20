import { Button, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Subscribe = () => {

	const navigate = useNavigate();

    return (

        <div className="mt-20 flex items-center bg-congress-blue-900 mx-24 rounded-xl justify-around py-6">

            <div className="text-4xl w-2/5 text-center font-semibold text-congress-blue-100">Never Miss Any <span className="text-bright-sun-400"> Job Alert </span></div>

            <div className="flex gap-4 rounded-xl bg-congress-blue-700 px-3 py-2 items-center">
            <TextInput
                className="[&_input]:text-congress-blue-100 font-semibold [&_input]:placeholder-congress-blue-300"
                variant="unstyled"
                placeholder="your@email.com"
                size="xl"
            />
            <Button onClick={()=> navigate("/sign-up")} className="!rounded-lg text-congress-blue-700" size="lg" color="bright-sun.4" variant="filled">Sign Up</Button>
            </div>
        </div>
    )

}

export default Subscribe;