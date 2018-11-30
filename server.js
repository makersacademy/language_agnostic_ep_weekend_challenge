const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const posts = require('./routes/api/posts');

app.use(bodyParser.json());

// fixing error - look into cors
app.use(function (req, res, next) {

   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

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

app.listen(3111, () => {
  console.log('listening on 3111')
})

// Connect to mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected ......'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


module.exports = app
