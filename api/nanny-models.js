const db = require('../data/dbConfig');

module.exports = {
    findAllNannies,
}

function findAllNannies(){
    return db('nannies');
}