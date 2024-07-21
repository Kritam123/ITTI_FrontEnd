import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaPlus, FaMinus, FaRegHeart } from "react-icons/fa";
import { FcInTransit } from "react-icons/fc";
import { IoIosHelpCircleOutline } from "react-icons/io";
import ReactImageMagnify from "react-image-magnify";
import { Button } from "./ui/button";
import ReactStars from "react-rating-stars-component";
import { FaRegStar } from "react-icons/fa";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProductImages } from "@/lib/utils/productsImages";
const ProductInfo = () => {
  const [quantity, setQuantity] = useState<number>(1)
  const [active, setActive] = useState(0)
  const [previewImage, setPreviewImage] = useState(ProductImages[0])
  return (
    <div className="flex justify-between gap-5 mt-5 w-full">
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
          <CarouselContent className=" h-[450px] ">
            {ProductImages?.map((item, index) => (
              <CarouselItem  key={index}  className="md:basis-20 cursor-pointer">
                <div onClick={()=>{setPreviewImage(item),setActive(index)}} className={cn("p-1  border-2 w-24 flex items-center justify-center h-24  rounded-md",active === index ? "border-red-700": "")}>
                  <img className="object-contain w-full h-full" src={item} alt="image_Preview" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-black text-white rounded-md" />
          <CarouselNext className="bg-black text-white rounded-md" />
        </Carousel>
        {/* preview */}
        <div className="flex-1 bg-white z-20">
          <ReactImageMagnify
          className="bg-white z-50"
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                width:300,
                height:264,
                isFluidWidth: true,
                sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
                src: previewImage,
              },
              largeImage: {
                src: previewImage,
                width: 1200,
                height: 1800,

              },
              enlargedImageContainerDimensions: {
                width: '100%',
                height: '150%'
            },
              enlargedImageStyle: {
                width: "100%",
                // scale:"2",
                "object-fit":"cover",
                height: "100%",
              },
                
          
            }}
            enlargedImageContainerClassName	="bg-white"
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
        <p className=" text-wrap text-[22px] font-semibold text-gray-900">Lenovo ThinkBook 14 Gen 4 i5-1255U | 16GB RAM | 512GB SSD | 14" FHD Display | Backlight Keyboard | 1 Year Warranty</p>
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
        {/* Price */}
        <div className="flex justify-between">
          <div className="flex gap-2">
            <span className="text-xl text-gray-800 font-semibold">Price:</span>
            <span className="before:absolute before:left-0 before:w-full before:h-[2px] before:top-1/2 before:bg-gray-400 flex relative text-xl font-semibold text-gray-400
          ">रु 95,000
            </span>
            <span className="text-xl font-semibold text-red-500">
              रु 85,000</span>
          </div>
          <span className="text-green-700 font-semibold">In Stock</span>
        </div>
        {/* quantity */}
        <div>
          <div className="flex gap-10">
            <span className="text-gray-800 text-xl font-semibold">
              Qty:
            </span>
            <div className="flex items-center justify-center gap-5">
              <Button onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)} size={"icon"} className={cn("w-fit px-3", quantity > 1 ? "bg-red-700 hover:bg-red-700" : "bg-red-400 hover:bg-red-400")} >
                <FaMinus size={15} />
              </Button>
              <span className="text-black text-lg w-10 font-semibold flex justify-center items-center">{quantity}</span>
              <Button onClick={() => setQuantity(quantity + 1)} className="bg-red-700 px-3 w-fit hover:bg-red-700">
                <FaPlus size={15} />
              </Button>
            </div>

          </div>
        </div>
        {/* add to card button */}
        <div className="flex items-center mt-5  border-red-600 justify-between gap-5">
          <Button className="w-full py-6 bg-red-700 hover:bg-red-700 text-md font-semibold">Add to Cart</Button>
          <Button variant={"outline"} className="px-4 border-gray-400 py-4">
            <FaRegHeart size={20} />
          </Button>
        </div>
        {/* features lints */}
        <div >
          <span className="font-semibold text-lg">Key Specification </span>
          <ul className="flex flex-col mt-3 list-disc gap-1">
            <li><span className="font-semibold text-md">Model:</span>Lenovo ThinkBook 14 Gen 4</li>
            <li><span className="font-semibold text-md">Processor:</span>Intel Core i5-1255U processor</li>
            <li><span className="font-semibold text-md">RAM:</span>16GB DDR4 MAX upto 40GB</li>
            <li><span className="font-semibold text-md">Storage: </span>512GB SSD</li>
            <li><span className="font-semibold text-md">Display:</span>14" FHD (1920x1080) IPS 300nits</li>
            <li><span className="font-semibold text-md">Graphic:</span> Integrated Intel® Iris® Xe Graphics</li>
            <li><span className="font-semibold text-md">Warranty: </span> 1 Year Warranty</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
