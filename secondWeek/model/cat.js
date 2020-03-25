const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const gender = ['M','F'];
const color = [];

const catSchema = new Schema({
    name: String,
    age: Number,
    owner: {type: mongoose.ObjectId, ref: 'user'},
   gender:  { type: String, enum: gender },
   color: String,
   weight: Number
});

module.exports = mongoose.model('cat', catSchema);
