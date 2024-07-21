import { features } from "@/lib/featured"

const FeatureCategory = () => {
  return (
    <div className="md:px-5 max-w-[1600px] w-full px-1 pt-16 mt-3 ">
      {/* heading */}
      <h1 className="uppercase text-[25px]  sm:text-[30px] font-semibold text-center">Featured Category</h1>
      {/* lists of features */}
      <div className="  py-3 gap-y-10 grid lg:grid-cols-9 md:grid-cols-6 sm:grid-cols-5 grid-cols-3  ">
        {
          features.map((item) => {
            return (
              <>
                <div className="max-w-[150px]  gap-y-8  flex flex-col items-center justify-center cursor-pointer group h-fit px-2 py-2">
                  {/* image */}
                  <div className="w-[70px]  relative h-[70px] ">
                    <img src={item.image1} className="w-full absolute h-full group-hover:opacity-0   opacity-100 transition-opacity delay-100 ease-in-out" alt={item.name} />
                    <img src={item.image2} className="w-full absolute h-full opacity-0 group-hover:opacity-100  transition-opacity delay-100 ease-in-out " alt="" />
                  </div>
                  {/* name */}
                  <div className="text-center">
                    <span className="text-center group-hover:font-semibold">{item.name}</span>
                  </div>
                </div></>
            )
          })

        }
      </div>
    </div>
  )
}

export default FeatureCategory