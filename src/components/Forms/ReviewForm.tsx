import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import ReactStars from "react-rating-stars-component";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import DragDropUploader from "../CommonComponents/DragAndDropUploader";
import { Button } from "../ui/button";
const ReviewForm = () => {
    return (
        <div>
            <h1 className="text-lg font-bold">Write a review</h1>
            {/* rating */}
            <div className="mt-3">  
                <span className="text-md font-semibold ">Your Rating</span>
               <div className="mt-2">
               <ReactStars
                    count={5}
                    size={20}
                    isHalf={true}
                    edit={true}
                    emptyIcon={<FaRegStar size={20} color="bg-gray-100" />}
                    halfIcon={<FaStar size={20} color="text-gray-100" />}
                    fullIcon={<FaRegStarHalfStroke size={20} />}
                    activeColor="#FFDE59"
                />
               </div>
            </div>
            {/* forms */}
            <div className="flex w-full justify-between mt-3">
                <div className="w-[45%] space-y-3">
                    <Label className="text-lg text-gray-800"  htmlFor="Name">Name <span className="text-red-500">*</span> </Label>
                    <Input  className="h-14 text-md border border-gray-800 rounded-sm  outline-1 outline-gray-500" placeholder="Enter Your name..."/>
                </div>
                <div className="w-[45%] space-y-3">
                    <Label className="text-lg text-gray-800"  htmlFor="Email">Email <span className="text-red-500">*</span> </Label>
                    <Input className="h-14 text-md rounded-sm border border-gray-800"   type="email" placeholder="Enter Your Email..."/>
                </div>
            </div>
            <div className="flex w-full justify-between mt-3">
                <div className="w-full space-y-3">
                    <Label className="text-lg text-gray-800"  htmlFor="Name">Your Review  <span className="text-red-500">*</span> </Label>
                    <Textarea rows={5} className="text-md rounded-sm border border-gray-800" placeholder="Type your review here..."/>
                </div>
                
            </div>
            <div className="flex w-full justify-between mt-3">
                <div className="w-full space-y-3">
                    <Label className="text-lg text-gray-800"  htmlFor="Name">Add Your Photo  <span className="text-red-500">*</span> </Label>
                     <DragDropUploader/>
                </div>
            </div>

            <div className="mt-5 w-[25%]">
                    <Button className="w-full py-6 bg-red-700 hover:bg-red-700 text-md font-semibold">Submit</Button>
            </div>
        </div>
    )
}

export default ReviewForm