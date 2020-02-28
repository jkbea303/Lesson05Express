var express = require('express');
var router = express.Router();
var sql = require('mysql2');
var models = require('../models');



router.get('/categories', function (req, res, next) {
  models.category.findAll({}).then(data => {
    res.render('categories', {
      categories: data
    });
  });
})
router.post('/categories', function (req, res, next) {
  models.category.findOrCreate({
    where: {
      name: req.body.name,
      default_price: req.body.default_price
    }
  })
    .spread(function (result, created) {
      if (created) {
        res.redirect('/categories');
      } else {
        res.render('categories', { warning: 'This category already exists!' });
      }
    });
});
router.get('/category/:id', function (req, res, next) {
  let categoryId = parseInt(req.params.id);
  models.category
    .findOne({
      where: {
        cateogry_id: categoryId
      }
    })
    .then(category => {
      if ('ID') {
      {res.render('ID', {
        category: category
      });
    }
    }
    else {res.render('category/:id', 
      categoryId, category)
    }
/* GET home page. */
 });
});
    router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
     
module.exports = router;
