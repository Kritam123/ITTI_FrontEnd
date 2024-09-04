import { FaRegHeart,FaHeart  } from "react-icons/fa";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import { FaRegStar } from "react-icons/fa";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useAddToCartMutation, useDeleteWhistListProductMutation } from "@/redux/features/product/productApi";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const WhistListItem = ({product}:{product:WhistListProduct}) => {
    const {userDetails} = useSelector((state:RootState)=>state.auth)
  const [addCart,{isError,isLoading,error,isSuccess}] = useAddToCartMutation()
  const [deleteWhistList,{isSuccess:deleteSuccess,isLoading:deleteLoading,isError:deleteIsError,error:deleteError}]= useDeleteWhistListProductMutation();
  const isFavList = userDetails?.whistlists?.find((item:string)=>item === product.productId)
  const deleteFavItem = async()=>{
    try {
        const {productId} = product;
        const data = {
          productId
        }
       await deleteWhistList(data);        
    } catch (error) {
        console.log(error);
    }
}
const addToCart = async ()=>{
    try {
      let data = {
        title:product.title,
price:product.price,
discountPrice:product.discountPrice,
quantity:1,
slug_name:product.slug_name,
productId:product.productId,
productImages:product.productImages
      }
      await addCart(data);
    } catch (error) {
      console.log(error);
    }
}
  useEffect(()=>{
    if(isSuccess){
      toast.success("Add Product to Cart!");
    }
    if(deleteSuccess){
      toast.success("Cart Deleted SuccessFully");
    }
    if(isError && error ){
      toast.error("Something went wrong")
    }
    if(deleteIsError && deleteError) {
      toast.error("Something went wrong")
    }
  },[isSuccess,isError,deleteSuccess,deleteError,deleteIsError])
  return (
    <div className="max-w-96   overflow-hidden  max-h-[500px] flex p-2 relative flex-col">
    {/* love icon */}
    {
    isFavList ?   <FaHeart className="absolute right-5 top-0 text-red-600 text-xl"/>
    :<FaRegHeart  size={18} className={cn("absolute right-5 top-0")}/>

    }
    {/* image */}
   <Link to={`/product/${product.slug_name}`}>
   <div className="flex w-[80%] min-h-[200px]  max-h-[300px] justify-center items-center ">
      <img
        className="w-full h-full object-fill"
        src={product.productImages ? product.productImages :"https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg" }
        alt="png_image"
        onError={(e:React.SyntheticEvent<HTMLImageElement,Event>)=>{e.currentTarget.src = "https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg"}}
      />
    </div>
   </Link>
    <div className=" w-full space-y-2"> 
 {/* title */}
<Link to={`/product/${product.slug_name}`}>
<div className="font-semibold text-gray-700  text-ellipsis text-[16px]">
     { product.title.length > 100 ? product.title.slice(0,100).concat("...."): product.title}
    </div>
</Link>
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
    <div className="flex gap-x-2">
    <Button
    onClick={addToCart} disabled={isLoading || deleteLoading}
      className="mt-2 w-full py-6 bg-red-700 hover:bg-red-500 font-semibold text-[17px]"
    >
      Add to Cart
    </Button>
    <Button
    onClick={deleteFavItem}
    disabled={isLoading ||deleteLoading}
    variant={"outline"}
      className="mt-2 w-full py-6 text-[16px]"
    >
    Remove Item
    </Button>
    </div>
    <></>
    </div>
  </div>
  )
}
export default WhistListItem