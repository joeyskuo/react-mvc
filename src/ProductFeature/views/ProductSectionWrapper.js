import React, { useEffect, useState } from "react";
import ProductSection from './ProductSection';

const ProductSectionWrapper = props => {

    const [uiData, setUiData] = useState(null);

    useEffect(() => {
        
        props.registerUpdateStateFunction?.(setUiData);

    }, props.registerUpdateStateFunction);


    return (
        <ProductSection {...props} />
    )
}

export default ProductSectionWrapper;