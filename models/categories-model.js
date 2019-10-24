'use strict';

const uuid = require('uuid/v4');

//for mongoode, require mongoose schema

class Categories {
  constructor(){
    //this.schema = mongooseSchema;
    this.data = {
      [uuid()]: { name: 'Jacob', description: 'Jacob is coool'}

    }; //with db, this.schema = schema

    /**
     * ID { 1: { name: '', description: ''; } }
     */
  }

  get (filter) {
    //serch this.data filter
    const result = this.data[filter.id]
    if (result) {
      return Promise.resolve(result);
    }
    //cannot find by id or get a blank array...
    return Promise.resolve([this.data]);
  }

  create (entry) {
    // add  a new entry to this.data
  }
}

module.exports = Categories;