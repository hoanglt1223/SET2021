const datasource = require('../datasource/index');

function BaseRepository(dbCollection) {
    this.dbCollection = dbCollection;

    // create new item
    this.create = function (newData) {
        const collection = JSON.parse(datasource.datasource.readData(this.dbCollection));  // get collection from database
        const createdData = [...collection, newData];                                      // add new data
        datasource.datasource.writeData(this.dbCollection, JSON.stringify(createdData));   // update database
        return createdData;
    };      

    // update item
    this.update = function (id, data) {
        const collection = JSON.parse(datasource.datasource.readData(this.dbCollection));  // get collection from database
        const updatedData = collection.map((item) => {
            if (item.id === id) {
                return data;        // update data in collection
            }
            return item;
        });
        datasource.datasource.writeData(this.dbCollection, JSON.stringify(updatedData));   // update database
        return updatedData;
    };

    // delete item
    this.deleteItem = function (id) {
        const collection = JSON.parse(datasource.datasource.readData(this.dbCollection));  // get collection from database
        const deletedData = collection.filter((item) => item.id != id);                    // delete item
        datasource.datasource.writeData(this.dbCollection, JSON.stringify(deletedData));   // update database
        return deletedData;
    };

    // find all
    this.findAll = function () {
        const collection = JSON.parse(datasource.datasource.readData(this.dbCollection));  // get collection from database
        return collection;
    };

    // find one item
    this.findSpecific = function () {
        const collection = JSON.parse(datasource.datasource.readData(this.dbCollection));  // get collection from database
        const foundData = collection.find((item) => item.id === id);                       // find item
        return foundData;                                                                  // return found data   
    };
}

module.exports = BaseRepository;