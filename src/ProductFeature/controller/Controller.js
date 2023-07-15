
class Controller {

    constructor(dataStore) {
        this.dataStore = dataStore;
    }

    controllerFunction = (action, actionData) => {
    
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
    
    }

}

export default Controller;