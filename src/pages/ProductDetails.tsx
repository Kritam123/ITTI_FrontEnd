
import ProductDescription from "@/components/ProductDescription"
import ProductInfo from "@/components/ProductInfo"
import Suggestions from "@/components/Suggestions"
import BreadCrumbHelper from "@/lib/utils/BreadCrumbHelper"
import { DynamicTitle } from "@/lib/utils/DynamicTitle"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
const ProductDetails = () => {
    const {name} =  useParams<string>();
    DynamicTitle(name);
    useEffect(() => {
      window.scrollTo(0,0);  
    }, [])
    
  return (
    <div className="min-h-[100vh] w-full px-16 py-5">
       <BreadCrumbHelper name={name}/>
       <ProductInfo/>
        <ProductDescription/>
        <Suggestions/>
    </div>
  )
}

export default ProductDetails