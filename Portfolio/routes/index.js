var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Projects' });
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
router.get('/services', function(Services, res, next) {
  res.render('services', { title: 'Services' });
});
router.get('/contact', function(Services, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;