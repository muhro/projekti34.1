'use strict';
const currentModel = require('../models/current');

const current_list_get = async (req, res) => {
  try {
  const current = await currentModel.find();
  res.json(current);
  } catch (e){
    res.status(500).json({message: e})
  }
};

const current_get = async (req, res) => {
  try {
    const current = await currentModel.findById(req.params.id);
    res.json(current);
  } catch (e){
    res.status(500).json({message: e})
  }
};

const current_post = (req, res) => {
  res.send('With this endpoint you can add currents');
};

module.exports = {
  current_list_get,
  current_get,
  current_post,
};
