import { createRoot } from 'react-dom/client';
import controllerFunction from "./controller/main-controller";
import ProductSectionWrapper from './views/ProductSectionWrapper';

const init = () => {

    // get root component
    const domNode = document.getElementById('#product-section');
    if(!domNode) return;

    // get initial data and transform it to work well with our components
    const initialRawData = {};
    const transformedData = transformer.transform(initialRawData);

    // set transformed data to DataStore
    

    // render wrapper component
    const root = createRoot(domNode);
    root.render(<ProductSectionWrapper controllerFunction={controllerFunction} />);

    return;
}

export default init;