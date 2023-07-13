import DataStore from '../model/DataStore';

const dataStore = new DataStore();

const registerUpdateStateFunction = (rootComponentUseStateHook) => {
    dataStore.setUpdateDataFunction(rootComponentUseStateHook);
}

const controllerFunction = () => {
    return;
}

const init = () => {

    // get root component

    // get initial data

    // transform data

    // set transformed data to DataStore

    // render wrapper component

    return;
}

export default init;