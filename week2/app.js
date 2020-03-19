'use strict';
const express = require('express');
const app = express();
const port = 3000;
const vastaus = 'You reqested a cat whose id is';


app.param(['id'], function (req, res, next, value) {
  console.log('You reqested a cat whose id is ', value)
  next()
});

app.get('/cat', (req, res,) => {
  res.send('From this endpoint you can get cats.')
});

app.get('/cat/:id', (req, res, next) => {
  res.end(vastaus, req.params.id)
});

app.post('/cat', (req, res) => {
  res.send('With this endpoint you can add cats.')
});

app.delete('/cat', (req, res) =>{
  res.send('With this endpoint you can delete cats.')
});

app.put('/cat', (req, res) =>{
  res.send('With this endpoint you can edit cats.')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
