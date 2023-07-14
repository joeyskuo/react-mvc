import DataStore from '../model/DataStore';

const dataStore = new DataStore();

const registerUpdateStateFunction = (rootComponentUseStateHook) => {
    dataStore.setUpdateDataFunction(rootComponentUseStateHook);
}

const controllerFunction = (action, actionData) => {
    
    switch(action) {
        case 'updateData': {
            dataStore.setData(actionData);
            break;
        }
    }

    return;
}

export default controllerFunction;