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
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CompareProducts = () => {
    const {compares} = useSelector((state:RootState)=>state.products)
    return (
        <div>
            {!(compares.length >=1) ? (
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
                        <div className="flex  flex-1 items-center">
                            <CompareItem compareProduct={compares[0]} />
                            <CompareItem compareProduct={compares[1]}/>
                            <CompareItem  compareProduct={compares[2]}/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

function CompareItem({compareProduct}:{compareProduct:Product}) {
    const [selectItem, setSelectItem] = useState("");
        const [compareItem, setCompareItem] = useState(compareProduct);
    const handleChange = (value:string)=>{
        setSelectItem(value);
    }
    const productApi = async()=>{
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        productApi();
    }, [compareItem])
    
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
                   {compareItem && <div className="space-y-3">
                        <div className="w-52 h-52">
                        <img
        className="w-full h-full object-contain"
        src={compareItem.productImages[0].smallImgUrl ? compareItem.productImages[0].smallImgUrl :"https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg" }
        alt="png_image"
        onError={(e:React.SyntheticEvent<HTMLImageElement,Event>)=>{e.currentTarget.src = "https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg"}}
      />
                        </div>
                        <Link to={`/product/${compareItem.slug_name}`}>
                        <p className="text-lg font-semibold">{compareItem.title}</p>
                        </Link>
                        <div>
                        <span className="font-bold text-xl text-red-600">रु {compareItem.price}</span>
                        </div>
                    </div>}
                </div>
{ 

compareItem &&
                <>
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
                </>
}
            </div>
                    
        </div>
    );
}
export default CompareProducts;
