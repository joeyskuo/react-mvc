import React, { useEffect, useState } from "react";
import ProductSection from './ProductSection';

const ProductSectionWrapper = props => {

    const [uiData, setUiData] = useState(null);

    const {controllerFunction, initialData } = props;

    useEffect(() => {
        
        props.registerUpdateStateFunction?.(setUiData);

    }, props.registerUpdateStateFunction);

    const data = uiData ?? initialData;

    return (
        <ProductSection 
            controllerFunction={controllerFunction}
            uiData={data} />
    )
}

export default ProductSectionWrapper;