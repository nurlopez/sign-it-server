const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/mongoose-movies-development');

const Resources = require('../models/resources');
const MySigns = require('../models/mysigns')
// require the Picto API

const Pictos = [ 
    {
        keyword: string,
        pictoURL: string
    }
]