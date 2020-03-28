'use strict';
// connectionTypesRoute
const express = require('express');
const router = express.Router();
const connectionTypesController = require('../controllers/connectionController');

router.get('/', connectionTypesController.connectionTypes_list_get);

router.get('/:id', connectionTypesController.connectionTypes_get);

router.post('/', connectionTypesController.connectionTypes_post);

module.exports = router;
