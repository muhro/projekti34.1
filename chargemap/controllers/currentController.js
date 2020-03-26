'use strict';
const connectionModel = require('../models/connection');

const connection_list_get = async (req, res) => {
  try {
  const connection = await connectionModel.find();
  res.json(connection);
  } catch (e){
    res.error(e.message)
  }
};

const connection_get = async (req, res) => {
  try {
    const connection = await connectionModel.findById(req.params.id);
    res.json(connection);
  } catch (e){
    res.error(e.message)
  }
};

const connection_post = (req, res) => {
  res.send('With this endpoint you can add connections');
};

module.exports = {
  connection_list_get,
  connection_get,
  connection_post,
};
