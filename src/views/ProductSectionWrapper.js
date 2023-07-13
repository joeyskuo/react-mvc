import React, { useEffect, useState } from "react";
import ProductSection from './ProductSection';

const ProductSectionWrapper = props => {

    const [uiData, setUiData] = useState(null);

    useEffect(() => {
        
        if(props.registerUseStateHook) registerUseStateHook(setUiData);

    }, props.registerUseStateHook);


    return (
        <ProductSection {...props} />
    )
}
