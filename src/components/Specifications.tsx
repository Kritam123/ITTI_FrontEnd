
const Specifications = ({ Specifications }: any) => {
        return (
                <div className="mt-8 flex ">
                        <ul className="flex flex-col   list-none w-[75%]">
                                {
                                        Specifications?.map((item:{key:string,value:string}, index:number) => {

                                                return <>
                                                <li key={index} className="flex w-full item-center justify-between  border-b border-gray-300 py-2">
                                                        <span className="font-semibold w-[50%]">{item.key}</span>
                                                        <p className="w-[50%]">{item.value}</p>
                                                </li>

                                                </>
})
                                }


                        </ul>
                </div>
        )
}

export default Specifications