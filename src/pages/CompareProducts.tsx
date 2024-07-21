import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ComapreCategory } from "@/lib/CompareCategoryLists";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";

const CompareProducts = () => {
    return (
        <div>
            {false ? (
                <div className=" h-[70vh] flex-col flex justify-center items-center ">
                    <p className="text-xl font-semibold text-gray-500">
                        No products to compare, please select atleast a product to compare{" "}
                    </p>
                    <Link to={"/"}>
                        {" "}
                        <Button
                            className="text-red-600 underline text-xl p-0"
                            variant={"link"}
                        >
                            Go Back
                        </Button>
                    </Link>
                </div>
            ) : (
                <div className="min-h-screen pl-16 py-10">
                    <div className="flex">
                        <div className="h-full mt-[480px] basis-64">
                            {ComapreCategory &&
                                ComapreCategory.map((item, i) => {
                                    return (
                                        <div key={i} className="space-y-2">
                                            <div
                                                className={cn(
                                                    "text-md px-3 py-2 font-semibold",
                                                    i % 2 === 0 ? "bg-white" : "bg-gray-100"
                                                )}
                                            >
                                                {item.name}
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                        {[0, 1, 2].map(() => {
                            return <CompareItem />;
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

function CompareItem() {
    const [selectItem, setSelectItem] = useState("");
    const handleChange = (value:string)=>{
        setSelectItem(value);
    }
    return (
        <div className="flex-1">
            <div className="h-full">
                <div className="h-[480px] px-3">
                    <h1 className="text-lg">Compare with</h1>
                    {/* select */}
                    <Select onValueChange={handleChange} defaultValue={selectItem}>
                        <SelectTrigger className="w-full b border mt-3 border-black focus:ring-0">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {/* card */}
                    <div className="space-y-3">
                        <div className="w-52 h-52">
                            <img src="https://itti.com.np/_next/image?url=https%3A%2F%2Fadmin.itti.com.np%2Fstorage%2Fproduct%2Flenovo-ideapad-slim-1-price-nepal-ryzen-5%2Ff94f7911-b05f-4d56-b3f4-d880f158a3d2.webp&w=1920&q=75" alt="img" />
                        </div>
                        <p className="text-lg font-semibold">Lenovo IdeaPad Slim 1 2022 Ryzen 5 7520U | 8GB RAM | 512GB SSD | 14" FHD display</p>
                        <div>
                        <span className="font-bold text-xl text-red-600">रु 60,300</span>

                        </div>
                    </div>
                </div>
                {/* category */}
                {ComapreCategory &&
                    ComapreCategory.map((item, i) => {
                        return (
                            <div key={i} className="space-y-2">
                                <div
                                    className={cn(
                                        "text-md px-3 py-2 font-semibold",
                                        i % 2 === 0 ? "bg-white" : "bg-gray-100"
                                    )}
                                >
                                    {item.name}
                                </div>
                            </div>
                        );
                    })
                }
                <div className="w-80">
                    {ComapreCategory && <Button
                        className="mt-2 w-full py-6 bg-red-700 hover:bg-red-500 font-semibold text-[17px]"
                    >
                        Add to Cart
                    </Button>}
                </div>

            </div>
        </div>
    );
}
export default CompareProducts;
