const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Message model
const Item = require('../../models/users');

//  @route    GET api/posts
// @describe  GET All posts
// @access    Public

router.get('/aaa',(req, res) =>{
  "this is a test"
})
router.get('/', (req, res) => {
  Users.find()
    .sort({_id: -1})
    .then(users => res.json(users))
});

router.post('/login',(req,res)=>{
  console.log(req.body.username)
  Users.find({ username: req.body.username })
  // Users.find()
  .sort({_id:-1})
  // .then(console.log(users => res.json(users)))
  // .then(console.log(results))
  .then(users => res.json(users))
// console.log(users)
// .then(console.log(res.json(users)))
}

)

//  @route    POST api/posts
// @describe  Create a post
// @access    Public
router.post('/', (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, 10);
  const newItem = new Item({
    username: req.body.username,
    password: hash,
    realname: req.body.realname,
    email: req.body.email
  });

  newItem.save().then(user => res.json(user));
});

module.exports = router

//  @route    DELETE api/messages/:id
// @describe  Delete a message
// @access    Public
router.delete('/:id', (req, res) => {
  Users.findById(req.params.id).then(user =>
    user.remove().then(() => res.json({ success: true }))
  )
  .catch(err => res.status(404).json({ success: false }));
});
