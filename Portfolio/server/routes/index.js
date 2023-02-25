var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index.js');


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('home', { title: 'Home' });
// });
// router.get('/home', function(req, res, next) {
//   res.render('home', { title: 'Home' });
// });
// router.get('/about', function(req, res, next) {
//   res.render('about', { title: 'Projects' });
// });
// router.get('/projects', function(req, res, next) {
//   res.render('projects', { title: 'Projects' });
// });
// router.get('/services', function(Services, res, next) {
//   res.render('services', { title: 'Services' });
// });
// router.get('/contact', function(Services, res, next) {
//   res.render('contact', { title: 'Contact' });
// });
// router.get('/projects_details', function(Services, res, next) {
//   res.render('projects_details', { title: 'Projects-detsils' });
// });

// router.get('/login', function(Services, res, next) {
//   res.render('auth/login', { title: 'Projects-detsils' });
// });

// router.get('/register', function(Services, res, next) {
//   res.render('auth/register', { title: 'Projects-detsils' });
// });

// router.get('/list', function(Services, res, next) {
//   res.render('business-contact/list', { title: 'Projects-detsils' });
// });

// module.exports = router;



/* GET home page. */
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

router.get('/about', indexController.displayAboutPage);

router.get('/projects', indexController.displayProjectsPage);

router.get('/projects_details', indexController.displayProjectsPage);

router.get('/services', indexController.displayServicesPage);

router.get('/contact', indexController.displayContactPage);

// GET ROUTER FOR DISPLAYING THE LOGIN PAGE
router.get('/login', indexController.displayLoginPage);

// POST ROUTER FOR PROCESSING THE LOGIN PAGE
router.post('/login', indexController.processLoginPage);

// GET ROUTER FOR DISPLAYING THE REGISTER PAGE
router.get('/register', indexController.displayRegisterPage);

// POST ROUTER FOR PROCESSING THE REGISTER PAGE
router.post('/register', indexController.processRegisterPage);

// GET TO PERFORM USER LOGOUT
router.get('/logout', indexController.performLogout);

module.exports = router;
