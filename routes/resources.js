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
  
  
  // / GET '/:Id'   => to retrieve a specific signcard
// router.get('/:Id', (req, res, next) => {

//     //we have to deconstruct from the params. 
//     const { Id } = req.params;
// console.log('ups!',req.params)
//     // if ( !mongoose.Types.ObjectId.isValid(signCardId)) {
//     //     res.status(500).json({ message: 'Specified signCardId is invalid' });
//     //     return;
//     //   } 

//     Resources.findById( Id )
//         .then (foundResource => {
//             res.status(200).json(foundResource);
//         })
//         .catch(err=> {
//             res.status(400).json(err);
//         })
//     })

  // GET /resources/category  
  
  // router.get('/:category', (req, res, next) => {
  // });
  
  module.exports = router;