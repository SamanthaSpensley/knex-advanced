var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          id: 1,
          username: 'user1',
          password: bcrypt.hashSync('test', 10)
        }),
      ]);
    });
};

//ALTER SEQUENCE users_id_seq RESTART WITH 2 -- choose number AFTER number of seeded users
