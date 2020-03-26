'use strict';
const levelModel = require('../models/level');

const level_list_get = async (req, res) => {
  try {
  const level = await levelModel.find();
  res.json(level);
  } catch (e){
    res.status(500).json({message: e})
  }
};

const level_get = async (req, res) => {
  try {
    const level = await levelModel.findById(req.params.id);
    res.json(level);
  } catch (e){
    res.status(500).json({message: e})
  }
};

const level_post = (req, res) => {
  res.send('With this endpoint you can add levels');
};

module.exports = {
  level_list_get,
  level_get,
  level_post,
};
