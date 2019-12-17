const express = require('express');
const router = express.Router();

const createError = require('http-errors');
// const User = require('../models/user');
const MySigns = require('../models/Mysigns')
const User = require('../models/User')

const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
} = require('../helpers/middlewares');


//  POST    '/create-sign'
router.post(
  '/create-sign', isLoggedIn, async (req, res, next) => {
      console.log('hola2', req.session.currentUser);
      
    const newMySign = {
        imgURL: req.body.imgURL,
        meaning: req.body.meaning,
        pictoURL: req.body.pictoURL,
        author: req.session.currentUser._id
      };
    
      
      try {
        const sign = await MySigns.create(newMySign)
        // console.log('added sign', sign)
        res.status(200).json(sign)
      } catch (error) {
        next (error)
      }
    });  

//  POST    '/view'
router.get('/', async (req, res, next) => {
  
  try {
    const allSigns = await MySigns.find() 
    res.status(200).json(allSigns)
  } catch (error) {
    next (error)
  }

  })
    

//  GET '/:id'
router.get('/:id', async (req, res, next) => {
  const  mySignId = req.params.id
    
  try {
      const signFound = await MySigns.findById(mySignId ) 
      res.status(200).json(signFound)
  } catch (error) {
    next (error)
  }
  })
    

  // PUT '/:id/edit

  router.put('/:id/edit', async (req, res, next) => {
    const  mySignId = req.params.id

    const { imgURL, meaning, pictoURL } = req.body

  try {
    const updatedMySign = await MySigns.findByIdAndUpdate( mySignId , { imgURL, meaning, pictoURL }, { new: true })
    res.status(200).json(updatedMySign);
  } catch (err) {
    next(err)
  }
})

 // DELETE '/:id/remove

 router.delete('/:id/remove', async (req, res, next) => {
  const  mySignId = req.params.id
      // console.log(req.params, '<< I want to delete this one')
try {
  await MySigns.findByIdAndRemove( mySignId )
  // console.log(removedMySign)
  res.status(200).json('Sign-card has been deleted!');
} catch (err) {
  next(err)
}
})






module.exports = router;