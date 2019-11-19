const express = require('express');
const router = express.Router();
const Nanny = require('./nanny-models');
const bodyParser    = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))


// const bcrypt = require('bcryptjs');


// const cookielock = require('./authenticate-middleware');

//Get all nannies
router.get('/', (req, res) => {
  Nanny.findAllNannies()
  .then(data => {
    res.status(200).json(data);
  })
})

//Get nanny by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Nanny.findNannyById(id)
    .then(nanny => {
        res.status(200).json(nanny)
    })
    .catch(err => {
        res.status(501).json({message: `Couldn't get your nanny, and here's why: ${err.message}`})
    })
})

//Create new nanny
router.post('/register', (req, res) => {
    // const nanny = {lname: "Justin", fname: "Paradise", skill1: "Fishing", can_drive: true, first_aid: true, address: "That Place", phone: "109090", nanny_id: 1, };
    const nanny = req.body;
    Nanny.createNanny(nanny)
    .then(() => {
        res.status(201).json({message: `New nanny named ${nanny.fname} created!`})
    })
    .catch(err => {
        res.status(501).json({message: `Something went wrong. The error is: ${err.message}`})
    })
})

//Edit/Update Nanny
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedNanny = req.body;
    Nanny.updateNanny(id, updatedNanny)
    .then(() => {
        res.status(201).json({message: `Excellent! Nanny ${updatedNanny.fname} has been updated!`});
    })
    .catch(err => {
        res.status(500).json({message: `Something went seriously tits up: ${err.message}`})
    })
})

//Delete nanny
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Nanny.deleteNanny(id) 
    .then(() => {
        res.status(201).json({message: `Nanny number ${id} successfully deleted!`})
    })
    .catch(err => {
        res.status(500).json({message: `That deletion did not quite work out. Hm. ${err.message}`})
    })

})



module.exports = router;
