import CategoryFilter from '@/components/CategoryFilter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X } from 'lucide-react';
import 'rc-slider/assets/index.css';
import { getTrackBackground, Range } from "react-range";
interface FiltersProps {
  categories: [] | any,
  setCategories: (categories: []) => void;
  minPrice: number
  setMinPrice: (minPrice: number) => void;
  maxPrice: number
  setMaxPrice: (maxPrice: number) => void;
  handlePrice: () => void;
  setOpen:(open:boolean)=>void
}

const MobileCategoryFilter = ({ categories, maxPrice, minPrice, handlePrice, setCategories, setMaxPrice, setMinPrice,setOpen }: FiltersProps) => {
  const handleChange = (e: number[] | any) => {
    setMinPrice(e[0]),
      setMaxPrice(e[1])
  }
  return (
    <div className=''>
     <div className='flex sticky top-0 bg-white shadow-sm p-3 z-[1000] justify-between items-center'>
     <h1 className="text-xl pl-5 font-semibold">Filters</h1>
      <Button variant={"outline"} size={"icon"} onClick={()=>setOpen(false)}>
      <X className='cursor-pointer '/>
      </Button>
     </div>
      <div className="w-full mt-10 rounded-md overflow-y-scroll h-fit shadow-lg p-1 min-h-[100vh]  shadow-slate-200">
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
              values={[minPrice, maxPrice]}
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
                        values: [minPrice, maxPrice],
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
              renderThumb={({ props, isDragged }) => (
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
                    outline: "none",
                    alignItems: "center",
                  }}
                >

                  <div
                    style={{
                      height: "20px",
                      borderRadius: "50%",
                      width: "20px",
                      background: "red",
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
          {/* /catagory/ */}
      <CategoryFilter categories={categories} setCategories={setCategories} />
      </div>
      </div>
     
  )
}

export default  MobileCategoryFilter