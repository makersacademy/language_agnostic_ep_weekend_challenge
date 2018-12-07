const express = require('express');
const app = express();
const session  = require('express-session');
const port = 8080;
const bodyParser = require('body-parser');
const db = require('./database.js');

app.use(session({
  secret: 'password',
  resave: false,
  saveUninitialized: false
}));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => res.sendFile(__dirname + '/views/login.html'));
app.get('/home', (req, res) => {
  if (req.session.userid == null) {
    res.sendFile(__dirname + '/views/login.html');
  }
  else {
    db.getPosts(req, res);
  }
});
app.get('/register', (req, res) => res.sendFile(__dirname + '/views/register.html'));
app.get('/login', (req, res) => res.sendFile(__dirname + '/views/login.html'));
app.get('/post', (req, res) => {
  if (req.session.userid == null) {
    res.sendFile(__dirname + '/views/login.html');
  }
  else {
    res.sendFile(__dirname + '/views/post.html');
  }
});
app.get('/logout', (req, res) => {
  req.session.userid = null;
  req.session.username = null;
  res.redirect('/login');
});

app.post('/register', db.register);
app.post('/login', db.login);
app.post('/post', db.post);


app.listen(port, () => console.log(`The app is running on port: ${port}! Make sure to open it in your browser!`));
