const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testapp1");
const userSchema = mongoose.Schema({
    Imageurl: String,
    Email: String,
    Name: String
})
module.exports= mongoose.model('user',userSchema);