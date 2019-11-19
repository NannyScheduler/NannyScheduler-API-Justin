const db = require('../data/dbConfig');

module.exports = {
    findAllNannies,
    createUser,
}

function createUser(user){
    return db('users').insert({email: user.email, password: user.password, is_admin: user.is_admin})
}

function findAllNannies(){
    return db('nannies');
}