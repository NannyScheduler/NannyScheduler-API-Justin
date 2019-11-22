const helper = require('./nanny-models');
const bcrypt = require('bcryptjs');
module.exports = {
    bcryptEncoding,
    CookieAuth
}


function bcryptEncoding(req, res, next) {
    const { email, password } = req.body;
  
    if (email && password) {
      helper.login(email)
        .then(user => {
          if (user && bcrypt.compareSync(password, user.password)) {
            next();
          } else {
            res.status(401).json({ message: 'Invalid Credentials' });
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Unexpected error', error });
        });
    } else {
      res.status(400).json({ message: 'No credentials provided' });
    }
  }

  function CookieAuth(req, res, next) {
    if (req.session) {
        next();
      } else {
        res.status(401).json({ message: 'you shall not pass!!' });
      }
  }

