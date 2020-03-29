'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./database/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const stationRoute = require('./routes/stationRoute');
const connectionRoute = require('./routes/connectionRoute');
const currentRoute = require('./routes/currentRoute');
const levelRoute = require('./routes/levelRoute');
const connectionsRoute = require('./routes/connectionsRoute');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const passport = require('./utils/passport');


app.use(cors());
app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); //for parsing application/x-www-form-urlencoded

app.use('/auth', authRoute);
app.use('/user', passport.authenticate('jwt', {session: false}), userRoute);
app.use('/connections', connectionsRoute);
app.use('/station', stationRoute);
app.use('/connection', connectionRoute);
app.use('/current', currentRoute);
app.use('/level', levelRoute);

db.on('connected', () => {
  app.listen(3000);
});
