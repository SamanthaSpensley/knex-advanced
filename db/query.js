var bcrypt = require('bcrypt');
var knex = require('./knex.js');

function Users() {
  return knex('users');
}

function Posts() {
  return knex('posts');
}

function Comments() {
  return knex('Comments');
}

module.exports = {
  getAllUsers: Users,
  getAllPosts: Posts,
  getAllComments: Comments,
  getSinglePost: function(id) {
    return Posts().where('id', id)
  },
  getNumberOfPosts: function() {
    return knex.raw(SELECT COUNT(*) FROM posts);
  },
  getAllUserInteraction: function(id) {
    return Users().where('id', id)
    .then(function(userData) {
      userData = userData[0];
      return Posts().where('user_id', id)
      .then(function(postData) {
        userData.posts = postData;
        return Comments().where('user_id', id)
        .then(function(commentData) {
          userData.comments = commentData;
          return userData;
        })
      })
    })
  }
};
