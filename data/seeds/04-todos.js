
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, name: 'Housecleaning', description: 'Sweep the house and mop the baby\'s head', completed: true, duration: '3 hours', parent_id: 1, nanny_id: 2,}
      ]);
    });
};
