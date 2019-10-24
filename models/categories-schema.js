//use and export to categories-model.js and use the shchema
'use strict';

// const DataModel = require('../memory.js');

class Categories extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { type: String, required: true },
      name: { type: String, required: true },
    };
  }
}

module.exports = Categories;