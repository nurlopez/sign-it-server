const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/User');

// HELPER FUNCTIONS
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
} = require('../helpers/middlewares');

//  GET    '/profile'
router.get('/profile', isLoggedIn, (req, res, next) => {
  console.log(req.session.currentUser);
  
  req.session.currentUser.password = '*';
  res.json(req.session.currentUser);
});

// POST '/profile/edit
router.put('/profile/:id/edit', async (req, res, next) => {
  const  userId = req.session.currentUser._id;
  // console.log(userId, 'y ahora?');
  const { username, password } = req.body;
    
try {
  const updatedProfile = await User.findByIdAndUpdate( userId , { username, password }, { new: true })
  res.status(200).json(updatedProfile);
} catch (err) {
  next(err)
}
})


 // DELETE '/profile/:id/remove

 router.delete('/profile/:id/remove', async (req, res, next) => {
  const  userId = req.session.currentUser._id;
      // console.log(req.params, '<< I want to delete this one')
try {
  await User.findByIdAndRemove( userId )
  // console.log(removedMySign)
  res.status(200).json('User has been deleted!');
} catch (err) {
  next(err)
}
})



//  POST    '/signup'
router.post(
  '/signup',
  isNotLoggedIn,
  validationLoggin,
  async (req, res, next) => {
    const { username, password } = req.body;

    try {
      // projection
      const usernameExists = await User.findOne({ username }, 'username');

      if (usernameExists) return next(createError(400));
      else {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPass = bcrypt.hashSync(password, salt);
        const newUser = await User.create({ username, password: hashPass });
        req.session.currentUser = newUser;
        res
          .status(200) //  OK
          .json(newUser);
      }
    } catch (error) {
      next(error);
    }
  },
);

//  POST    '/login'
router.post(
  '/login',
  isNotLoggedIn,
  validationLoggin,
  async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        next(createError(404));
      } else if (bcrypt.compareSync(password, user.password)) {
        req.session.currentUser = user;
        res.status(200).json(user);
        return;
      } else {
        next(createError(401));
      }
    } catch (error) {
      next(error);
    }
  },
);

//  POST    '/logout'
router.post('/logout', isLoggedIn, (req, res, next) => {
  const { username } = req.session.currentUser;
  req.session.destroy();
  res
    .status(200) //  No Content
    .json({ message: `User '${username}' logged out - session destroyed` });
  return;
});

//  GET    '/mysigns'   --> Only for testing - Same as /profile but it returns a message instead
router.get('/mysigns', isLoggedIn, (req, res, next) => {
  res
    .status(200) // OK
    .json({ message: 'Test - User is logged in' });
});

module.exports = router;