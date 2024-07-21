import ProductBanner from "@/components/ProductBanner";
import BrandBanner from "@/components/BrandBanner";
import FeatureCategory from "@/components/FeatureCategory";
import BestSelling from "@/components/BestSelling";
import DealofDay from "@/components/DealofDay";
import Advertisment from "@/components/Advertisment";
import FeaturedProducts from "@/components/FeaturedProducts";
import Accessories from "@/components/Accessories";
import AppDetails from "@/components/AppDetails";
const Home = () => {
  return (
    <div className=" flex flex-col  items-center w-full min-h-[100vh]">
        <ProductBanner/>
        <BrandBanner/>
        <DealofDay/>
        <FeatureCategory/>
        <BestSelling/>
        <Advertisment/>
        <FeaturedProducts/>
        <Accessories/>
        <AppDetails/>
    </div>
  )
}

export default Home