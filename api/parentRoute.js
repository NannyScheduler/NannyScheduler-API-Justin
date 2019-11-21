const express = require('express');
const router = express.Router();
const Parent = require('./nanny-models');
const bodyParser    = require('body-parser');

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))


const bcrypt = require('bcryptjs');

//Log in Parents
router.post('/login', (req, res) => {
    const {password} = req.body;
    Parent.loginParent(req.body.email)
    .then(user => {
    if(!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({error: `Incorrect login details!`})
    } else {
        req.session.userID = user;
        return res.status(200).json({message: `Welcome, ${user.fname}!`})
    }
    })
  });

//Get Nanny by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Parent.findNannyById(id)
    .then(nanny => {
        res.status(200).json(nanny)
    })
    .catch(err => {
        res.status(501).json({message: `Couldn't get this parent's info, and here's why: ${err.message}`})
    })
})

//Get Nanny by City
router.get('/search', (req, res) => {
    Parent.findNannyByCity(req.query.city)
    .then(nanny => {
        res.status(200).json(nanny)
    })
    .catch(err => {
        res.status(501).json({message: `Couldn't get this nanny's info, and here's why: ${err.message}`})
    })
})

//Create new parent
router.post('/register', (req, res) => {
    const parent = req.body;
    const hash = bcrypt.hashSync(parent.password, 14);
    parent.password = hash;
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

//Delete parent
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

//Log out parent
router.get('/logout', (req, res) => {
    if (req.session) {
      req.session.destroy(err => {
        if (err) {
          res.send('error logging out');
        } else {
          res.send('good bye');
        }
      });
    }
  });


module.exports = router;
