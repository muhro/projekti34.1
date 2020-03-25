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
    const mycat = await cat.create({name: '', age: '', owner: '', gender: '', color: '', weight: ''});
    res.send('cat creted with id: ${mycat._id}')
});
app.post('/user', async(req, res) => {
    const myuser = await user.create({name: 'Mary', email: 'm@gmail.com', password: 'abc'});
    res.send('user creted with id: ${myuser._id}');
});

db.on('connected', () => {
    app.listen(3000);
});
