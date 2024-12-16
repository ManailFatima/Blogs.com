// const express = require ('express');
// const Blog = require('../model/blogs');

// const blogIndex = (req,res) => {
//     blog.find().sort({createdAt: -1})
//     .then((result)=>{
//         res.render('index', { title: 'All BLogs' , arr: result})
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }

// const blogCreateGet = (req,res) => {
//     blog.find()
//     .then((result) => {
//         res.render('index' , {title:'Blogs', arr:result})
//     })
//     .catch((err) => console.log(err));

//     }

// const blogCreatePost = (req, res) => {

//     const blog = new Blog(req.body);
    
//     blog.save()
//     .then((result) => {
//         res.redirect('/blogs');
//     }) 
//     .catch((err) => console.log(err))
// }

// const blogDetails = (req, res) => {
//     const id = req.params.id;
//     blog.findById(id)
//     .then((result) => {
//         res.render('details' , {title: 'Details page' , blog: result})

//     })
// }

// const blogUpdate = async(req,res) => {    
//     try {
//         const id =req.params.id;
//     const updatedBlog = await blog.findByIdAndUpdate( id, {
//          title : req.body.title,
//          snippet : req.body.snippet, 
//          author : req.body.author,
//          body : req.body.body
//     },
//         {new: true});
//         if(!updatedBlog){
//             return res.status(404).json({message: 'Blog post not found!'})
//         }
//         res.json(updatedBlog);
//     }
//     catch(err){
//         res.status(500).json({message: err.message});
//     }}

// const blogDelete = (req,res)=>{
//     const id = req.params.id;
//     blog.findByIdAndDelete(id)
//     .then((result) => {
//         res.json({redirect : '/blogs'})
//     })
//     .catch((err) => console.log(err))
// }

// module.exports = {
//     blogIndex,
//     blogDelete,
//     blogUpdate,
//     blogCreatePost,
//     blogCreateGet,
//     blogDetails
// }


const express = require('express');
const Blog = require('../model/blogs');  // Ensure correct import

const blogIndex = (req, res) => {
    Blog.find().sort({ createdAt: -1 })  // Correct usage with 'Blog'
        .then((result) => {
            res.render('index', { title: 'All Blogs', arr: result });
        })
        .catch((err) => {
            console.log(err);
        });
};

const blogCreateGet = (req, res) => {
    Blog.find()  // Correct usage with 'Blog'
        .then((result) => {
            res.render('index', { title: 'Blogs', arr: result });
        })
        .catch((err) => console.log(err));
};

const blogCreatePost = (req, res) => {
    const blog = new Blog(req.body);  // Correct usage with 'Blog'

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => console.log(err));
};

const blogDetails = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)  // Correct usage with 'Blog'
        .then((result) => {
            res.render('details', { title: 'Details page', blog: result });
        })
        .catch((err) => console.log(err));
};

const blogUpdate = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedBlog = await Blog.findByIdAndUpdate(id, {  // Correct usage with 'Blog'
            title: req.body.title,
            snippet: req.body.snippet,
            author: req.body.author,
            body: req.body.body
        }, { new: true });

        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog post not found!' });
        }

        res.json(updatedBlog);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const blogDelete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)  // Correct usage with 'Blog'
        .then((result) => {
            res.json({ redirect: '/blogs' });
        })
        .catch((err) => console.log(err));
};

module.exports = {
    blogIndex,
    blogDelete,
    blogUpdate,
    blogCreatePost,
    blogCreateGet,
    blogDetails
};
