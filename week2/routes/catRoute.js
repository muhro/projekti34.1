'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');
const multer  = require('multer');
const upload = multer({ dest: '../uploads/' });

const app = express();

app.post('/', upload.single('avatar'), (req, res, next) =>{
});
app.post('/', upload.array('cat', 12), function (req, res, next) {
});
const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'cat', maxCount: 8 }])
app.post('/', cpUpload, function (req, res, next) {
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
    console.log(req.body)
});

router.delete('/', (req, res) =>{
    res.send('With this endpoint you can delete cats.')
});

router.put('/', (req, res) =>{
    res.send('With this endpoint you can edit cats.')
});
module.exports = router;
