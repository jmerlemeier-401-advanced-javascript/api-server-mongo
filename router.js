'use strict';

const express = require('express');

const router = express.Router(); 

router.get('/posts/:postId/:banana', (req, res) => {
  //req.params is an object
  const { postId, banana } = req.params;
  //simple type whatever info in th eurl after /posts/ and it will append to the page.
  res.send(`you have requested post number: ${postId}, and your banana is ${banana}`);
});

router.get('/posts', (req, res) => {
  const { postId } = req.query;
  res.send(`You search query is ${req.query.postId}`);
})

module.exports = router;