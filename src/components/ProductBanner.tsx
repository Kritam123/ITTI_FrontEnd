import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    CarouselApi
} from "@/components/ui/carousel"
import { bannerProductData } from "@/lib/BannerData"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import React from "react"
const ProductBanner = () => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    React.useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
    return (
        <div className="w-full max-w-[1600px]  min-[780px]:px-1 px-0 flex flex-col justify-center relative items-center h-[450px] ">
            <Carousel setApi={setApi} opts={{ loop: true, align: "end" }} className=" min-[780px]:w-[92%] min-[780px]:pr-10 px-1 flex items-center w-full  h-full">
                <CarouselContent >
                    {
                        bannerProductData && bannerProductData.map((item, i) => {
                            return (
                                <>
                                    <CarouselItem key={i} className="w-full">
                                        <div className="flex min-[780px]:flex-row flex-col-reverse w-full px-3 min-[780px]:px-5 h-full gap-1 items-center justify-between">
                                            {/* left */}
                                            <div className=" min-[780px]:w-[50%] justify-start w-full flex flex-col gap-2 min-[780px]:gap-5 ">
                                                <h1 className="min-[780px]:text-[40px] text-[25px] leading-8 min-[780px]:leading-[50px]">{item.heading}</h1>
                                                <p className="text-lg font-thin">{item.title}</p>
                                                <Button className="uppercase hover:bg-red-600 bg-red-600 w-fit">
                                                    Shop Now
                                                </Button>
                                            </div>
                                            {/* right */}
                                            <div className="min-[780px]:w-[500px] w-[300px] ">
                                                <img src={item.image} className="w-full  h-full object-contain" alt="" />
                                            </div>
                                        </div>
                                    </CarouselItem>
                                </>
                            )
                        })
                    }
                </CarouselContent>
                <CarouselPrevious className="min-[770px]:flex  hover:bg-black rounded-md hover:text-white bg-black text-white hidden" />
                <CarouselNext className="min-[770px]:flex hidden rounded-md hover:bg-black hover:text-white bg-black text-white" />

            </Carousel>
                <div className=" flex  gap-5 bottom-0 ">
                    {
                        Array.from({ length: bannerProductData.length }).map((_, index) => {
                            return (
                                <div className={cn("w-2 h-2  transition-all delay-200 rounded-full", index + 1 === current && "bg-red-600 w-8  ")} key={index}></div>
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default ProductBanner