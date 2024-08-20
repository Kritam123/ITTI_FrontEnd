import CarosuelProduct from "./CommonComponents/CarosuelProduct"

const Accessories = () => {
  return (
    <div className=" w-full max-w-[1600px] mt-10  min-[780px]:px-8 px-1 flex flex-col justify-center relative items-center ">
        <h1 className="text-[30px] text-center font-semibold uppercase ">
        ACCESSORIES
            </h1>
            {/* carouselProduct */}
<CarosuelProduct/>
    </div>
  )
}

export default Accessories