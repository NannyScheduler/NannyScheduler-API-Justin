const helper = require('./nanny-models');
const bcrypt = require('bcryptjs');
module.exports = {
    bcryptEncoding,
}


function bcryptEncoding(req, res, next) {
    const { username, password } = req.body;
  
    if (username && password) {
      helper.login(username)
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
