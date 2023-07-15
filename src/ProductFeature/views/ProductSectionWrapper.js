import React, { useEffect, useState } from "react";
import ProductSection from './ProductSection';

const ProductSectionWrapper = props => {

    const [uiData, setUiData] = useState(null);

    const {controllerFunction, initialData } = props;

    useEffect(() => {
        controllerFunction?.('registerUpdateStateFunction', setUiData);
    }, [controllerFunction]);

    const data = uiData ?? initialData;

    return (
        <ProductSection 
            controllerFunction={controllerFunction}
            uiData={data} />
    )
}

export default ProductSectionWrapper;