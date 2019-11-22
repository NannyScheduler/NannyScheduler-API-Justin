const express = require('express');
const router = express.Router();
const Nanny = require('./nanny-models');
const bodyParser    = require('body-parser');
const moment = require('moment');

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

//Validator
const validate = require('../validate');


const bcrypt = require('bcryptjs');


//Middleware
const Middleware = require('../api/middleware');

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
   let {
        fname,
        lname,
        can_drive,
        hourly_rates,
        phone,
        city,
        fromdate,
        todate,
        email,
        password
      } = req.body;
    //   const validator = validate.validateNanny(req.body);
    const hash = bcrypt.hashSync(password, 14);
    password = hash;
    const momentFromDate = moment(fromdate, "HH:mm:ss").format("hh:mm a");
    const momentToDate = moment(todate, "HH:mm:ss").format("hh:mm a");
    fromdate = momentFromDate;
    todate = momentToDate;
    // if (validator) {
    Nanny.createNanny(req.body)
    .then(() => {
        res.status(201).json({message: `New nanny named ${req.body.fname} created!`})
    })
    .catch(err => {
        res.status(501).json({message: `This nanny with email address ${email} already exists. Sorry!`})
    })
// }
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
