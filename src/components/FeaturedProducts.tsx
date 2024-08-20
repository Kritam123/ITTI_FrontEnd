import Carousel from "react-multi-carousel"
import { Button } from "./ui/button";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import CardProduct from "./CommonComponents/CardProduct";
import { cn } from "@/lib/utils";
import CarosuelProduct from "./CommonComponents/CarosuelProduct";

const FeaturedProducts = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    const CustomLeftArrow = ({ onClick }: any) => {
        return <Button size={"icon"} className="absolute h-8 w-8 left-0 bg-black" onClick={() => onClick()} ><RiArrowLeftSLine size={30} /></Button>;
    }

    const CustomRightArrow = ({ onClick }: any) => {
        return <Button size={"icon"} className="absolute h-8 w-8 px-1 py-1 right-0   bg-black" onClick={() => onClick()} ><RiArrowRightSLine size={34} /></Button>;
    }
    const CustomDots = ({ onClick, ...rest }: any) => {
        const {
            active,
        } = rest;
        return (
            <button
                className={cn(" rounded-md h-2  opacity-0 w-6", active ? "bg-red-600 delay-100  transition-all w-6 opacity-100 " : "")}
                onClick={() => onClick()}
            >
            </button>
        )
    }
  return (
    <div className=" w-full max-w-[1600px] mt-10  min-[780px]:px-8 px-1 flex flex-col justify-center relative items-center ">
        <h1 className="text-[30px] text-center font-semibold uppercase ">
        FEATURED PRODUCTS
            </h1>
            {/* carouselProduct */}
            <CarosuelProduct/>
    </div>
  )
}

export default FeaturedProducts