import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import ReviewList from "../components/ReviewList"
import { Button } from "./ui/button";
import Icons from "@/lib/utils/Icons";
import ReviewForm from "./Forms/ReviewForm";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Reviews = ({reviews}:{reviews:ReivewProps[]}) => {
    function calculateNumberofRating(typeRating:number){
            const filterReviewAccToRating =  reviews.filter((review)=>Math.ceil(review.rating) === typeRating);
            return filterReviewAccToRating.length;
    }
    function calculateAverageRating(){
        const totalRating = reviews.reduce((sum,review)=>sum+review.rating,0);
        const averageRating = Math.floor(totalRating / reviews.length) ;
        return averageRating ||0;
    }
    function calculatePercentage(){
        const maxRating = 21; 
        const percentageRating = ((reviews.length / maxRating) * 100).toFixed(1);
        return `${percentageRating}%`;
    }
    const  {userDetails} = useSelector((state:RootState)=>state.auth);
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
                            <span className="flex text-sm items-center gap-1"> 5<FaStar size={12} className="text-[#ffa800]" /></span>
                            <Slider trackStyle={{background:"#be1e2d",height:"10px"}} handleStyle={{display:"none"}}  value={calculateNumberofRating(5)} max={21} railStyle={{height:"10px"}}/>
                            <span>{calculateNumberofRating(5)}</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="flex text-sm items-center gap-1"> 4<FaStar size={16} className="text-[#ffa800]" /></span>
                            <Slider trackStyle={{background:"#be1e2d",height:"10px"}} handleStyle={{display:"none"}}  value={calculateNumberofRating(4)} max={21} railStyle={{height:"10px"}}/>
                            <span>{calculateNumberofRating(4)}</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="flex text-sm items-center gap-1"> 3<FaStar size={16} className="text-[#ffa800]" /></span>
                            <Slider trackStyle={{background:"#be1e2d",height:"10px"}} handleStyle={{display:"none"}}  value={calculateNumberofRating(3)} max={21} railStyle={{height:"10px"}}/>
                            <span>{calculateNumberofRating(3)}</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="flex text-sm items-center gap-1"> 2<FaStar size={16} className="text-[#ffa800]" /></span>
                            <Slider trackStyle={{background:"#be1e2d",height:"10px"}} handleStyle={{display:"none"}}  value={calculateNumberofRating(2)} max={21} railStyle={{height:"10px"}}/>
                            <span>{calculateNumberofRating(2)}</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="flex text-sm items-center gap-1"> 1<FaStar size={16} className="text-[#ffa800]" /></span>
                            <Slider trackStyle={{background:"#be1e2d",height:"10px"}} handleStyle={{display:"none"}}  value={calculateNumberofRating(1)} max={21} railStyle={{height:"10px"}}/>
                            <span>{calculateNumberofRating(1)}</span>
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
                            value={calculateAverageRating()}
                            edit={false}
                            emptyIcon={<FaRegStar color="bg-gray-100" />}
                            halfIcon={<FaStar color="text-gray-100" />}
                            fullIcon={<FaRegStarHalfStroke />}
                            activeColor="#FFDE59"
                        />
                        <div className="flex justify-center items-center">
                            <span>{calculateAverageRating()}</span> 
                            <span className="ml-2">|</span> 
                            <Button className="text-violet-500 text-md  ml-2 px-0 hover:no-underline" variant={"link"}>{reviews?.length} Reviews</Button>
                        </div>
                    </div>
                    <span className="">{reviews?.length} out of 21 ({calculatePercentage()}) reviews</span>
                    <div className="mt-3 w-[50%]">
                   <a href={userDetails ? "#ReviewForm":"/customer/account/login"}>
                   <Button className="w-full py-6 bg-red-700 hover:bg-red-700 text-md font-semibold">{userDetails?"Write a Reivew":"Please Login to Review"}</Button>
                   </a> 
                    </div>
                    <div className="mt-2 text-gray-800">Share your thoughts with other customers</div>
                </div>
            </div>
        <div className="w-full h-14 mt-5 flex items-center px-5 py-3 bg-black">
        <span className="text-white">{reviews?.length} Review</span>
        </div>
        <div className="  mt-10   ">
           {reviews.length > 0 ? <ReviewList reviews={reviews}/>: <div className="justify-center flex w-full h-full items-center"><Icons/></div>}
        </div>
        {
            userDetails && <ReviewForm name={userDetails.firstName+" "+userDetails.lastName} email ={userDetails.email}/>
        }
        </div>
    )
}

export default Reviews