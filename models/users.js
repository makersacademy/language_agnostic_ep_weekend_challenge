const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creat Schema
const PostSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  realname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
  
});

module.exports = Users = mongoose.model('users', PostSchema);
