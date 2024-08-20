import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import CardProduct from './CardProduct';
const CarosuelProduct = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1240 },
            items: 5,
        },        
        laptop:{
            breakpoint:{max:1240,min:1024},
            items:4
        },
        tablet: {
            breakpoint: { max: 1024, min: 864 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 864, min: 464 },
            items: 2,
        },
        small:{
            breakpoint:{max:464,min:0},
            items:1
        }
    };
    const CustomLeftArrow = ({ onClick }: any) => {
        return <Button size={"icon"} className="absolute h-8 w-8 left-0 bg-black" onClick={() => onClick()} ><RiArrowLeftSLine size={30} /></Button>;
    }

    const CustomRightArrow = ({ onClick }: any) => {
        return <Button size={"icon"} className="absolute h-8 w-8 px-1 py-1 right-0   bg-black" onClick={() => onClick()} ><RiArrowRightSLine size={34} /></Button>;
    }
    const CustomDots = ({ onClick, ...rest }: any) => {
        const {
            active,
        } = rest;
        return (
            <button
                className={cn(" rounded-md h-2  opacity-0 w-6", active ? "bg-red-600 delay-100  transition-all w-6 opacity-100 " : "")}
                onClick={() => onClick()}
            >
            </button>
        )
    }
  return (
        <Carousel
                swipeable={false}
                draggable={false}
                arrows
                customDot={<CustomDots />}
                renderButtonGroupOutside={true}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                showDots={true}
                ssr={true}
                responsive={responsive}
                renderDotsOutside={true}
                transitionDuration={1000}
                className="w-full space-x-2 h-[480px]"
            >
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </Carousel>

  )
}


export default CarosuelProduct