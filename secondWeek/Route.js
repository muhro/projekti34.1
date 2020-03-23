const router = require('express').Router();
const cat = require('./model/cat');

router.route('/')
 .post(async (req, res) => {
       const mycat = await cat.create({
           name: 'kisu',
           age: 12,
           gender:  'M',
           color: 'grey',
           weight: 12
       });
       res.send(`cat is created with ${mycat._id}`);
   })
   .get(async (req, res) => {
   res.send(await cat.find());
   });



router.route('/:id')
    .get(async (req, res) => {
        res.send(await cat.findById(req.params.id));
    })
    .patch(async (req, res) => {
        const mod = await cat.updateOne({ _id: req.params.id }, { title: req.body.title });
        res.status(200).send(`updated sucessfully ${mod.nModified} blog post`);
    })
    .delete(async (req, res) => {
        const del = await cat.deleteOne({ _id: req.params.id });
        res.send(`deleted ${del.deletedCount} blog post`);
    });

module.exports = router;
