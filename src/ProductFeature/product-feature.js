import { createRoot } from 'react-dom/client';
import DataStore from './model/DataStore';
import Controller from './controller/Controller';
import ProductSectionWrapper from './views/ProductSectionWrapper';

const init = () => {

    // create DataStore
    const dataStore = new DataStore();

    // get root component
    const domNode = document.getElementById('#product-section');
    if(!domNode) return;

    // get initial data (to match server-side render) and transform it (to work well with our components)
    const initialRawData = {};
    const transformedData = initialRawData;
    // const transformedData = transformer.transform(initialRawData);

    // create new controller and set transformed data to DataStore
    const controller = new Controller(dataStore);
    const controllerFunction = controller.controllerFunction;

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