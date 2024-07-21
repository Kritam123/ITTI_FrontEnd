import { FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "../ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
const PopoverCartItem = () => {
    const [quantity, setQuantity] = useState<number>(1);
    return (
        <div className="flex gap-3 px-3 py-2 ">
            {/* left  */}
            <div className="w-[30%]">
                <img className="object-contain w-full h-full" src="https://itti.com.np/_next/image?url=https%3A%2F%2Fadmin.itti.com.np%2Fstorage%2Fproduct%2Flenovo-ideapad-slim-1-price-nepal-ryzen-5%2Fthumb%2Ff94f7911-b05f-4d56-b3f4-d880f158a3d2.webp&w=384&q=75" alt="img" />
            </div>
            {/* right */}
            <div className="flex-1 flex justify-start flex-col">

                <div className="text-wrap  text-gray-900 ">
                    Lenovo ThinkBook 14 Gen 4 i5-1255U | 16GB RAM | 512GB SSD | 14" FHD
                    
                </div>
                <div className="flex flex-col justify-start">
                    <div className="flex gap-2">
                        <span
                            className="before:absolute before:left-0 before:w-full text-md before:h-[2px] before:top-1/2 before:bg-gray-400 flex relative font-semibold text-gray-400
          "
                        >
                            रु 95,000
                        </span>
                        <span className="text-md text-red-500">रु 85,000</span>
                    </div>
                </div>
                <div className="flex gap-5">
                <span className="text-gray-800">Qty:</span>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
                    size={"icon"}
                    className={cn(
                      "w-fit px-3 h-7",
                      quantity > 1
                        ? "bg-red-700 hover:bg-red-700"
                        : "bg-red-400 hover:bg-red-400"
                    )}
                  >
                    <FaMinus size={10} />
                  </Button>
                  <span className="text-black border border-black rounded-md text-sm w-10 font-semibold flex justify-center items-center">
                    {quantity}
                  </span>
                  <Button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-red-700 px-3 h-7 w-fit hover:bg-red-700"
                  >
                    <FaPlus size={10} />
                  </Button>
                </div>
              </div>
            <Button variant={"link"}>Remove Item</Button>
            </div>

            
        </div>
        
    );
};

export default PopoverCartItem;
