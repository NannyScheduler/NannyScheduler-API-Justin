const db = require('../data/dbConfig');

module.exports = {
    findAllNannies,
    createUser,
    findUserById,
    updateUser,
    deleteUser,
    findAllUsers,
    findNannyById,
    createNanny,
    updateNanny,
    deleteNanny,
    findNannyByCity,
    findAllParents,
    findParentsById,
    createParent,
    updateParent,
    deleteParent,
    loginParent,


}

// 1. Create Users
function createUser(user) {
    return db('users').insert(user)
}

//2. Update users
function updateUser(id, user) {
    return db('users').where({ id: id }).update(user);
}

//3. Delete Users 
function deleteUser(id) {
    return db('users').where({ id: id }).del()
}

//4. Get list of users
function findAllUsers() {
    return db('users');
}

//5. Get user by id
function findUserById(id) {
    return db('users').where({ id: id });
}


// ------------------- THIS IS NANNY STUFF  ---------------------------
//1. Find All Nannies
function findAllNannies() {
    return db('nannies');
}

//2. Find Nanny by id
function findNannyById(id) {
    return db('nannies').where({ id: id });
}

// 3. Create new nanny
function createNanny(nanny) {
    return db('nannies').insert(nanny)
}

//4. Update nanny
function updateNanny(id, nanny) {
    return db('nannies').where({ id: id }).update(nanny);
}

//5. Delete Nanny
function deleteNanny(id) {
    return db('nannies').where({ id: id }).del()
}

//6. Find nanny by city
//2. Find Nanny by id
async function findNannyByCity(city) {
    const nannyByCity = await db('nannies').where({city: city});
    return nannyByCity;
}

//---------------- END OF NANNY STUFF, START OF PARENTS STUFF --------------------------
//1. Find All Parents
function findAllParents() {
    return db('parents');
}

//2. Find Parent by id
function findParentsById(id) {
    return db('parents').where({ id: id });
}

// 3. Create new Parent
function createParent(nanny) {
    return db('parents').insert(nanny)
}

//4. Update Parent
function updateParent(id, nanny) {
    return db('parents').where({ id: id }).update(nanny);
}

//5. Delete Parent
function deleteParent(id) {
    return db('parents').where({ id: id }).del()
}

//6. Login parent
function loginParent(email){
    return db('parents')
    .where({email})
    .first();
}
