import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../../Data/Data";

const JobCategory = () => {


    return (

        <div className="mt-16 pb-5">

            <div className="text-4xl mb-3 text-center font-semibold text-congress-blue-100">Browse <span className="text-bright-sun-400"> Job </span>Categories</div>

            <div className="text-lg mb-10 mx-auto text-congress-blue-300 text-center w-1/2">
                Explore diverse job opportunities tailored to your skills. Start your dream career journey today!
            </div>

            <Carousel slideSize="22%" slideGap="md" loop className="focus-visible:[&_button]:!outline-none [&_button]:bg-bright-sun-400 [&_button]:border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100 ">
                {
                    jobCategory.map((category, index) => <Carousel.Slide key={index}>

                        <div className="flex flex-col items-center w-64 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-bright-sun-300">

                            <div className="p-2 bg-bright-sun-300 rounded-full">

                                <img className="h-8 w-8" src={`/Category/${category.name}.png`} alt={category.name} />
                            </div>

                            <div className="text-congress-blue-100 text-xl font-semibold">{category.name}</div>
                            <div className="text-sm text-congress-blue-300 text-center">{category.desc}</div>
                            <div className="text-bright-sun-300 text-lg font-medium">{category.jobs}+ New Jobs Posted</div>

                        </div>

                    </Carousel.Slide>)
                }
            </Carousel>



        </div>
    )

}

export default JobCategory;