import Description from "./Description"
import Reviews from "./Reviews"
import Specifications from "./Specifications"

const TabContains = ({ activeTab }: { activeTab: number }) => {
    return (
        <>
            {
                (activeTab === 0) &&
                <>
                    <Specifications />
                </>
            }
            {
                activeTab === 1 &&
                <>
                    <Description />
                </>
            }
            {
                activeTab === 2 &&
                <>
                    <Reviews />
                </>
            }
        </>
    )
}

export default TabContains