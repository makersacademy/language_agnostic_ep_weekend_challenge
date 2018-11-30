const express = require('express');
const router = express.Router();

// Message model
const Item = require('../../models/Post');

//  @route    GET api/posts
// @describe  GET All posts
// @access    Public
router.get('/', (req, res) => {
  Post.find()
    .sort({_id: -1})
    .then(posts => res.json(posts))
});

//  @route    POST api/posts
// @describe  Create a post
// @access    Public
router.post('/', (req, res) => {
  const newItem = new Item({
    image: req.body.image,
    caption: req.body.caption,
    user: req.body.user
  });

  newItem.save().then(post => res.json(post));
});

module.exports = router

//  @route    DELETE api/messages/:id
// @describe  Delete a message
// @access    Public
router.delete('/:id', (req, res) => {
  Post.findById(req.params.id).then(post =>
    post.remove().then(() => res.json({ success: true }))
  )
  .catch(err => res.status(404).json({ success: false }));
});
