const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// routes 
router.get('/', async (req,res) => {
    try {
        const home = await Post.find();
        res.json(home);
    } catch (err) {
        res.json({ message: err});
    }
});

router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPost = await post.save();
        console.log(savedPost);
        res.json(savedPost);
    } catch (err) {
        res.json({message: err });
    }
});
// get back specific post

router.get('/:postID', async (req, res) => {
    try {
    const home = await Post.findById(req.params.postID);
    res.json(home);
    }catch(err){
        res.json({message: err});
    }
});

// Delete Post
router.delete('/:postID', async (req, res) => {
    try {
    const removePost = await Post.remove({_id: req.params.postID});
    res.json(removePost);
    }catch(err){
        res.json({message: err})
    }
});

//update post
router.patch('/:postID', async (req, res) => {
    try {
    const updatePost = await Post.updateOne(
        {_id: req.params.postID}, 
        {$set: {title: req.body.title}}
        );
    res.json(updatePost);
    }catch(err){
        res.json({message: err})
    }
});
module.exports = router; 