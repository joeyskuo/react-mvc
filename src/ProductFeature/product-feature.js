import { createRoot } from 'react-dom/client';
import controllerFunction from './controller/main-controller';
import ProductSectionWrapper from './views/ProductSectionWrapper';

const init = () => {

    // create DataStore

    // get root component
    const domNode = document.getElementById('#product-section');
    if(!domNode) return;

    // get initial data (to match server-side render) and transform it (to work well with our components)
    const initialRawData = {};
    const transformedData = initialRawData;
    // const transformedData = transformer.transform(initialRawData);

    // create new controller and set transformed data to DataStore
    controllerFunction('updateData', transformedData);

    // render wrapper component
    const root = createRoot(domNode);
    root.render(<ProductSectionWrapper 
                    controllerFunction={controllerFunction} 
                    initialData={transformedData} />);

}

export default {
    init
};