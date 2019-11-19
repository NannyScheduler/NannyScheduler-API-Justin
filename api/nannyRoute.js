const router = require('express').Router();
const Nanny = require('./nanny-models');


// const bcrypt = require('bcryptjs');


// const cookielock = require('./authenticate-middleware');


router.get('/', (req, res) => {
  Nanny.findAllNannies()
  .then(data => {
    res.status(200).json(data);
  })
})



module.exports = router;
