const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// var aws = require('aws-sdk');
require('dotenv').config(); // Configure dotenv to load in the .env file
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// const express = require('express');
const multer = require('multer');
const cors = require('cors');

// const app = express();

app.use(express.static('public'))

var storage = multer.diskStorage({
destination: (req, file, cb) => {
cb(null, 'public/images/uploads')
},
filename: (req, file, cb) => {
cb(null, Date.now() + '-' + file.originalname)
}
});
const upload = multer({ storage })

app.use(cors());

app.post('/upload', upload.single('image'), (req, res) => {
if (req.file)
res.json({
imageUrl: `images/uploads/${req.file.filename}`
});
else
res.status("409").json("No Files to Upload.");
});


const posts = require('./routes/api/posts');
const users = require('./routes/api/users');

app.use(bodyParser.json());

// fixing error - look into cors
app.use(function (req, res, next) {

   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);

   // Pass to next layer of middleware
   next();
 });

// DB config
const db = require('./config/keys').mongoURI;

app.get('/', function(req, res){
  res.send('<div id="message">Instagram</div>');
});

app.listen(5001, () => {
  console.log('listening on 5001')
})

// Connect to mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected ......'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/images', posts);
app.use('/api/users', users);

module.exports = app
