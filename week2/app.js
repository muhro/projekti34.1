'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.get('/cat', (req, res, next) => {
  res.send('From this endpoint you can get cats.')
  next()
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
