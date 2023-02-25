let express = require('express');
let router = express.Router();

// CREATE A REFERENCE TO THE DB SCHEMA WHICH IS THE MODEL 
let BC = require('../models/business-contacts');

// WE WANT TO DISPLAT THE BOOK LIST
module.exports.displayBusinessContactsList = (req, res, next) => {
    BC.find((err, businessContactList) => {
        if(err)
            return console.error(err);
        else
            res.render('businesscontact/list',{
                title:'Business Contact',
                businessContactList:businessContactList,
                displayName:req.user?req.user.displayName:""
            });
    }).sort({ name: 1 });
};

module.exports.displayAddPage = (req, res, next) => {
    res.render('businesscontact/add', {
        title:'Add Business Contact', 
        displayName:req.user?req.user.displayName:""
    });
};

module.exports.processAddPage = (req, res, next) => {
    let newBusinessContact = BC({
        'name':req.body.contactname,
        'number':req.body.mobilenumber,
        'email':req.body.contactemail
    });
    BC.create(newBusinessContact,(err,BC) => {
        if(err) 
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            res.redirect('/businessContactList');
        }
    });
};

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    BC.findById(id,(err,BCtoEdit) => {
        if(err) 
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            console.log(BCtoEdit);
            res.render('businesscontact/edit' , {
                title:'Edit Business Contact ', 
                businessContact: BCtoEdit,
                displayName:req.user?req.user.displayName:""
            });
        }
    });
};

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    let updatedBusinessContact = BC({
        '_id':id,
        'name':req.body.contactname,
        'number':req.body.mobilenumber,
        'email':req.body.contactemail
    });

    BC.updateOne({_id:id},updatedBusinessContact,(err) => {
        if(err) 
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/businessContactList');
        }
    });
};

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    BC.remove({_id:id},(err) => {
        if(err) 
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/businessContactList');
        }
    });
};