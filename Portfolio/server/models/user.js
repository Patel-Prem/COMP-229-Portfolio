// require modules for user model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
let user = mongoose.Schema({
    username:
    {
        type:String,
        default:'',
        trim:true,
        required:'Username is Required'
    },
    // password:
    // {
    //     type:String,
    //     default:'',
    //     trim:true,
    //     required:'Password is Required'
    // },
    email:
    {
        type:String,
        default:'',
        trim:true,
        required:'Email is Required'
    },
    displayName:
    {
        type:String,
        default:'',
        trim:true,
        required:'Display Name is Required'
    },
    created:
    {
        type:Date,
        default:Date.now
    },
    update:
    {
        type:Date,
        default:Date.now
    }
},
{
    collection:"users"
});

// configure option for user model
let option = ({ missingPasswordError: 'wrong/Missing Password' });
user.plugin(passportLocalMongoose, option);
module.exports.User = mongoose.model('user', user);