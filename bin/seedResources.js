const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/mongoose-movies-development');
require('dotenv').config();

const Resources = require('../models/Resources');
// require the Picto API

const resourcesSigns = [

    {
        category: 'letters', 
        imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/A.png', 
        meaning: 'A',
        pictoURL: ''
    },
    {
        category: 'letters', 
        imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576494078/resources-letters/B.png', 
        meaning: 'B',
        pictoURL: ''
    },
    {
        category: 'letters', 
        imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576494078/resources-letters/C.png', 
        meaning: 'C',
        pictoURL: ''
    },

    {
      category: 'letters', 
      imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576494078/resources-letters/D.png', 
      meaning: 'D',
      pictoURL: ''
  },

  {
    category: 'letters', 
    imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/E.png', 
    meaning: 'E',
    pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/F.png', 
  meaning: 'F',
  pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/G.png', 
  meaning: 'G',
  pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/H.png', 
  meaning: 'H',
  pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/I.png', 
  meaning: 'I',
  pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/J.png', 
  meaning: 'J',
  pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/K.png', 
  meaning: 'K',
  pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/L.png', 
  meaning: 'L',
  pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/M.png', 
  meaning: 'M',
  pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/N.png', 
  meaning: 'N',
  pictoURL: ''
},

{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/N.png', 
  meaning: 'O',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/P.png', 
  meaning: 'P',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/Q.png', 
  meaning: 'Q',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/R.png', 
  meaning: 'R',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/S.png', 
  meaning: 'S',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/T.png', 
  meaning: 'T',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/U.png', 
  meaning: 'U',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/V.png', 
  meaning: 'V',
  pictoURL: ''
},
  
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/W.png', 
  meaning: 'W',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/X.png', 
  meaning: 'X',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547954/resources-letters/Y.png', 
  meaning: 'Y',
  pictoURL: ''
},
{
  category: 'letters', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576547955/resources-letters/Z.png', 
  meaning: 'Z',
  pictoURL: ''
},
{
  category: 'greetings', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576543162/resources-greetings/good-morning.gif', 
  meaning: 'Good Morning',
  pictoURL: ''
},
{
  category: 'greetings', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576543162/resources-greetings/good-morning.gif',  
  meaning: 'Good Morning',
  pictoURL: ''
},
{
  category: 'greetings', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576543162/resources-greetings/good-afternoon.gif', 
  meaning: 'Good Afternoon',
  pictoURL: ''
},
{
  category: 'greetings', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576543162/resources-greetings/good-night.gif', 
  meaning: 'Good Night',
  pictoURL: ''
},
{
  category: 'greetings', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576543162/resources-greetings/hello.gif', 
  meaning: 'Hello',
  pictoURL: ''
},

{
  category: 'greetings', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576543162/resources-greetings/good-bye.gif', 
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
},

{
  category: 'transport', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576718750/resources-transport/car.gif', 
  meaning: 'Car',
  pictoURL: ''
}, 

{
  category: 'transport', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576718385/resources-transport/moto.gif', 
  meaning: 'Moto',
  pictoURL: ''
}, 

{
  category: 'transport', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576718377/resources-transport/bicycle.gif', 
  meaning: 'Bicycle',
  pictoURL: ''
}, 

{
  category: 'transport', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576718374/resources-transport/aeroplane.gif', 
  meaning: 'Aeroplane',
  pictoURL: ''
}, 

{
  category: 'transport', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576718374/resources-transport/bus.gif', 
  meaning: 'Bus',
  pictoURL: ''
}, 

{
  category: 'transport', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576718374/resources-transport/aeroplane.gif', 
  meaning: 'Aeroplane',
  pictoURL: ''
}, 

{
  category: 'transport', 
  imgURL: 'https://res.cloudinary.com/dv6jvxllp/image/upload/v1576718374/resources-transport/metro.gif', 
  meaning: 'Metro',
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