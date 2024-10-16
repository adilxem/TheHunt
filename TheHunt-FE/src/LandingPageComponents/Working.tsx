import { Avatar } from "@mantine/core";
import { work } from "../Data/Data";

const Working = () => {


    return (

        <div className="mt-16 pb-5">

            <div className="text-4xl mb-3 text-center font-semibold text-congress-blue-100">How It <span className="text-bright-sun-400"> Works </span></div>

            <div className="text-lg mb-10 mx-auto text-congress-blue-300 text-center w-1/2"> 
                Effortlessly navigate through the process and land your dream job!
            </div>


            <div className="flex px-36 justify-between items-center">
                {/* LEFT */}

                <div className="relative">

                    <img className="w-[30rem]" src="/Working/Girl.png" alt="girl" />    

                    <div className="absolute top-[15%] right-0 w-36 flex flex-col items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md">
                        <Avatar className="!h-16 !w-16" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png" alt="it's me" />

                        <div className="text-sm font-semibold text-congress-blue-200 text-center">Complete Your Profile</div>
                        <div className="text-xs text-congress-blue-300">70% Completed</div>
                    </div>
                </div>

                {/* RIGHT */}

                <div className="flex flex-col gap-10">
                    
                    {

                        work.map((item, index)=> <div key={index} className="flex items-center gap-4">

                        <div className="p-2.5 bg-bright-sun-300 rounded-full">
                            <img className="h-12 w-12" src={`/Working/${item.name}.png`} alt={item.name} />
                        </div>

                        <div>

                            <div className="text-xl text-congress-blue-200 font-semibold">{item.name}</div>
                            <div className="text-congress-blue-300">{item.desc}</div>
                        </div>
                    </div>)
                    }
                </div>
            </div>


        </div>
    )

}

export default Working;