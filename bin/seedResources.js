const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/mongoose-movies-development');

const Resources = require('../models/resources');
// require the Picto API

const resourcesSigns = [

    {
        category: 'letters', 
        imgURL: 'link to image', // check this cloudinary
        meaning: 'A',
        pictoURL: 'link to picto API'
    },
    {
        category: 'letters', 
        imgURL: 'link to image', // check this cloudinary
        meaning: 'B',
        pictoURL: 'link to picto API'
    },
    {
        category: 'letters', 
        imgURL: 'link to image', // check this cloudinary
        meaning: 'C',
        pictoURL: 'link to picto API'
    }

]

mongoose
  .connect(process.env.MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
  })
  .then(() => {
    return Resources.create(resourcesSigns);
  })
  .then(insertedResourcesSigns => {
    console.log('Inserted resourcesSigns:', insertedResourcesSigns.length);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));