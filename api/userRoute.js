const express = require('express');
const router = express.Router();
const User = require('./nanny-models');
const bodyParser    = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))


// const bcrypt = require('bcryptjs');


// const cookielock = require('./authenticate-middleware');

//Handle POST requests that lead to registration
router.post('/register', (req, res) => {
    const user = req.body;
  User.createUser(user)
  .then(() => {
    res.status(200).json({message: `You just registered with ${user.email}!`});
  })
  .catch(err=> {
      res.status(501).json({message: `Some deep SQL shit just went down, fam: ${err.message}`})
  })
})

//Handle PUT requests that lead to profile updating 
router.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    User.updateUser(id, updatedUser)
    .then(() => {
        res.status(201).json({message: `Excellent! User with email ${updatedUser.email} has been updated!`});
    })
    .catch(err => {
        res.status(500).json({message: `Something went seriously tits up: ${err.message}`})
    })
})

router.get('/', (req, res) => {
    User.findAllUsers()
    .then(users => {
        res.status(201).json(users)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    User.deleteUser(id)
    .then(() => {
        res.status(201).json({message: `User deleted!`})
    })
    .catch(err => {
        res.status(501).json(err.message);
    })
})





module.exports = router;
