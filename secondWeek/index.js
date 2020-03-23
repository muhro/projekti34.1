'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./model/db');
const cat = require('./model/cat');
app.use(express.urlencoded({extended: false}));
app.use('/cat', require('./route'));


app.get('/',async (req, res)=>{
    res.send(await cat.find());
});

db.on('connected', () => {
    app.listen(3000);
});
