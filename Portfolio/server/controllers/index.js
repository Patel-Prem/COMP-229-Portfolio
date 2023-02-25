let express = require('express');
const passport = require('passport');
let router = express.Router();
// CREATE THE USER MODEL INSTANCE
let UserModel = require('../models/user');
let User = UserModel.User;

module.exports.displayHomePage = (req, res, next) => {
    res.render('home', {title:'Home', displayName:req.user?req.user.displayName:""});
};

module.exports.displayAboutPage= (req, res, next) => {
    res.render('about', {title:'About', displayName:req.user?req.user.displayName:""});
};

module.exports.displayProjectsPage= (req, res, next) => {
    res.render('projects', {title:'Projects', displayName:req.user?req.user.displayName:""});
};

module.exports.displayProjectsDetailsPage= (req, res, next) => {
    res.render('projects_details', {title:'Projects-Details', displayName:req.user?req.user.displayName:""});
};

module.exports.displayServicesPage= (req, res, next) => {
    res.render('services', {title:'Services', displayName:req.user?req.user.displayName:""});
};

module.exports.displayContactPage= (req, res, next) => {
    res.render('contact', {title:'Contact', displayName:req.user?req.user.displayName:""});
};

module.exports.displayLoginPage= (req, res, next) => {
    // CHECK IF USER IS ALREADY LOGGED IN
    if(!req.user)
    {
        res.render('auth/login', 
        {
            title:'Login', 
            message: req.flash('loginMessage'), 
            displayName:req.user?req.user.displayName:''
        });
    }
    else
    {
        return res.redirect('/');
    }
};

module.exports.processLoginPage= (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        // SERVER ERROR
        if(err)
        {
            return next(err);
        }
        // IS THERE A USER LOGIN ERROR?
        if(!user)
        {
            req.flash('loginMessage','Authenticate Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            // SERVER ERROR?
            if(err)
            {
                return next(err);
            }
            return res.redirect('/businessContactList');
        });
    })(req, res, next);
};

module.exports.displayRegisterPage= (req, res, next) => {
    // CHECK IF THE USER IS NOT ALREADY LOGGED IN
    if(!req.user)
    {
        res.render('auth/register', 
        {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user?req.user.displayName:''
        }
        );
    }
    else
    {
        return res.redirect('/');
    }
};

module.exports.processRegisterPage = (req, res, next) => {
    // INSTANTIATE A USER OBJECT
    console.log(req.body)
    let newUser = new User({
        username: req.body.username,
        // password: req.body.password,
        email:req.body.email,
        displayName: req.body.displayName
    });
    User.register(newUser,req.body.password,(err) => {
        if(err)
        {
            console.log("Error Inserting New User");
            console.log(err)
            console.log("Error Inserting New User");
            if(err.name=="UserExist Error")
            {
                req.flash('registerMessage', 'Registration Error: user Already Exists');
                console.log("Error:User Already Exixts")
            }
            return res.render('auth/register',
            {
                title: 'Register',
                messages:req.flash('registerMessage'),
                displayName: ''
            });
        } 
        else
        {
            // IF NO ERROR EXISTS THEN REGISTRATION IS SUCCESSFULL THEN REDIREDT THE USER AND AUTHENTICATE
            return passport.authenticate('local') (req, res, () => {
                res.redirect('/businessContactList');
            });
        }
    });
};

module.exports.performLogout = (req, res, next) => {
    req.logout(function (err){
        if(err)
        {
            return next(err);
            res.redirect('/');
        }
    });
};