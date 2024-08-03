import Description from "./Description"
import Reviews from "./Reviews"
import Specifications from "./Specifications"

const TabContains = ({ activeTab,descriptionProduct }: { activeTab: number,descriptionProduct:any }) => {
    return (
        <>
            {
                (activeTab === 0) &&
                <>
                    <Specifications Specifications={descriptionProduct.specifications}/>
                </>
            }
            {
                activeTab === 1 &&
                <>
                    <Description description={descriptionProduct.description} />
                </>
            }
            {
                activeTab === 2 &&
                <>
                    <Reviews reviews = {descriptionProduct.reviews} />
                </>
            }
        </>
    )
}

export default TabContains