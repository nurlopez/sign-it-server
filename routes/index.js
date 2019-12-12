const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const mySignsRouter = require('./mysigns');
const resourcesRouter = require('./resources');

router.use('/auth', authRouter);
router.use('/mysigns', mySignsRouter);
router.use('/resources', resourcesRouter);

module.exports = router