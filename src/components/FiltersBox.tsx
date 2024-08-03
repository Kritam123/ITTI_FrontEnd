import { Input } from "./ui/input"
import 'rc-slider/assets/index.css';
import { Button } from "./ui/button";
import CategoryFilter from "./CategoryFilter";
import { getTrackBackground, Range } from "react-range";
interface FiltersProps {
  categories: [] | any,
  setCategories: (categories: []) => void;
  minPrice: number
  setMinPrice: (minPrice: number) => void;
  maxPrice: number
  setMaxPrice: (maxPrice: number) => void;
  handlePrice: () => void;
}

const FiltersBox = ({ categories, maxPrice, minPrice, handlePrice, setCategories, setMaxPrice, setMinPrice }: FiltersProps) => {
  const handleChange = (e: number[] | any) => {
    console.log(e)
    setMinPrice(e[0]),
      setMaxPrice(e[1])
  }
  return (
    <div>
      <h1 className="text-xl pl-5 mt-5 font-semibold">Filters</h1>
      <div className="w-80 mt-10 rounded-md h-fit  shadow-xm shadow-slate-950">
        {/* price */}
        <div className="p-5 pb-0">
          <h1 className="font-semibold font-lg">Price</h1>
          <div className="flex gap-5 mt-4 items-center">
            <Input className="outline outline-2" readOnly placeholder={`NPR ${minPrice}`} />
            <span className="font-bold"> To </span>
            <Input readOnly className="outline outline-2" placeholder={`NPR ${maxPrice}`} />
          </div>
          {/* range slider */}
          <div className="mt-5">
             <Range
      step={1}
      min={0}
      max={400}
      values={[minPrice,maxPrice]}
      onChange={(e) => handleChange(e)}
      
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: "36px",
            display: "flex",
            width: "100%",
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: "6px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values:[minPrice,maxPrice],
                colors: ["#e6a9af", "#be1e2d", "#e6a9af"],
                min: 0,
                max: 400,
              }),
              alignSelf: "center",
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({  props, isDragged }) => (
        <div
          {...props}
          key={props.key}
          style={{
            ...props.style,
            height: "42px",
            width: "42px",
            borderRadius: "4px",
            display: "flex",
            justifyContent: "center",
            outline:"none",
            alignItems: "center",
          }}
        >
        
          <div
            style={{
              height: "20px",
              borderRadius:"50%",
              width: "20px",
              background:"red",
              backgroundColor: isDragged ? "#be1e2" : "#be1e2d",
            }}
          />
          <div className="absolute bg-white w-[16px] h-[16px] rounded-full">

          </div>
        </div>
      )}
    />
  
    </div>
          </div>
          {/* apply btn */}
          <div className="flex justify-end mt-5">
            <Button onClick={handlePrice} className="bg-red-700 hover:bg-red-700 text-[12px] ">Apply</Button>
          </div>
        </div>
        {/* /catagory/ */}
        <CategoryFilter categories={categories} setCategories={setCategories} />
      </div>
  )
}

export default FiltersBox