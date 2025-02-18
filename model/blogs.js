const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title : {
        type : String,
        required: true
     },
    snippet: {
        type: String,
        required: true
    },author:{
        type:String,
        required: false
    },
    body:{
        type: String,
        required: true
    }},
    {timestamps: true}
    
)
const Blog = mongoose.model('SampleBlog', blogSchema);
module.exports = Blog;