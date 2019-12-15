const express = require('express');
var router = express.Router();


const Resources = require('../models/resources');


// GET /resources  

router.get('/', (req, res, next) => {
  Resources.find() 
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      })
  })
  
  
  
  // GET /resources/category  
  
  // router.get('/:category', (req, res, next) => {
  // });
  
  module.exports = router;