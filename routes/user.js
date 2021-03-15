const express = require('express');
const router = express.Router();
const User = require('../models/User');

// get all users

router.get('/', async (req,res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({message: err});
    }
});

// post a new user to the database

router.post('/', async (req,res) => {
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_number: req.body.phone_number,
        product_id: req.body.product_id
    });
    try{
        const registeredUser = await user.save();
        res.status(200).json(registeredUser);
    } catch (err) {
        res.status(400).json({message: err});
    }
});

// get back specific User

router.get('/:product_id', async (req, res) => {
    try {
    const user = await User.findById(req.params.product_id);
    res.json(user);
    res.status(200);
    }catch(err){
        res.status(400).json({message: err});
    }
});

// Delete User

router.delete('/:product_id', async (req, res) => {
    try {
    const removePost = await User.remove({product_id: req.params.product_id});
    res.json(removePost);
    }catch(err){
        res.status(400).json({message: err});
    }
});

//Update User's information

router.patch('/:product_id', async (req, res) => {
    try {
    const updatePost = await Post.updateOne(
        {_id: req.params.postID}, 
        {$set: {title: req.body.title}}
        );
    res.status(200).json(updatePost);
    }catch(err){
        res.status(400).json({message: err});
    }
});

module.exports = router; 
