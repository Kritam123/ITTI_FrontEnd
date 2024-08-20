import ReviewItem from "../components/CommonComponents/ReviewItem"
const ReviewList = ({reviews}:{reviews:ReivewProps[]}) => {
  return (
    <div>
         {
            reviews.map((item)=>(
                <ReviewItem review={item}/>
            ))
         }
    </div>
  )
}

export default ReviewList