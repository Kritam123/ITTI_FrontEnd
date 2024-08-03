import { FaRegHeart } from "react-icons/fa";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import { FaRegStar } from "react-icons/fa";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { Button } from "./ui/button";
const ProductItem = ({product}:{product:Product}) => {
  return (
    <div className="max-w-96  overflow-hidden max-h-[500px] flex p-2 relative flex-col">
    {/* love icon */}
    <FaRegHeart size={18} className="absolute right-5  top-0" />
    {/* image */}
    <div className="flex w-[80%] h-[250px]  justify-center items-center ">
      <img
        className="w-full h-full object-fill"
        src={product.productImages[0].smallImgUrl}
        alt="png_image"
      />
    </div>
    <div className=" w-full space-y-2"> 
 {/* title */}
 <div className="font-semibold text-gray-700  text-ellipsis text-[16px]">
     { product.title.length > 100 ? product.title.slice(0,100).concat("...."): product.title}
    </div>
    {/* rating */}
    <ReactStars
      count={5}
      value={product.rating}
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
        रु  {product.price}
      </p>
    </div>
    {/* price */}
    <p className="text-[20px] font-semibold  text-red-700">रु  {product.discountPrice}</p>
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