const express = require('express');
const router = express.Router();
const Parent = require('./nanny-models');
const bodyParser    = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))


// const bcrypt = require('bcryptjs');


// const cookielock = require('./authenticate-middleware');

//Get all Parents
router.get('/', (req, res) => {
  Parent.findAllParents()
  .then(data => {
    res.status(200).json(data);
  })
})

//Get parent by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Parent.findParentsById(id)
    .then(parent => {
        res.status(200).json(parent)
    })
    .catch(err => {
        res.status(501).json({message: `Couldn't get this parent's info, and here's why: ${err.message}`})
    })
})

//Create new parent
router.post('/register', (req, res) => {
    // const nanny = {lname: "Justin", fname: "Paradise", skill1: "Fishing", can_drive: true, first_aid: true, address: "That Place", phone: "109090", nanny_id: 1, };
    const parent = req.body;
    Parent.createParent(parent)
    .then(() => {
        res.status(201).json({message: `New parent named ${parent.fname} created!`})
    })
    .catch(err => {
        res.status(501).json({message: `Something went wrong. The error is: ${err.message}`})
    })
})

//Edit/Update Parent
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedParent = req.body;
    Parent.updateParent(id, updatedParent)
    .then(() => {
        res.status(201).json({message: `Excellent! ${updatedParent.fname} has been updated!`});
    })
    .catch(err => {
        res.status(500).json({message: `Something went seriously tits up: ${err.message}`})
    })
})

//Delete nanny
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Parent.deleteParent(id)
    .then(() => {
        res.status(201).json({message: `Parent number ${id} successfully deleted!`})
    })
    .catch(err => {
        res.status(500).json({message: `That deletion did not quite work out. Hm. ${err.message}`})
    })

})



module.exports = router;
