const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:password@127.0.0.1:3306/instagram');

sequelize.authenticate().then(() => {
  console.log('Connection established');
}).catch (err => {
  console.error('Unable to connect: ', err);
});

const Users = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

const Posts = sequelize.define('posts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user: {
    type: Sequelize.TEXT
  },
  caption: {
    type: Sequelize.STRING
  },
  imageSrc: {
    type: Sequelize.STRING
  }
});

const Comments = sequelize.define('comments', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user: {
    type: Sequelize.STRING
  },
  postID: {
    type: Sequelize.INTEGER
  },
  text: {
    type: Sequelize.STRING
  }
});

Users.sync();
Posts.sync();
Comments.sync();

exports.register = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  Users.findOne({
    where: {username: username}
  }).then(users => {
    if (users == null) {
      Users.create({
        username: username,
        password: password
      });
      res.redirect('/login');
    }
    else {
      res.send({
        "code":204,
        "fail":"Usename already exists"
      });
    }
  });
};

exports.login = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  Users.findOne({
    where: {username: username}
  }).then(users => {
    if (users == null) {
      //Represents if username not found
      res.send({
        "code":204,
        "fail":"Usename address not found"
      });
    }
    else if (password == users.password){
      //Represents a sucessfull login
      req.session.username = users.username;
      req.session.userid = users.id;
      console.log('User ' + req.session.username + ' logged in, id:' + req.session.userid);
      res.redirect('/home');
    }
    else {
      //Represents matching username but incorrect password
      res.send({
        "code":204,
        "fail":"Username and password does not match"
      });
    }
  });
};

exports.post = function (req, res) {
  var caption = req.body.post;
  var imageUrl = req.body.source;
  Posts.create({
    user: req.session.username,
    caption: caption,
    imageSrc: imageUrl
  });
  res.redirect('/home');
};

exports.getPosts = function (req, res) {
  Posts.findAll().then(posts => {
      res.render('home.ejs', { data: posts});
    });
};

exports.comment = function (req, res) {
  var text = req.body.comment;
  Comments.create({
    user: req.session.username,
    postID:
    text: text
  })
};
