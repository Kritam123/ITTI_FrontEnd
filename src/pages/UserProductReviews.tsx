import Icons from "@/lib/utils/Icons";
import { DynamicTitle } from "@/lib/utils/DynamicTitle";

const UserProductReviews = () => {
  DynamicTitle("My Product Reviews | Dashboard");
  return (
    <div className="ml-10 flex-1">
      {/* heading */}
      <div className="w-[50%]">
        <h1 className="uppercase py-1  relative before:absolute before:w-[20%] before:h-[2px] before:bg-red-500 before:bottom-0 before:left-0  text-xl">MY PRODUCT REVIEW</h1>
      </div>

      <div className="mt-5">
        {
          false ? "true" : <div className="flex flex-col gap-16 justify-center items-center w-full h-full">
            <div className="flex flex-col gap-10 justify-center mt-10  items-center w-full h-full">
              <Icons/>
              <span className="text-lg">You have submitted no reviews</span>
            </div>

          </div>
        }
      </div>

    </div>
  )
}

export default UserProductReviews