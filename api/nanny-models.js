const db = require('../data/dbConfig');

module.exports = {
    findAllNannies,
    createUser,
    updateUser,
    findNannyById,
    createNanny,
    updateNanny,
    deleteNanny,
}

// 1. Create Users
function createUser(user){
    return db('users').insert(user)
}

//2. Update users
function updateUser(id, user) {
    return db('users').where({id: id}).update(user);
}


// ------------------- THIS IS NANNY STUFF  ---------------------------
//3. Find All Nannies
function findAllNannies(){
    return db('nannies');
}

//4. Find Nanny by id
function findNannyById(id) {
    return db('nannies').where({id: id});
}

// Create new nanny
function createNanny(nanny){
    return db('nannies').insert(nanny)
}

//Update nanny
function updateNanny(id, nanny) {
    return db('nannies').where({id: id}).update(nanny);
}

//Delete Nanny
function deleteNanny(id, nanny) {
    return db('nannies').delete(nanny).where({id: id})
}