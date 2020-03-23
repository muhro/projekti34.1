'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./model/db');
app.use(express.urlencoded({extended: false}));
app.use('/cat', require('./route'));


db.on('connected', () => {
    app.listen(3000);
});
