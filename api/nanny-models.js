const db = require('../data/dbConfig');

module.exports = {
    findAllNannies,
    createUser,
    updateUser,
    findNannyById
}

// 1. Create Users
function createUser(user){
    return db('users').insert({email: user.email, password: user.password, is_admin: user.is_admin})
}

//2. Update users
function updateUser(id, user) {
    return db('users').where({id: id}).update(user);
}

//3. Find All Nannies
function findAllNannies(){
    return db('nannies');
}

//4. Find Nanny by id
function findNannyById(id) {
    return db('nannies').where({id: id});
}