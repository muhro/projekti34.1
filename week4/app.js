'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const passport = require('./utils/pass');
const authRoute = require('./routes/authRoute');


app.use(cors());


app.use('/cat', passport.authenticate('jwt', {session: false}), authRoute);
app.use('/user', passport.authenticate('jwt', {session: false}), authRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
