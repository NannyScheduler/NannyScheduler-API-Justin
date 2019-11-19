const express = require('express');
const router = express.Router();
const User = require('./nanny-models');


// const bcrypt = require('bcryptjs');


// const cookielock = require('./authenticate-middleware');


router.post('/register', (req, res) => {
    const user = req.body;
  User.createUser(user)
  .then(data => {
    res.status(200).json(data);
  })
})





module.exports = router;
