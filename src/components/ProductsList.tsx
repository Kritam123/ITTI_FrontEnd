import { Link } from "react-router-dom"
import ProductItem from "./ProductItem"
import { Button } from "./ui/button"

const ProductsList = ({ products }: { products: Product[] }) => {
  return (

    <>{
      products.length >= 1 ? <div className="py-3 grid grid-cols-2 gap-y-5  min-[1100px]:grid-cols-3 ">
        {
          products.map((item) => (
            <ProductItem product={item} />
          ))

        }
      </div>
        : <>
          <div className="flex flex-1 flex-col gap-16 items-center  h-full">
            <div className="w-[450px]">
              <img src="https://itti.com.np/_next/image?url=%2Fimages%2Fnoresultfound%2Fnoresult.png&w=640&q=75" alt="img" />
            </div>
            <Link to={"/"}>
              <Button className="h-12 text-lg font-normal bg-red-700 hover:bg-red-500 px-8">Explore Shop</Button>
            </Link>
          </div>
        </>
    }

    </>

  )
}

export default ProductsList