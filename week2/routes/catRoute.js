'use strict';
// catRoute
const express = require('express');
const router = express.Router();

/*
router.param(['id'], function (req, res, value,) {
    console.log('You reqested a cat whose id is ', value)
});*/
router.get('/', (req, res,) => {
    res.send('endpoint')
});
router.get('/', (req, res,) => {
    res.send('From this endpoint you can get cats.')
});

router.get('/:id', (req, res) => {
    const vastaus = 'You reqested a cat whose id is ';
    let id = vastaus + req.params.id;
    res.send(id)
});

router.post('/', (req, res) => {
    res.send('With this endpoint you can add cats.')
});

router.delete('/', (req, res) =>{
    res.send('With this endpoint you can delete cats.')
});

router.put('/', (req, res) =>{
    res.send('With this endpoint you can edit cats.')
});
module.exports = router
