var express = require('express');
var router = express.Router();
var query = require('../db/query')

/* GET home page. */
router.get('/', getIndexPage);
router.get('/post/:id', showSinglePost);

function getIndexPage(req, res, next) {
  res.render('index', { title: 'Express' });
})

function showSinglePage(req, res, next) {
  query.getSinglePost(req.params.id)
  .then(function(data) {
    res.render('index', {
      data:data[0]
    })
  })
}

module.exports = router;
