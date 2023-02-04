let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');

// connect to our books model
let Book = require('../models/books')

// Get route for the book list page - Read operation
router.get('/', (req, res, next) => {
    Book.find((err, bookList)=>{
        if(err){
            return console.error(err)
        } else {
            console.log(BookList);
            res.render('book', {title:'Book List', BookList: bookList});
        }
    })
})

module.exports=router;