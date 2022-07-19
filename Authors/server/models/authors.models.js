const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Authors Name is required!!!!"],
        minlength: [3, "Name must be 3 Characters"],
    }
}, {timestamps: true} );

const Authors = mongoose.model('authors', AuthorSchema);

module.exports = Authors;
