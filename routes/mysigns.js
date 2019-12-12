const express = require('express');
const router = express.Router();

const createError = require('http-errors');
// const User = require('../models/user');
const MySigns = require('../models/mysigns')



//  POST    '/create-sign'
router.post(
  '/create-sign', (req, res, next) => {
      
    const createdMySign = new MySigns({
        imgURL: req.body.imgURL,
        meaning: req.body.meaning,
        pictoURL: req.body.pictoURL,
        author: req.session.currentUser._id
      });
    
      createdMySign.save()
            .then( (sign) => {
          // User.update({_id: req.session.currentUser._id},
          //   {
          //     $addToSet: {mySigns: sign},
          //   })
            res.json(sign)
        } )
        .catch( (err) => console.log(err)); 
        
    });  

//  POST    '/view'
router.get('/', (req, res, next) => {
  MySigns.find() 
      .then(sign => {
        res.json(sign);
      })
      .catch(err => {
        res.json(err);
      })
  })
    

//  GET '/:id'
router.get('/:id', (req, res, next) => {

    const  mySignId = req.params.id

    MySigns.findById(mySignId ) 
      .then((signFound) => {
        res.json(signFound);
      })
      .catch(err => {
        res.json(err);
      })
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