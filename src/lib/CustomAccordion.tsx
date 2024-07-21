import { ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from './utils'
import { NavbarData } from './NavbarData'
interface itemProps {
    
        listName: string,
        listItems: {
            headTitle: string,
            items: {
                href: string,
                title: string
            }[];
        }[];
    
}
interface AccordinProps {
    item: itemProps
    setActiveIndex: (activeIndex: number | null) => void;
    activeIndex: number | null
    index: number
    isToggle: boolean
}

const CustomAccordion = ({ isToggle }: { isToggle: boolean }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    return (
        <div  className='px-2 py-2 w-full'>
            {NavbarData && NavbarData.map((item, index) => {
                return (
                    <>
                        <Accordion key={index} isToggle={isToggle} item={item} index={index} setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
                    </>

                )
            })}
        </div>
    )
}

const Accordion = ({ item, setActiveIndex, activeIndex, index, isToggle }: AccordinProps) => {
    const [childIndex, setChildIndex] = useState<number | null>(null)
    useEffect(() => {
        if (!isToggle) {
            setActiveIndex(null)
            setChildIndex(null)
        }
    }, [setActiveIndex, setChildIndex, isToggle])
    const handleChildIndex = (index: number | null) => {
        setChildIndex(null);
        setChildIndex(index === childIndex ? null : index);
    }
    const handleClick = (index: number | null) => {
        setActiveIndex(null);
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <>
            <div className='w-full space-y-3'>
                <div className='flex justify-between'>
                    <span className='text-[17px] hover:text-red-500 cursor-pointer'>{item?.listName}</span>
                    {
                        index === activeIndex ? <div className={cn(item.listName === "Custom PC Builder" ? "hidden" : "block")}> <Minus className='cursor-pointer block min-[650px]:hidden' onClick={() => handleClick(index)} /> <ChevronUp className='cursor-pointer min-[650px]:block hidden' onClick={() => handleClick(index)} /> </div> :
                            <div className={cn(item.listName === "Custom PC Builder" ? "hidden" : "block")}>
                                <Plus className='cursor-pointer block min-[650px]:hidden' onClick={() => handleClick(index)} />
                                <ChevronDown className='cursor-pointer min-[650px]:block hidden' onClick={() => handleClick(index)} />
                            </div>
                    }
                </div>
                {/* contents */}
                <div className={cn('max-h-0 w-full mb-2 overflow-hidden transition-all ease-in delay-150', activeIndex === index && "max-h-[550px] transition-all ease-in delay-150")}>
                    {item.listItems && item?.listItems?.map((item: { headTitle: string, items: [{ href: string, title: string }] }, index: number) => {
                        return (
                            <>
                                <div key={index} className='w-full pl-3 space-y-2'>
                                    <div className='flex justify-between'>
                                        <span className='text-[17px] hover:text-red-500 cursor-pointer'>{item?.headTitle}</span>
                                        {
                                            index === childIndex ? <> <Minus className='cursor-pointer block min-[650px]:hidden' onClick={() => handleChildIndex(index)} /> <ChevronUp className='cursor-pointer min-[650px]:block hidden' onClick={() => handleChildIndex(index)} /> </> :
                                                <>
                                                    <Plus className='cursor-pointer block min-[650px]:hidden' onClick={() => handleChildIndex(index)} />
                                                    <ChevronDown className='cursor-pointer min-[650px]:block hidden' onClick={() => handleChildIndex(index)} />
                                                </>
                                        }

                                    </div>
                                    {/* contents */}
                                    {item.items &&
                                        <div className={cn('max-h-0  w-full pl-3 overflow-hidden transition-all ease-in-out delay-150', childIndex === index && "max-h-[550px] transition-all ease-in-out delay-150 ")}>

                                            {
                                                item.items?.map((item: { href: string, title: string }, i: number) => {
                                                    return (
                                                        <li className='list-none text-[17px] hover:text-red-500 cursor-pointer ' key={i}>
                                                            {item.title}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </div>
                                    }
                                </div>

                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default CustomAccordion