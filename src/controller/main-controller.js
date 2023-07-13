import DataStore from '../model/DataStore';

const dataStore = new DataStore();

const registerUseStateHook = (rootComponentUseStateHook) => {
    dataStore.setUpdateDataFunction(rootComponentUseStateHook);
}

const controllerFunction = () => {
    return;
}

const init = () => {
    return;
}

export default init;