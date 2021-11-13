const mongoose = require('mongoose');

//init schema
const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        trime: true,
        require: true
    },
    author:{
        type: String,
        trime: true,
        require: true
    },
    description:{
        type: String,
        trim: true,
        require: true
    }
});

//init

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
