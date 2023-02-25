let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let businessContactController = require('../controllers/business-contact');

// HELPER FUNCTION FOR GUARD PURPOSES
function requireAuth(req, res, next) {
    // CHECK IF USER IS LOGGED IN
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
};

// connect to our books model
//let Book = require('../models/books');
//GET ROUTE for the book list page - READ Operation
router.get('/', businessContactController.displayBusinessContactsList);

/*GET ROUTE for displaying the Add Page - CREATE Operation*/
router.get('/add',requireAuth,businessContactController.displayAddPage);

/* POST Route for processing the Add Page - CREATE Operation*/
router.post('/add', requireAuth, businessContactController.processAddPage);

/* GET Route for displaying the Edit page- Update Operation*/

router.get('/edit/:id',requireAuth,businessContactController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE operation*/

router.post('/edit/:id',requireAuth,businessContactController.processEditPage);

/* GET to perform Deletion - DELETE Operation*/
router.get('/delete/:id',requireAuth,businessContactController.performDelete);

module.exports = router;
