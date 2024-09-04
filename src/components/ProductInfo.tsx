import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaPlus, FaMinus, FaRegHeart, FaHeart } from "react-icons/fa";
import { FcInTransit } from "react-icons/fc";
import { IoIosHelpCircleOutline } from "react-icons/io";
// @ts-ignore
import ReactImageMagnify from "react-image-magnify";
import { Button } from "./ui/button";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import { FaRegStar } from "react-icons/fa";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useAddFavListMutation, useAddToCartMutation, useDeleteWhistListProductMutation } from "@/redux/features/product/productApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
interface ReivewProps {
  name: string, email: string,
  reviewText: string,
  rating: number
}
const ProductInfo = ({ productDetails }: { productDetails: Product | any }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [active, setActive] = useState(0)
  const [previewImage, setPreviewImage] = useState('');
  // const {userDetails} = useSelector((state:RootState)=>state.auth);
  const {whistlists} = useSelector((state:RootState)=>state.products);
  const [largeImage, setLargeImage] = useState('');
  const [rating, setRating] = useState<number>(0);
  const isFavList =whistlists?.find((item:WhistListProduct)=>item.productId === productDetails._id);
  const [addCart, { isError, isLoading, error, isSuccess }] = useAddToCartMutation()
  const [addFavList, { isError:favIsError, isLoading:favLoading, error:favError, isSuccess:favIsSuccess }] = useAddFavListMutation()
  const [deleteFav,{isLoading:deleteIsLoading,isError:deleteIsError,isSuccess:deleteIsSuccess,error:deleteError}] = useDeleteWhistListProductMutation();
  function calculateAverageRating() {
    if (!productDetails.reviews || productDetails.reviews.length === 0) return 0;
    const totalRating = productDetails.reviews.reduce((sum: number, review: ReivewProps) => sum + review.rating, 0);
    let averageRating = Math.floor(totalRating / productDetails.reviews.length);
    return averageRating;
  }
const addToFavList = async()=>{
  try {
    if(!isFavList){
      let data = {
        title: productDetails.title,
        price: productDetails.price,
        discountPrice: productDetails.discountPrice,
        quantity: quantity,
        rating:productDetails.rating,
        slug_name: productDetails.slug_name,
        productId: productDetails._id,
        productImages: productDetails.productImages[0].smallImgUrl
      }
      await addFavList(data);
    }
    else {
      let data = {
        productId:productDetails._id
      }
      await deleteFav(data);   
    }
  } catch (error) {
    console.log(error);
  }
}
  const addToCart = async () => {
    try {
      if (productDetails.quantity < 1) return;
      let data = {
        title: productDetails.title,
        price: productDetails.price,
        discountPrice: productDetails.discountPrice,
        quantity: quantity,
        slug_name: productDetails.slug_name,
        productId: productDetails._id,
        productImages: productDetails.productImages[0].smallImgUrl
      }
      await addCart(data);
    } catch (error) {
      console.log("Cart", error);
    }
  }
  useEffect(() => {
    if (productDetails.productImages) {
      setPreviewImage(productDetails.productImages[0].smallImgUrl);
      setLargeImage(productDetails.productImages[0].previewImgUrl);
    }
    if (productDetails.reviews?.length > 1 && productDetails.reviews) {
      const rating = calculateAverageRating();
      setRating(rating);
    }
  }, [productDetails, rating])
  useEffect(() => {
    if (isSuccess) {
      toast.success("Add Product to Cart!");
    }
    if(favIsSuccess){
      toast.success("Add Product to FavList!");
    }
    if(deleteIsSuccess){
      toast.success("Remove Product from FavList!");
    }
    if (isError || error || favError || favIsError || deleteError|| deleteIsError) {
      toast.error("Something Went Wrong!")
    }
  }, [isSuccess, isError,favError,favIsError,favIsSuccess,deleteIsError,deleteIsSuccess,deleteError])
  return (
    <div className="flex justify-between gap-16 mt-5 w-full">
      {/* left side */}
      <div className="basis-[55%] min-h-[60vh] flex items-center justify-center  gap-10 ">
        {/* carousel preview */}
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="  w-fit  mt-16 flex justify-center max-w-xs"
        >
          <CarouselContent className="h-[450px]  ">
            {productDetails.productImages?.map((item: any, index: number) => (
              <CarouselItem key={index} className="md:basis-20 cursor-pointer">
                <div onClick={() => { setPreviewImage(item.smallImgUrl), setLargeImage(item.previewImgUrl), setActive(index) }} className={cn("p-1  border-2 w-28 flex items-center justify-center h-28  rounded-md", active === index ? "border-red-700" : "")}>
                  <img className="object-contain w-full h-full" src={item.smallImgUrl} alt="image_Preview" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-black text-white rounded-md" />
          <CarouselNext className="bg-black text-white rounded-md" />
        </Carousel>
        {/* preview */}
        <div className="flex-1 self-baseline w-full h-full mt-16 bg-white z-20">
          <ReactImageMagnify
            className="bg-white z-50"
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                width: 300,
                height: 264,
                isFluidWidth: true,
                sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
                src: previewImage,
              },
              largeImage: {
                src: largeImage,
                width: 1920,
                height: 1475,

              },
              enlargedImageContainerDimensions: {
                width: '200%',
                height: '150%'
              },
              enlargedImageStyle: {
                width: "100%",
                height: "100%",
                "object-fit": "fit",
              },


            }}
            enlargedImageContainerClassName="bg-white"
            shouldUsePositiveSpaceLens
            isEnlargedImagePortalEnabledForTouch


          />
        </div>
      </div>
      {/* right side */}
      <div className="basis-[45%] space-y-5">
        {/* top */}
        <div className="flex">
          <Button className="bg-green-600 flex gap-2 hover:bg-green-600">
            <FcInTransit size={25} />
            <span>
              Free Shipping
            </span>
            <IoIosHelpCircleOutline size={20} />
          </Button>

        </div>
        {/* productname */}
        <p className=" text-wrap text-[22px] font-semibold text-gray-900">{productDetails.title}</p>
        {/* rating */}
        <ReactStars
          count={5}
          size={20}
          isHalf={true}
          value={calculateAverageRating() | rating}
          edit={false}
          emptyIcon={<FaRegStar color="bg-gray-100" />}
          halfIcon={<FaStar color="text-gray-100" />}
          fullIcon={<FaRegStarHalfStroke />}
          activeColor="#FFDE59"
        />
        {/* Price */}
        <div className="flex justify-between">
          <div className="flex gap-2">
            <span className="text-xl text-gray-800 font-semibold">Price:</span>
            <span className="before:absolute before:left-0 before:w-full before:h-[2px] before:top-1/2 before:bg-gray-400 flex relative text-xl font-semibold text-gray-400
          ">रु {productDetails.discountPrice}
            </span>
            <span className="text-xl font-semibold text-red-500">
              रु {productDetails.price}</span>
          </div>
          <span className={cn("text-green-700 font-semibold", productDetails.quantity < 1 && "text-red-700")}>{productDetails.quantity > 1 ? "In Stock" : "Out of Stock"}</span>
        </div>
        {/* quantity */}
        <div>
          <div className="flex gap-10">
            <span className="text-gray-800 text-xl font-semibold">
              Qty:
            </span>
            <div className="flex items-center justify-center gap-5">
              <Button disabled={quantity <= 1} onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)} size={"icon"} className={cn("w-fit px-3", quantity > 1 ? "bg-red-700 hover:bg-red-700" : "bg-red-400 hover:bg-red-400")} >
                <FaMinus size={15} />
              </Button>
              <span className="text-black text-lg w-10 font-semibold flex justify-center items-center">{quantity}</span>
              <Button disabled={productDetails.quantity <= quantity} onClick={() => setQuantity(quantity + 1)} className="bg-red-700 px-3 w-fit hover:bg-red-700">
                <FaPlus size={15} />
              </Button>
            </div>
          </div>
        </div>
        {/* add to card button */}
        <div className="flex items-center mt-5  border-red-600 justify-between gap-5">
          <Button onClick={addToCart} disabled={productDetails.quantity < 1 || isLoading} className="w-full py-6 bg-red-700 active:bg-red-800 hover:bg-red-500 text-md font-semibold">Add to Cart</Button>
          <Button disabled={favLoading || deleteIsLoading} onClick={addToFavList} variant={"outline"} className="px-4 border-gray-400 py-4">
            {
              isFavList ? <FaHeart size={20} className="text-red-600"/> :
            <FaRegHeart  size={20} />

            }
          </Button>
        </div>
        {/* features lints */}
        <div >
          <span className="font-semibold text-lg">Key Specification </span>
          <ul className="flex flex-col mt-3 list-disc gap-1">
            {
              productDetails.keySpecification?.map(({ key, value }: { key: string, value: string }, index: number) => (
                <li key={index}><span className="font-semibold text-md">{key}:</span>{value}</li>
              ))
            }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
