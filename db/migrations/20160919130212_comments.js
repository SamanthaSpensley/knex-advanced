
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.text('content');
    table.integer('author_id').references('id').inTable('users').onDelete('CASCADE'); //onDelete('CASCADE') when user is deleted, deletes all comments by user
    table.integer('post_id').references('id').inTable('posts');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');

};
