'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require( '../src/middleware/error.js');
const notFound = require('../src/middleware/error.js' );

const app = express();

// Catchalls
app.use(notFound);
app.use(errorHandler);

const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};

mongoose.connect('mongodb://localhost:27017/class08', mongooseOptions);

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//+++++++++++++++++++++++++++++++++++++++++++++
const categories = mongoose.Schema({
  name: String,
  desciption: String,
});

const Categories = mongoose.model('categories', categories);

app.get('/categories', (req, res, next) => {
  console.log('Yo, you made it ya fool');
  res.send('Posted to ur page, yo');
  Categories.find({})
  .then(results => {
    console.log('you got something from Categories.find', results);
  }).catch(err => {
    console.error(err);
  })
  next();
});

// app.get('/categories/:id', () => {})


// app.post()



module.exports = {
  server: app,
  start: (port) => app.listen(port, () => console.log(`Server up on port ${port}`) ),
};

// ========== CLASS NOTES ==========

// const express = require('express');
// const categoryRouter = expresss.Router();

// const Categories = require('../models/categories-model');
// const categories = new Categories;

// //grab all categories that we have saved
// categoryRouter.get('/categories', handleGet);

// //grab a single category by id
// categoryRouter.get('/categories/:categoryId', handleGet)

// categories.post('/categories', handlePost);

// function handleGet() {
//   let filter = {};
//   if (req.params.categoryId){
//     filter.id = req.params.categoryId;
//   }

//   categories.get(filter)
//   .then(data =>{
//     res.send(data);
//   }).catch(err => {
//     console.error(err)
//     res.send(err);
//   })
// }

// function handlePost(req, res, next){
//   // const newCategory = 
// }