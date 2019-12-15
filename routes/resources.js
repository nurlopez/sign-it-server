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
  
  
  // / GET '/:id'   => to retrieve a specific id
router.get('/:id', (req, res, next) => {

  
    const resourceId = req.params.id
    console.log('testing' >> req.params)

    Resources.findById( resourceId ) 
    .then((signFound) => {
      res.json(signFound);
    })
    .catch(err => {
      res.json(err);
    })
})
  
  module.exports = router;