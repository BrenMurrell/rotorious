exports.seed = function (knex, Promise) {
  return knex('items').del()
    .then(function () {
      return Promise.all([
        knex('items').insert({id: 99901, name: 'a thing', description: 'item description'}),
        knex('items').insert({id: 99902, name: 'thing 2', description: 'a thing with some stuff'}),
        knex('items').insert({id: 99903, name: 'thing 3', description: 'put this stuff here'}),
        knex('items').insert({id: 99904, name: 'thing 4', description: 'and this one is different'}),
        knex('items').insert({id: 99905, name: 'thing 5', description: 'thing two of three things'})
      ]);
    });
};
