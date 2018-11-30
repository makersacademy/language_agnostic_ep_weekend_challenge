const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var date = new Date();

// Creat Schema
const PostSchema = new Schema({
  image: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: function formatDate() {
      var d = new Date()
      day = d.getDate()
      month = d.getMonth() + 1
      year = d.getFullYear()
      hour = ('0' + d.getHours()).slice(-2)
      minute = ('0' + d.getMinutes()).slice(-2)
      second = ('0' + d.getSeconds()).slice(-2)

      return `${day}/${month}/${year} ${hour}:${minute}:${second}`
    }
  }
});

module.exports = Post = mongoose.model('post', PostSchema);
