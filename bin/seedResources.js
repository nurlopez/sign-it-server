const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/mongoose-movies-development');
require('dotenv').config();
const Resources = require('../models/Resources');
// require the Picto API

const resourcesSigns = [

    {
        category: 'letters', 
        imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/A.png', // check this cloudinary
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
  },

  {
    category: 'letters', 
    imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/E.png', // check this cloudinary
    meaning: 'E',
    pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/F.png', // check this cloudinary
  meaning: 'F',
  pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/G.png', // check this cloudinary
  meaning: 'G',
  pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/H.png', // check this cloudinary
  meaning: 'H',
  pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/I.png', // check this cloudinary
  meaning: 'I',
  pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/J.png', // check this cloudinary
  meaning: 'J',
  pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/K.png', // check this cloudinary
  meaning: 'K',
  pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/L.png', // check this cloudinary
  meaning: 'L',
  pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/M.png', // check this cloudinary
  meaning: 'M',
  pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/N.png', // check this cloudinary
  meaning: 'N',
  pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/N.png', // check this cloudinary
  meaning: 'O',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/P.png', // check this cloudinary
  meaning: 'P',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/Q.png', // check this cloudinary
  meaning: 'Q',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/R.png', // check this cloudinary
  meaning: 'R',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/S.png', // check this cloudinary
  meaning: 'S',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/T.png', // check this cloudinary
  meaning: 'T',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/U.png', // check this cloudinary
  meaning: 'U',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/V.png', // check this cloudinary
  meaning: 'V',
  pictoURL: ''
},
  
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/W.png', // check this cloudinary
  meaning: 'W',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/X.png', // check this cloudinary
  meaning: 'X',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/Y.png', // check this cloudinary
  meaning: 'Y',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/Z.png', // check this cloudinary
  meaning: 'Z',
  pictoURL: ''
},
{
  category: 'greetings', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576543162/resources-greetings/good-morning.gif', // check this cloudinary
  meaning: 'Good Morning',
  pictoURL: ''
},
{
  category: 'greetings', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576543162/resources-greetings/good-morning.gif', // check this cloudinary
  meaning: 'Good Morning',
  pictoURL: ''
},
{
  category: 'greetings', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576543162/resources-greetings/good-afternoon.gif', // check this cloudinary
  meaning: 'Good Afternoon',
  pictoURL: ''
},
{
  category: 'greetings', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576543162/resources-greetings/good-night.gif', // check this cloudinary
  meaning: 'Good Night',
  pictoURL: ''
},
{
  category: 'greetings', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576543162/resources-greetings/hello.gif', 
  pictoURL: ''
},

{
  category: 'greetings', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576543162/resources-greetings/good-bye.gif', // check this cloudinary
  meaning: 'Goodbye',
  pictoURL: ''
},
  
{
  category: 'greetings', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576543162/resources-greetings/your-name.gif', 
  meaning: 'What\'s your name?',
  pictoURL: ''
},

{
  category: 'greetings', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576543162/resources-greetings/thank-you.gif', 
  meaning: 'Thank you',
  pictoURL: ''
},
  
{
  category: 'greetings', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576543162/resources-greetings/you-are-welcome.gif', 
  meaning: 'You\'re welcome',
  pictoURL: ''
},

{
  category: 'greetings', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576543162/resources-greetings/sorry.gif', 
  meaning: 'Sorry',
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