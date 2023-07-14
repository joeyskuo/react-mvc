import DataStore from '../model/DataStore';

const dataStore = new DataStore();

const controllerFunction = (action, actionData) => {
    
    switch(action) {
        case 'registerUpdateStateFunction': {
            dataStore.setUpdateDataFunction(rootComponentUseStateHook);
            break;
        }
        case 'updateData': {
            dataStore.setData(actionData);
            break;
        }

    }

    return;
}

export default controllerFunction;