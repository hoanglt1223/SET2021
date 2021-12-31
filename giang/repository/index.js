const dataSource = require("../datasource");

function BaseRepository(dbCollection) {
  this.dbCollection = dbCollection;

  this.create = function (newItem) {
    const data = dataSource.get(this.dbCollection);

    const newData = [...data, newItem];

    dataSource.update(this.dbCollection, newData);

    return newData;
  };

  this.findAll = function () {
    const data = dataSource.get(this.dbCollection);
    return data;
  };

  this.findOne = function (itemId) {
    const data = dataSource.get(this.dbCollection);
    const foundItem = data.find((item) => item.id === itemId);

    return foundItem;
  };

  this.delete = function (itemId) {
    const data = dataSource.get(this.dbCollection);
    const filterData = data.filter((item) => item.id !== itemId);

    dataSource.update(this.dbCollection, filterData);

    return filterData;
  };

  this.update = function (itemId, itemData) {
    const data = dataSource.get(this.dbCollection);
    const updatedData = data.map((item) => {
      if (item.id === itemId) {
        return { ...item, ...itemData };
      }

      return item;
    });

    dataSource.update(this.dbCollection, updatedData);

    return updatedData;
  };

  this.replaceAndUpdate = function (itemId, itemData) {
    const data = dataSource.get(this.dbCollection);

    const updatedData = data.map((item) => {
      if (item.id === itemId) {
        return {
          id: item.id,
          title: null,
          status: null,
          isAdminCreated: null,
          isDeleted: null,
          ...itemData,
        };
      }

      return item;
    });

    dataSource.update(this.dbCollection, updatedData);
    return updatedData;
  };
}

module.exports = BaseRepository;
