'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./database/db');
const stationRoute = require('./routes/stationRoute');
const connectionRoute = require('./routes/connectionRoute');
const currentRoute = require('./routes/currentRoute');
const levelRoute = require('./routes/levelRoute');
const connectionsRoute = require('./routes/connectionsRoute');


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/connections', connectionsRoute);
app.use('/station', stationRoute);
app.use('/connection', connectionRoute);
app.use('/current', currentRoute);
app.use('/level', levelRoute);

db.on('connected', () => {
  app.listen(3000);
});
