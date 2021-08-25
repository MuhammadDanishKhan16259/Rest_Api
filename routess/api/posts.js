const express = require('express');
const router = express.Router();
//posts Model
const Posts = require('../../models/Posts');

// @routes GET api/posts
// @desc GET ALL post
router.get ('/', async(req, res) =>{
    try{
        const posts = await Posts.find();
        if(!posts) throw Error('No ITEMS');
        res.status(200).json(posts);
        // res.send(posts);

    } catch(err)
    {
        res.status(400).json({msg: err})
    }

});

// @routes GET api/posts/:id
// @desc GET AN Specfic ID post
router.get('/:id', async(req, res) =>{
    try{
        const post = await Posts.findById(req.params.id);
        if(!post) throw Error('No ITEMS');
        res.status(200).json(post);
        // res.send(posts);

    } catch(err)
    {
        res.status(400).json({msg: err})
    }

});


// @routes POST api/posts
// @desc Create An post 
router.post('/', async (req,res) =>{
    // res.send(`Let's create Post!`);
    // console.log(req.body);
    const newPost = new Posts(req.body);
    try{
        const post = await newPost.save();
        if(!post) throw Error('Something went wrong while saving the post');

        res.status(200).json(post);
    } catch(err)
    {
        res.status(400).json({msg: err})
    }
});


// @routes DELETE api/posts/:id
// @desc DELETE AN post
router.delete('/:id', async(req, res) =>{
    try{
        const posts = await Posts.findByIdAndDelete(req.params.id)
        if(!posts) throw Error('No POST FOUND!');
        res.status(200).json({ Success: true });
        // res.send(posts);

    } catch(err)
    {
        res.status(400).json({msg: err})
    }

});


// @routes UPDATE api/posts/:id
// @desc UPDATE AN post
router.patch('/:id', async(req, res) =>{
    try{
        const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
        if(!post) throw Error('Something went wrong while Updating Post');
      
        res.status(200).json({ Success: true });


    } catch(err)
    {
        res.status(400).json({msg: err})
    }

});

module.exports = router;