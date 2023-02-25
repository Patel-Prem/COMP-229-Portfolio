let mongoose = require('mongoose');
let businessContact = mongoose.Schema({
    name: String,
    number: Number,
    email: String
},
{
    collection: "business_contacts"
});
module.exports = mongoose.model('business_contact',businessContact);