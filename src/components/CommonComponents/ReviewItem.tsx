import { timeCounter } from "@/lib/utils/calculateTime";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
const ReviewItem = ({ review }: { review: ReivewProps }) => {
    return (
        <div className='flex  py-5 border-b'>
            <div className="flex w-[400px]  items-center justify-between "> 
 {/* left */}
 <div>
                <span>{review.name}</span>
            </div>
            {/* right */}
            <div className="flex flex-col gap-3  items-center justify-center">
                <div className="flex gap-10 items-center">
                    <ReactStars
                        count={5}
                        size={20}
                        isHalf={true}
                        value={review.rating}
                        edit={false}
                        emptyIcon={<FaRegStar color="bg-gray-100" />}
                        halfIcon={<FaStar color="text-gray-100" />}
                        fullIcon={<FaRegStarHalfStroke />}
                        activeColor="#FFDE59"
                    />

                    {/* time */}
                    <span className="text-[12px]">{timeCounter(review?.createdAt)}</span>
                </div>
                <div className="text-sm ">{review.reviewText}</div>
            </div>
            </div>
           
        </div>
    )
}

export default ReviewItem