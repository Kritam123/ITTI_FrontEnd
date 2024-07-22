import { Input } from "./ui/input"
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from "react";
import { Button } from "./ui/button";
import CategoryFilter from "./CategoryFilter";
const FiltersBox = () => {
  const [range, setRanges] = useState({
    min: 0,
    max: 100
  });

  const handleChange = (e: number[]) => {
    setRanges({
      min: e[0],
      max: e[1]
    })
  }
  return (
    <div>
      <h1 className="text-xl pl-5 font-semibold">Filters</h1>
      <div className="w-80 mt-10 rounded-md h-fit  shadow-xm shadow-slate-950">
        {/* price */}
        <div className="p-5 pb-0">
          <h1 className="font-semibold font-lg">Price</h1>
          <div className="flex gap-5 mt-4 items-center">
            <Input className="outline outline-2" readOnly placeholder={`NPR ${range.min}`} />
            <span className="font-bold"> To </span>
            <Input readOnly className="outline outline-2" placeholder={`NPR ${range.max}`} />
          </div>
          {/* range slider */}
          <div className="mt-5">
            <Slider
              range keyboard defaultValue={[0, 100]} count={1} onChange={(e) => handleChange(e)} railStyle={{ background: "#e6a9af", height: 6 }} trackStyle={{ background: "red", height: 6 }} handleStyle={{ background: "white", width: 18, height: 18, borderColor: "red", borderWidth: 3 }} />
          </div>
          {/* apply btn */}
          <div className="flex justify-end mt-5">
            <Button className="  bg-red-700 hover:bg-red-700 text-[12px] ">Apply</Button>
          </div>
        </div>
        {/* /catagory/ */}
        <CategoryFilter />
      </div>
    </div>
  )
}

export default FiltersBox