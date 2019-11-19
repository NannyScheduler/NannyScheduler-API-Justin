const db = require('../data/dbConfig');

module.exports = {
    findAllNannies,
    createUser,
    updateUser
}

function createUser(user){
    return db('users').insert({email: user.email, password: user.password, is_admin: user.is_admin})
}

function updateUser(id, user) {
    return db('users').where({id: id}).update(user);
}

function findAllNannies(){
    return db('nannies');
}