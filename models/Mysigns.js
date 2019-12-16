const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySignsSchema = new Schema(
    {
        imgURL: {type: String, required: true}, // check this cloudinary
        meaning:{type: String, required: true},
        pictoURL: {type: String},
        author: {type: Schema.Types.ObjectId,ref:'User'}
      }, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const MySigns = mongoose.model('MySigns', mySignsSchema);

module.exports = MySigns;