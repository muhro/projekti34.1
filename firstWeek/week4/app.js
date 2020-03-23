'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const passport = require('./utils/pass');
const authRoute = require('./routes/authRoute');
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');

app.use(cors());


app.listen(port, () => console.log(`Example app listening on port ${port}!`));


app.use('/cat', passport.authenticate('jwt', {session: false}), authRoute);
app.use('/user', passport.authenticate('jwt', {session: false}), authRoute);
app.use(passport.initialize());
app.use(passport.session());

