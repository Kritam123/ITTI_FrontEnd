import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import ReactStars from "react-rating-stars-component";
import { Button } from "./ui/button";
import Icons from "@/lib/utils/Icons";
import ReviewForm from "./Forms/ReviewForm";
const Reviews = () => {
    return (
        <div className="mt-8">
            {/* rating snapshot  and average customer reviews */}
            <div className="flex gap-14 w-full ">
                {/* rating snap shot */}
                <div className="flex flex-col gap-3 w-[40%]">
                    <h1 className="text-md font-semibold">Rating Snapshot</h1>
                    <p className="text-sm">Select a row below to filter reviews.</p>
                    {/* rating level from 10 to 1 */}
                    <div className="flex flex-col">
                        <div className="flex gap-2 items-center">

                            <span className="flex text-sm items-center gap-1"> 10<FaStar size={12} className="text-[#ffa800]" /></span>
                            <div className="w-full h-3 bg-gray-300 rounded-sm"></div>
                            <span>0</span>
                        </div>
                        <div className="flex gap-2 items-center">

                            <span className="flex text-sm items-center gap-1"> 4<FaStar size={16} className="text-[#ffa800]" /></span>
                            <div className="w-full h-3 bg-gray-300 rounded-sm"></div>
                            <span>0</span>
                        </div>
                        <div className="flex gap-2 items-center">

                            <span className="flex text-sm items-center gap-1"> 3<FaStar size={16} className="text-[#ffa800]" /></span>
                            <div className="w-full h-3 bg-gray-300 rounded-sm"></div>
                            <span>0</span>
                        </div>
                        <div className="flex gap-2 items-center">

                            <span className="flex text-sm items-center gap-1"> 2<FaStar size={16} className="text-[#ffa800]" /></span>
                            <div className="w-full h-3 bg-gray-300 rounded-sm"></div>
                            <span>0</span>
                        </div>
                        <div className="flex gap-2 items-center">

                            <span className="flex text-sm items-center gap-1"> 1<FaStar size={16} className="text-[#ffa800]" /></span>
                            <div className="w-full h-3 bg-gray-300 rounded-sm"></div>
                            <span>0</span>
                        </div>
                    </div>
                </div>
                <div className="flex-1 h-full ">
                    <h1 className="text-md font-semibold">Average Customer Ratings</h1>
                    <div className="flex gap-5 mt-2 items-center">
                        <ReactStars
                            count={5}
                            size={20}
                            isHalf={true}
                            edit={false}
                            emptyIcon={<FaRegStar color="bg-gray-100" />}
                            halfIcon={<FaStar color="text-gray-100" />}
                            fullIcon={<FaRegStarHalfStroke />}
                            activeColor="#FFDE59"
                        />

                        <div className="flex justify-center items-center">
                            <span>0</span> 
                            <span className="ml-2">|</span> 
                            <Button className="text-violet-500 text-md  ml-2 px-0 hover:no-underline" variant={"link"}>0 Review</Button>
                        </div>
                    </div>
                    <span className="">0 out of 21 (0%) reviews</span>
                    <div className="mt-3 w-[50%]">
                    <Button className="w-full py-6 bg-red-700 hover:bg-red-700 text-md font-semibold">Write a Reivew</Button>
                    </div>
                    <div className="mt-2 text-gray-800">Share your thoughts with other customers</div>
                </div>
            </div>
        <div className="w-full h-14 mt-5 flex items-center px-5 py-3 bg-black">
        <span className="text-white">0 Review</span>
        </div>
        <div className="flex justify-center mt-10  items-center w-full h-full">
            <Icons/>
        </div>
        <ReviewForm/>
        </div>
    )
}

export default Reviews