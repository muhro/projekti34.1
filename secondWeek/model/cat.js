const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const gender = ['M','F'];
const color = [];

const catSchema = new Schema({
    name: String,
    age: Number,
    owner: mongoose.ObjectId,
    /*
   gender:  { type: String, enum: gender },
   color: String,
   weight: Number
   */
});

module.exports = mongoose.model('cat', catSchema);
