
const express = require('express');

const routes = express.Router();

const Post = require('../models/Post');

//routes
// routes.get('/',(req,res)=>{
//     res.send("hello we are on post");
// });

// routes.post('/', (req,res)=>{
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description,

//     });

//     post.save().then(data => {
//         req.json(data);
//     }).catch(err => {
//         req.json({message: err});
//     });
// });



//using async

//getting back all the posted data with get
routes.get('/', async(req,res)=>{
    try{
        const posts = await Post.find();  //Post.find().limit can be used if we want to limit the data returned
        res.json(posts);

    }catch(err){
        res.json({message: err});
    }
})

//posting the post
routes.post('/', async(req,res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description,

    });

    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});

//specific post
router.get('/:postID',async (req,res)=>{
    //console.log(req.params.postID);
    //Post.findById(req.params.postID);

    try{
        const post = await Post.findById(req.params.postID);
        res.json(post);
    }catch(err){
        res.json({message : err});
    }
});


//delete a post
router.delete('/:postID',async (req,res)=>{
    try{
        const removedpost = await Post.remove({_id : req.params.postID});
        res.json(removedpost);
    } //this remove function comes back with a promise
    catch(err){
        res.json({message: err});
    }
});


//update a post
router.patch('/:postID', async (req,res)=>{
    try{
        const updatepost = await Post.updateOne({_id: req.params.postID},
                                                {$set : {title : req.body.title}}
        );
        res.json(updatepost);
    }catch(err){
        res.json({message: err});
    }
})



module.exports = routes;