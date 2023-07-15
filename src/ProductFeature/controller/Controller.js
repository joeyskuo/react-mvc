
class Controller {

    constructor(dataStore) {
        this.dataStore = dataStore;
    }

    controllerFunction = (action, actionData) => {
    
        switch(action) {
            case 'registerUpdateStateFunction': {
                this.dataStore.setUpdateDataFunction(actionData);
                break;
            }
            case 'updateData': {
                this.dataStore.setData(actionData);
                break;
            }
    
        }
    
    }

}

export default Controller;