
import NotFoundPage from "@/components/CommonComponents/NotFoundPage"
import ProductDescription from "@/components/ProductDescription"
import ProductInfo from "@/components/ProductInfo"
import Suggestions from "@/components/Suggestions"
import BreadCrumbHelper from "@/lib/utils/BreadCrumbHelper"
import { DynamicTitle } from "@/lib/utils/DynamicTitle"
import { useLazyGetProductBySlugQuery } from "@/redux/features/product/productApi"
import { RootState } from "@/redux/store"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
const ProductDetails = () => {
  const [fetchProductBySlug,{error,isError}] = useLazyGetProductBySlugQuery();
    const {name} =  useParams<string>();
    DynamicTitle(name);
    useEffect(() => {
      window.scrollTo(0,0);  
    }, [])
    useEffect(()=>{
      fetchProductBySlug(name)
    },[name])
    
    const {product} = useSelector((state:RootState)=>state.products)
    const {specifications,description,reviews} = product as Product;
    let descriptionProduct ={specifications,description,reviews};

    if(error && isError) {
      document.title = "404 | Page Not Found"
      return (
        <>
        <NotFoundPage/>
        </>
      )
    }  
    
  return (
    <div className="min-h-[100vh] w-full px-10 py-5">
       <BreadCrumbHelper name={name}/>
       <ProductInfo productDetails={product}/>
        <ProductDescription descriptionProduct={descriptionProduct}/>
        <Suggestions/>
    </div>
  )
}

export default ProductDetails