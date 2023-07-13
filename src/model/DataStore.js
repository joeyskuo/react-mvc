
class DataStore {

    constructor() {
        this._data = {};
        this._updateDataFunction = null;
    }

    getData() {
        return this._data;
    }

    setData(newData) {
        if(this._updateDataFunction) this._updateDataFunction(newData);
    }

    setUpdateDataFunction(updateDataFunction) {
        this._updateDataFunction = updateDataFunction;
    }

}