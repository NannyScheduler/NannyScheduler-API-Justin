const express = require('express');
const router = express.Router();
const Parent = require('./nanny-models');
const bodyParser    = require('body-parser');

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }));

const cookie = require('./middleware');
const auth = cookie.CookieAuth;


const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
    res.status(200).json({message: `this is the parent route`})
})

//Log in Parents
router.post('/login', (req, res) => {
    const {password, email} = req.body;
    if (email && password ) {
    Parent.loginParent(email)
    .then(user => {
    if(!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({error: `Incorrect login details!`})
    } 

    else {
        req.session.userID = user;
        return res.status(200).json({message: `Welcome, ${user.fname}!`})
    }
    })
}
else {
    return res.status(401).json({message: `email or password fields empty`})
}
  });

// Get Nanny by city
router.post('/', auth, (req, res) => {
    const city = req.query.city;
    Parent.findNannyByCity(city)
    .then(nanny => {
        res.status(200).json(nanny)
    })
    .catch(err => {
        res.status(501).json({message: `There are no nannies in ${city}.`})
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
        res.status(501).json({message: `Some critical fields missing.`})
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
