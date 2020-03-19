'use strict';
// userRoute
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

router.get('/', (req, res,) => {
    res.send('endpoint')
});
router.get('/', (req, res,) => {
    res.send('From this endpoint you can get users.')
});

router.get('/:id', (req, res) => {
    const vastaus = 'You reqested a users whose id is ';
    let id = vastaus + req.params.id;
    res.send(id)
});

router.post('/', (req, res) => {
    res.send('With this endpoint you can add users.')
});

router.delete('/', (req, res) =>{
    res.send('With this endpoint you can delete users.')
});

router.put('/', (req, res) =>{
    res.send('With this endpoint you can edit users.')
});
module.exports = router;
