
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nannies').del()
    .then(function () {
      // Inserts seed entries
      return knex('nannies').insert([
        {id: 1, fname: 'Madame', lname: 'Peregrine', skill1: 'Cooking', skill2:'Doing the Kumbaya', skill3: 'Playing the harmonica', can_drive: true, first_aid: false, phone: '+1783676736476', address: '18, Pole Street, Benin City, Nigeria', img:'https://media.giphy.com/media/UqUJhrD0om73q/giphy.gif', lang: 'French and Yoruba', nanny_id: 1},
        {id: 2, fname: 'Madame', lname: 'Peregrine', skill1: 'Cooking', skill2:'Doing the Kumbaya', skill3: 'Playing the harmonica', can_drive: true, first_aid: false, phone: '+1783676736476', address: '18, Pole Street, Benin City, Nigeria', img:'https://media.giphy.com/media/UqUJhrD0om73q/giphy.gif', lang: 'French and Yoruba', nanny_id: 2},
        {id: 3, fname: 'Madame', lname: 'Peregrine', skill1: 'Cooking', skill2:'Doing the Kumbaya', skill3: 'Playing the harmonica', can_drive: true, first_aid: false, phone: '+1783676736476', address: '18, Pole Street, Benin City, Nigeria', img:'https://media.giphy.com/media/UqUJhrD0om73q/giphy.gif', lang: 'French and Yoruba', nanny_id: 3},
        {id: 4, fname: 'Madame', lname: 'Peregrine', skill1: 'Cooking', skill2:'Doing the Kumbaya', skill3: 'Playing the harmonica', can_drive: true, first_aid: false, phone: '+1783676736476', address: '18, Pole Street, Benin City, Nigeria', img:'https://media.giphy.com/media/UqUJhrD0om73q/giphy.gif', lang: 'French and Yoruba', nanny_id: 4},
        {id: 5, fname: 'Madame', lname: 'Peregrine', skill1: 'Cooking', skill2:'Doing the Kumbaya', skill3: 'Playing the harmonica', can_drive: true, first_aid: false, phone: '+1783676736476', address: '18, Pole Street, Benin City, Nigeria', img:'https://media.giphy.com/media/UqUJhrD0om73q/giphy.gif', lang: 'French and Yoruba', nanny_id: 5}
      ]);
    });
};
