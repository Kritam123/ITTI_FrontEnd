import { FaMobileAlt } from "react-icons/fa";
import { Button } from "../ui/button"
import { MdOutlineMessage } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
const Footer = () => {
    return (
        <div className="md:px-10 px-5 m-auto max-w-[1600px]  py-10 mt-5 text-white bg-black w-full min-h-screen">
            {/* top */}
            <div className="lg:flex  sm:gap-5 gap-10  grid sm:grid-cols-4 max-[306px]:grid-cols-1 lg:justify-between border-b pb-10 ">
                {/* 1st part */}
                <div  className="lg:w-[30%]  w-full " >
                    {/* icon */}
                    <img src="https://admin.itti.com.np/storage/setting/6d17c806-949b-47d1-9253-9cf051996d7c.svg" alt="logo" />
                    <div className="mt-8 flex flex-col gap-3">
                        <span className="font-semibold text-[18px]">Support</span>
                        <div className="flex gap-2">
                            <MdOutlineMessage size={22} />
                            <a href="#" className="hover:text-red-500 transition">ktmdah01@gmail.com</a>
                        </div>
                        <div className="flex gap-2">
                            <FaMobileAlt size={22} />
                            <a href="#" className="hover:text-red-500 transition">
                                9845127950/9815456465
                            </a>
                        </div>
                        <Button size={"lg"} className="bg-transparent border border-gray-300 w-fit  gap-3 px-3 hover:bg-transparent font-semibold text-[16px]">
                            <CiLocationArrow1 size={22} />
                            Find our store
                        </Button>
                    </div>
                </div>
                {/* 2nd part */}
                <div className="lg:w-[20%] w-full" >
                    <h1 className="text-md font-semibold">ITTI Categories</h1>
                    <ul className="list-none text-sm flex flex-col gap-2 mt-2">
                        <li><a className="hover:text-red-500 transition" href="#">Gaming</a></li>
                        <li><a className="hover:text-red-500 transition" href="#">Desktop & Server </a></li>
                        <li><a className="hover:text-red-500 transition" href="#">Monitors</a></li>
                        <li><a className="hover:text-red-500 transition" href="#">Accessories</a></li>
                    </ul>
                </div>
                {/* 3rd part */}
                <div className="lg:w-[20%] w-full" >
                    <h1 className="text-md font-semibold">About ITTI</h1>
                    <ul className="list-none flex text-sm flex-col gap-2 mt-2">
                        <li><a className="hover:text-red-500 transition" href="#">About ITTI</a></li>
                        <li><a className="hover:text-red-500 transition" href="#">Terms & Conditions </a></li>
                        <li><a className="hover:text-red-500 transition" href="#">Warranty</a></li>
                        <li><a className="hover:text-red-500 transition" href="#">Privacy Policy</a></li>
                        <li><a className="hover:text-red-500 transition" href="#">Blog</a></li>
                    </ul>
                </div>
                {/* 4th part */}
                <div className="lg:w-[20%] w-full" >
                    <h1 className="text-md font-semibold">Customer Service</h1>
                    <ul className="list-none text-sm flex flex-col gap-2 mt-2">
                        <li><a className="hover:text-red-500 transition" href="#">Refund & Return Policy</a></li>
                        <li><a className="hover:text-red-500 transition" href="#">My Account </a></li>
                        <li><a className="hover:text-red-500 transition" href="#">Contact us</a></li>
                    </ul>
                </div>
                {/* 5th part */}
                <div className="lg:flex-1 col-span-2  w-full lg:mt-0 mt-10">
                    <h1 className="text-md font-semibold">Newsletter</h1>
                    <p className="mt-2">Trade Alert - Delivering the latest product trends and industry news straight to your inbox.</p>
                    <div className="sm:w-96  mt-3 flex items-center">
                        <input placeholder="Your email address" type="email" className="px-3 placeholder:text-md w-full text-black outline-none border-none rounded-l-md h-full py-3" />
                        <button className="  h-full font-semibold text-md  flex-shrink-1 py-3 w-60    bg-red-800 rounded-md">Subscribe</button>
                    </div>
                    {/* social networks */}

                    <div className="flex gap-5 mt-5">
                        <img className="hover:scale-125 transition cursor-pointer" src="https://admin.itti.com.np/storage/social/5420aab6-be44-4b1c-b761-655127c56d95.svg" alt="facebook" />
                        <img className="hover:scale-125 transition cursor-pointer" src="https://admin.itti.com.np/storage/social/f747cd5e-65c1-4ecc-9b0d-f364147440eb.svg" alt="twitter" />
                        <img className="hover:scale-125 transition cursor-pointer" src="https://admin.itti.com.np/storage/social/f8002ec4-3412-4b1e-b738-7dc70536588d.svg" alt="pinterest" />
                        <img className="hover:scale-125 transition cursor-pointer" src="https://admin.itti.com.np/storage/social/aad5cb7c-52ba-4df6-abca-5b8377afb255.svg" alt="youtube" />
                        <img className="hover:scale-125 transition cursor-pointer" src="https://admin.itti.com.np/storage/social/df8ce6e1-985c-47d5-b655-def0eb74a37d.svg" alt="instagram" />

                    </div>
                    {/* payment ways */}
                    <div className="flex gap-2 flex-wrap mt-4">
                        <img className="w-16" src="https://admin.itti.com.np/storage/setting/1fa80993-4bf1-42a4-8276-58175e8e69ec.svg" alt="" />
                        <img className="w-16" src="https://admin.itti.com.np/storage/setting/0e5e0450-ccfb-4cd4-9614-86fd7de3ce2d.svg" alt="" />
                        <img className="w-16" src="https://admin.itti.com.np/storage/setting/6d2edbe0-77ed-48a7-ba5a-32948bc892a4.svg" alt="" />
                        <img className="w-16" src="https://admin.itti.com.np/storage/setting/4a0f23c5-6e9a-49d2-b799-cc2240fa7b60.svg" alt="" />
                        <img className="w-16" src="https://admin.itti.com.np/storage/setting/4c749f7d-4740-4605-a17e-5cd8598f6565.svg" alt="" />

                    </div>
                </div>
            </div>
            <div className="border-b py-5 ">
            <p className="text-center   text-lg">Buying a laptop in Nepal can be a tough job. Due to the small market, computer stores always bring just a few models of laptops and all with limited stock. So chances of finding a laptop that fits your requirements are feeble. And if you further look at the laptop price in Nepal, you will be shocked to see it being exorbitantly high. Limited availability and the high price of the laptops has definitely created an inconvenience amongst the customers. With a view to solving this problem, ITTI Pvt Ltd was established.</p>
            <p className="text-center mt-3  text-lg">
            In our 15 years of illustrious journey, ITTI always strived to provide the best of our services. With a wide variety of products and a reasonable price, we definitely have made big efforts to provide the best laptops to our customers at the best price. So acknowledging our untiring efforts to keep the customers happy, ITTI Pvt Ltd is often lauded as the best place to buy laptops in Nepal.
            </p>
            <p className="text-center mt-3  text-lg">However, our product lineup is not just limited to ordinary laptops. To encompass all sorts of users, ITTI Pvt Ltd has filled its shelf with a handful of gaming laptops and thin and light ultrabooks on the top of the regular or general-purpose laptops. In addition to that, you can find plentiful of desktops, regular and gaming monitors, televisions, and other computer accessories at our store.</p>
            <p className="text-center mt-3  text-lg">
            Although our store is located in Putalisadak, Kathmandu, our service is not just limited to valley dwellers. To ensure convenience for the people outside the Kathmandu valley, we have a free shipping service. And to further improve your online purchasing experience, we are also offering 7-days no questions asked return policy. So we've got you all covered.
            </p>
            </div>
            <div className="text-center w-full py-3">ITTI Computer World Pvt. Ltd. © 2024.
All Rights Reserved.</div>
        </div>
    )
}

export default Footer