'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./model/db');
const cat = require('./model/cat');
const user = require('./model/user');
app.use(express.urlencoded({extended: false}));
app.use('/cat', require('./route'));

app.get('/',async (req, res)=>{
    res.send(await cat.find());
});
app.post('/cat', async(req, res) => {
    const myCat = await cat.create({name: '', age: '', owner: '', gender: '', color: '', weight: ''});
    const text = 'cat created with id:';
    res.send(text, myCat._id)
});
app.post('/user', async(req, res) => {
    const myUser = await user.create({name: 'Mary', email: 'm@gmail.com', password: 'abc'});
    const text = 'user created with id:';
    res.send(text, myUser._id);
});
db.on('connected', () => {
    app.listen(3000);
});
