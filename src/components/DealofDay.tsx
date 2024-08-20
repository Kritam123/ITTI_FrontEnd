import CarosuelProduct from "./CommonComponents/CarosuelProduct"

const DealofDay = () => {
  return (
    <div id='#headings' className=" w-full max-w-[1600px] mt-10  min-[780px]:px-8 px-1 flex flex-col justify-center relative items-center ">
        <h1 className="text-[30px] text-center font-semibold uppercase ">
        DEAL OF THE WEEK
            </h1>
            {/* carouselProduct */}
            <CarosuelProduct/>
    </div>
  )
}

export default DealofDay