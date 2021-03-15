const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

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
    const product = new Product({
        product_id: req.body.product_id,
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_cost: req.body.product_cost
    });
    try{
        const newProduct = await product.save();
        res.json(newProduct);
        res.status(200);
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

