import FiltersBox from "@/components/FiltersBox"
import ProductsList from "@/components/ProductsList";
import { useParams } from "react-router-dom"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const ProductsSearch = () => {
  const { q } = useParams();
  return (
    <div className="lg:pl-14 pl-0 min-h-[100vh]">
      <div className="flex">
        {/* filter parts */}
        <div>
          <FiltersBox />
        </div>
        {/* products */}
        <div className="flex-1 px-4 ">
          {/* heading */}
          <h1 className="uppercase py-5 relative before:absolute before:w-[180px] before:h-[2px] before:bg-red-500 before:bottom-0 before:left-0 font-semibold text-2xl">SEARCH RESULTS FOR:{q}</h1>
          <div className="flex justify-end m-5 ">
            <Select >
              <SelectTrigger className="w-[200px] focus:ring-0 border-black  text-md">
                <SelectValue className="" placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="flex justify-start flex-col">
                <SelectItem  value="Price (Low - high)">Price (Low - high)</SelectItem>
                <SelectItem value="Price (high - high)">Price (high - low)</SelectItem>
                <SelectItem value="Price Name(A - Z)">Price Name(A - Z)</SelectItem>
                <SelectItem value="Price Name(Z - A)">Price Name(Z - A)</SelectItem>
                <SelectItem value="Featured">Featured</SelectItem>
              </SelectContent>
            </Select>

          </div>
          {/* lists of filter products */}
          <ProductsList />
        </div>
      </div>
    </div>
  )
}

export default ProductsSearch