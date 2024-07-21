import { useState } from "react"
import Tabs from "./Tabs";
import TabContains from "./TabContains";

const ProductDescription = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    return (
        <div className=" mt-16 py-3">
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabContains activeTab={activeTab}/>
        </div>
    )
}

export default ProductDescription