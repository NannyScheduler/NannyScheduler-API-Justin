const express = require('express');
const router = express.Router();
const Nanny = require('./nanny-models');


// const bcrypt = require('bcryptjs');


// const cookielock = require('./authenticate-middleware');


router.get('/', (req, res) => {
  Nanny.findAllNannies()
  .then(data => {
    res.status(200).json(data);
  })
})

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




module.exports = router;
