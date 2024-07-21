import { FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { FaRegStar } from "react-icons/fa";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { Button } from "./ui/button";
const ProductItem = () => {
  return (
    <div className="max-w-96 overflow-hidden max-h-[600px] flex p-2 relative flex-col">
    {/* love icon */}
    <FaRegHeart size={18} className="absolute right-5  top-0" />
    {/* image */}
    <div className="flex w-[80%]   justify-center items-center ">
      <img
        className="w-full h-full object-cover"
        src="https://itti.com.np/_next/image?url=https%3A%2F%2Fadmin.itti.com.np%2Fstorage%2Fproduct%2Fasus-zenbook-15-2023-um3504da-ryzen-7-7730u-16gb-ram-1tb-ssd-156-28k-oled-120hz-display-backlit-keyboard-2-year-warranty%2Fthumb%2Fefa56797-0d62-4ee4-9a7e-a3802d749704.webp&w=384&q=75"
        alt="png_image"
      />
    </div>
    <div className=" w-full space-y-2"> 
 {/* title */}
 <div className="font-semibold text-gray-700  text-ellipsis text-[16px]">
     { "Rapoo K10 Numeric Keyboard - 23-Keys Compact Wired Numeric Keypad USB Number Pad for PC Laptop Rapoo K10 Numeric Keyboard - 23-Keys Compact Wired Numeric Keypad USB Number Pad for PC Laptop".slice(0,100).concat("....")}
    </div>
    {/* rating */}
    <ReactStars
      count={5}
      size={20}
      isHalf={true}
      edit={false}
      emptyIcon={<FaRegStar className="text-gray-100" />}
      halfIcon={<FaStar />}
      fullIcon={<FaRegStarHalfStroke />}
      activeColor="#FFDE59"
    />
    {/* discount */}
    <div className="flex">
      <p className="text-[20px] font-semibold  text-gray-500 relative after:absolute after:left-0 after:top-[0.95rem] after:w-full after:h-[2px]  after:bg-slate-500  ">
        {" "}
        रु  15,000
      </p>
    </div>
    {/* price */}
    <p className="text-[20px] font-semibold  text-red-700">रु  10,000</p>
    {/* button */}
    <Button
      className="mt-2 w-full py-6 bg-red-700 hover:bg-red-500 font-semibold text-[17px]"
    >
      Add to Cart
    </Button>
    </div>
   
  </div>
  )
}

export default ProductItem