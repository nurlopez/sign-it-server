const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/mongoose-movies-development');
require('dotenv').config();
const Resources = require('../models/Resources');
// require the Picto API

const resourcesSigns = [

    {
        category: 'letters', 
        imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576494078/resources-letters/A.png', // check this cloudinary
        meaning: 'A',
        pictoURL: ''
    },
    {
        category: 'letters', 
        imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576494078/resources-letters/B.png', // check this cloudinary
        meaning: 'B',
        pictoURL: ''
    },
    {
        category: 'letters', 
        imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576494078/resources-letters/C.png', // check this cloudinary
        meaning: 'C',
        pictoURL: ''
    },

    {
      category: 'letters', 
      imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576494078/resources-letters/D.png', // check this cloudinary
      meaning: 'D',
      pictoURL: ''
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