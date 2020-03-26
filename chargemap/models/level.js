// https://docs.mongodb.com/manual/core/2dsphere/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const levelSchema = new Schema({
  //TODO: schema
    LevelType: {
        Title: String,
        Comments: String,
        IsFastChargeCapable: String,
    },
});

module.exports = mongoose.model('Level', levelSchema);
