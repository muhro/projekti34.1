'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./database/db');
const stationRoute = require('./routes/stationRoute');
const connectionRoute = require('./routes/connectionRoute');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/station', stationRoute);
app.use('/connection', connectionRoute);

db.on('connected', () => {
  app.listen(3000);
});
