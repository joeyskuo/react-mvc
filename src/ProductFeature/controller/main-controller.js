import DataStore from '../model/DataStore';

const dataStore = new DataStore();

const registerUpdateStateFunction = (rootComponentUseStateHook) => {
    dataStore.setUpdateDataFunction(rootComponentUseStateHook);
}

const controllerFunction = () => {
    return;
}

export default controllerFunction;