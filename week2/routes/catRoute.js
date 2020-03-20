'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');
const multer  = require('multer');
const upload = multer({ dest: './uploads/' });

const app = express();

app.post('/', upload.single('name'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
});



const cpUpload = upload.fields([{ name: 'name', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {

});
router.get('/', catController.cat_list_get);

router.get('/:id', catController.cat_get);

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
module.exports = router;
