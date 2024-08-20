import PaginationComponent from "@/components/CommonComponents/Pagination";
import FiltersBox from "@/components/FiltersBox"
import ProductsList from "@/components/ProductsList";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RootState } from "@/redux/store";
import { LuSettings2 } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string"
import { useLazyGetFilterProductsQuery } from "@/redux/features/product/productApi";
import { DynamicTitle } from "@/lib/utils/DynamicTitle";
import { Button } from "@/components/ui/button";
import { DrawerDialog } from "@/components/Drawer";
import MobileCategoryFilter from "@/components/CommonComponents/MobileComponents/MobileCategoryFilter";
const ProductsSearch = () => {
  const [open,setOpen]= useState<boolean>(false);
  const [fetchProducts] = useLazyGetFilterProductsQuery();
  const [params, _] = useSearchParams();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [sort, setSort] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<number>(400);
  const [page, setPage] = useState(1);
  const handlePage = (page: number) => {
    updateURL({ ...queryString.parse(location.search), page });
    setPage(page)
  }
  let queryParams = {}
  const updateURL = ({ ...newState }: any) => {
    queryParams = {
      q: params.get('q'),
      ...newState,
    };
    navigate(`${location.pathname}?${queryString.stringify(queryParams)}`, { replace: true });
  };

  const handleSortProduct = (e: string) => {
    setSort(e);
    updateURL({
      ...queryString.parse(location.search), sortBy: e.split("-")[0],
      order: e.split('-')[1]
    });
    fetchProducts(queryParams);

  }
  const handlePrice = () => {
    updateURL({ ...queryString.parse(location.search), minPrice, maxPrice });
    fetchProducts(queryParams);
  }
  useEffect(() => {
    const parsedQuery = queryString.parse(location.search);
    // @ts-ignore
    if (parsedQuery.categories) setCategories(parsedQuery.categories.split(","));
    // @ts-ignore
    if (parsedQuery.minPrice) setMinPrice(parsedQuery.minPrice);
    // @ts-ignore
    if (parsedQuery.maxPrice) setMaxPrice(parsedQuery.maxPrice as number);
    if (parsedQuery.order &&  parsedQuery.sortBy) setSort(`${parsedQuery.sortBy}-${parsedQuery.order}`);
    if (parsedQuery.page) setPage(parseInt(parsedQuery.page as string));
    updateURL(parsedQuery);
    fetchProducts(parsedQuery);
  }, []);
  useEffect(() => {
    updateURL({ ...queryString.parse(location.search) })
    fetchProducts(queryParams);
  }, [page, categories, params.get('q')]);
  DynamicTitle(`Search results for:${params.get('q') && params.get('q')}`)
  const { pages, products } = useSelector((state: RootState) => state.products);
  return (
    <div className="lg:pl-14 pl-0 min-h-[100vh]">
      <div className="min-[720px]:hidden flex">
      <DrawerDialog isCompare={false} open={open} setOpen={setOpen}><MobileCategoryFilter  setOpen={setOpen} handlePrice={handlePrice} categories={categories} setCategories={setCategories} minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice}/></DrawerDialog>
      </div>
      <div className="flex">
        {/* filter parts */}
        <div className="min-[720px]:flex hidden">
          <FiltersBox handlePrice={handlePrice} categories={categories} setCategories={setCategories} minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} />
        </div>
        {/* products */}
        <div className="flex-1 px-4 ">
          {/* heading */}
          <h1 className="uppercase py-5 relative before:absolute before:w-[180px] before:h-[2px] before:bg-red-500 before:bottom-0 before:left-0 font-semibold text-2xl">SEARCH RESULTS FOR:{params.get("q")}</h1>
          <div className="flex  min-[720px]:justify-end justify-between mt-5 mb-5 ">
            <Select value={sort} onValueChange={(e) => handleSortProduct(e)}>
              <SelectTrigger className="w-[200px] focus:ring-0 border-black  text-md">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="flex justify-start flex-col">
                <SelectItem value="price-asc">Price (Low - high)</SelectItem>
                <SelectItem value="price-desc">Price (high - low)</SelectItem>
                <SelectItem value="title-asc" > Name (A - Z)</SelectItem>
                <SelectItem value="title-desc" >Name (Z - A)</SelectItem>
              </SelectContent>
            </Select>
          <Button onClick={()=>setOpen(true)} className="min-[720px]:hidden flex " variant={"outline"} >
            <span>Filter</span>
            <LuSettings2 size={20}/>
          </Button>
          </div>
          {/* lists of filter products */}
          <ProductsList products={products} />
          {/* pagination */}
          <div>
            {pages >= 1 && <PaginationComponent page={page} handlePageChange={handlePage} pages={pages} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsSearch