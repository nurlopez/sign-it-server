const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourcesSignsSchema = new Schema(
    {
        category: {type: String, enum: ["letters", "transport", "greetings", "transport"], required: true}, 
        imgURL: {type: String, required: true}, 
        meaning:{type: String, required: true},
        pictoURL: {type: String}
//       }, {
//   timestamps: {
//     createdAt: 'created_at',
//     updatedAt: 'updated_at'
//   },
});

const ResourcesSigns = mongoose.model('ResourcesSigns', resourcesSignsSchema);

module.exports = ResourcesSigns;