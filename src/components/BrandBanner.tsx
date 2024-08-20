import React from "react"
import { cn } from "@/lib/utils";
import {
    Carousel,
    CarouselContent,
    CarouselApi,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel"
const BrandBanner = () => {
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
    const brandData = [
        {
            image: "https://admin.itti.com.np/storage/category/1d9c4479-81ca-4f24-a80c-315ee7c2cd98.svg"
        },
        {
            image: "https://admin.itti.com.np/storage/category/4319d72b-e1c5-48fd-be4b-1750c6d90804.svg"
        }, {
            image: "https://admin.itti.com.np/storage/category/d061c22b-d7bb-4f12-9ee6-343b13f7c31a.svg"
        }, {
            image: "https://admin.itti.com.np/storage/category/9c1830db-160f-4ec1-bc91-1002a156e21b.svg"
        },
        {
            image: "https://admin.itti.com.np/storage/category/ea295603-67f0-493c-89a5-f837defe95be.svg"
        }, {
            image: "https://admin.itti.com.np/storage/category/ecb497c7-e693-4bd0-9bcc-7b05be381506.svg"
        },
        {
            image: "https://admin.itti.com.np/storage/category/89896dd6-bfbe-489f-b8b6-ce427ca4d3e9.svg"
        },
        {
            image: "https://admin.itti.com.np/storage/category/1bf9f96c-6085-4631-993f-84dd122a223e.svg"
        },
        {
            image: "https://admin.itti.com.np/storage/category/1c5ceb9d-fa1b-4cb5-b6ab-9c2cd9e326a3.svg"
        },
        {
            image: "https://itti.com.np/_next/image?url=https%3A%2F%2Fadmin.itti.com.np%2Fstorage%2Fcategory%2F9970e805-f439-4119-b917-7d7407386364.png&w=1920&q=75"
        },
        {
            image: "https://itti.com.np/_next/image?url=https%3A%2F%2Fadmin.itti.com.np%2Fstorage%2Fcategory%2F74061f1d-02eb-4fda-be88-37e26c5b8d0c.png&w=1920&q=75"
        },
        {
            image: "https://itti.com.np/_next/image?url=https%3A%2F%2Fadmin.itti.com.np%2Fstorage%2Fcategory%2F74061f1d-02eb-4fda-be88-37e26c5b8d0c.png&w=1920&q=75"
        }
    ]
    return (
        <div className="w-full max-w-[1600px] px-4 mt-10 flex justify-center relative items-center h-[50px] ">
            <Carousel className="w-[92%] " opts={{ loop: true, align: "end" }} setApi={setApi} >
                <CarouselContent>
                     <CarouselItem className="hidden min-[780px]:flex gap-5" >
                    {
                        brandData && brandData.slice(0).map((item,i) => {
                            return (
                                <div  key={i}>
                                        <img key={i} src={item?.image} className="w-[100px] h-[100px] cursor-pointer object-contain " />
                                </div>
                            )
                        })
                    }
                    </CarouselItem>
                     <CarouselItem className="flex gap-5" >
                    {
                        brandData && brandData.slice(6).map((item,i) => {
                            return (
                                <div key={i}>
                                   
                                        <img key={i} src={item?.image} className="w-[80px] cursor-pointer object-contain h-[100px]" />
                                </div>
                            )
                        })
                    }
                    </CarouselItem>
                     <CarouselItem className="flex gap-5" >
                    {
                        brandData && brandData.slice(0,6).map((item,i) => {
                            return (
                                <button key={i}>
                                   
                                        <img key={i} src={item?.image} className="w-[80px] cursor-pointer  object-contain h-[100px]" />
                                </button>
                            )
                        })
                    }
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="min-[770px]:flex  hover:bg-black rounded-md hover:text-white bg-black text-white hidden" />
                <CarouselNext className="min-[770px]:flex hidden rounded-md hover:bg-black hover:text-white bg-black text-white" />

            </Carousel>
            <div className="absolute flex  gap-5 bottom-[-15px] ">
                {
                    Array.from({ length: 3 }).map((_, index) => {
                        return (
                            <div className={cn("w-2 h-2  transition-all delay-200 rounded-full", index + 1 === current && "bg-red-600 w-8  ")} key={index}></div>
                        )
                    })
                }
            </div>
           
        </div>
    )
}

export default BrandBanner;