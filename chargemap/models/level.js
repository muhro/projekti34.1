// https://docs.mongodb.com/manual/core/2dsphere/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const currentSchema = new Schema({
  //TODO: schema
    ConnectionTypeID: {
        Description: String,
        Title: String,
    },
    

});

module.exports = mongoose.model('current', currentSchema);
