import { Button } from "./ui/button"

const AppDetails = () => {
    return (
        <div className="sm:px-10 px-3 lg:items-center mt-20 flex w-full  items-start lg:flex-row flex-col ">
            {/* contents */}
            <div className="lg:w-[500px] w-full">
                <h1 className="text-red-800 text-[25px] font-semibold">Scan below to download</h1>
                <p className="sm:text-[25px] text-[20px] text-gray-700 font-semibold">Take Your Experience to the Next Level: Download from the <span className="text-red-800">App store</span>  & <br />
                    <span className=" px-1 text-red-800">Play Store</span></p>

                <div className="flex gap-5 w-full  mt-5">
                    <div className="w-40 md:block hidden"><img src="https://itti.com.np/_next/image?url=https%3A%2F%2Fadmin.itti.com.np%2Fstorage%2Fadvertisement%2Fscan%2F0817092f-85a4-4a2c-8600-757d7ea9ddc4.png&w=256&q=100" alt="qr" /></div>
                    <div className="flex gap-2 flex-1 flex-col">
                        <Button variant={"outline"} size={"default"} className="flex justify-start gap-3 w-full py-8 ">
                            <img className="w-10" src="https://itti.com.np/_next/static/media/apple.41bd11b5.svg" alt="app_store" />
                            <div className="flex flex-col">
                                <span className="text-[12px] text-gray-500">Download on the</span>
                                <span className="font-semibold text-lg">App Store</span>
                            </div>
                        </Button>
                        <Button variant={"outline"} className="flex gap-3 py-8 justify-start " >
                            <img className="w-10" src="https://itti.com.np/_next/static/media/playstore.505414d3.svg" alt="play_store" />
                            <div className="flex flex-col">
                                <span className="text-[12px] text-gray-500">Download on the</span>
                                <span className="font-semibold text-lg">Play Store</span>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
            {/* image */}
            <div className="lg:w-[500px] w-full">
                <img src="https://itti.com.np/_next/image?url=https%3A%2F%2Fadmin.itti.com.np%2Fstorage%2Fadvertisement%2F8a9a50c3-7545-4981-9697-ae43eaf1aa45.png&w=1920&q=100" alt="mobile_1" />
            </div>
        </div>
    )
}

export default AppDetails