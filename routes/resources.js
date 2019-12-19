const express = require("express");
var router = express.Router();

const Resources = require("../models/Resources");

// GET /resources

router.get("/", (req, res, next) => {
  Resources.find()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET /resources/categories/letters

router.get("/categories/:category", async (req, res, next) => {
  const { category } = req.params;
  console.log('in backend', req.params)
  try {
    const categoryResult = await Resources.find({ category });
    res.status(200).json(categoryResult);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
