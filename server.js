var express = require('express');
var app = express();

// add cross site scripting
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/', function(req, res){
  res.send('<div id="message">Instagram</div>');
});

app.listen(3111, () => {
  console.log('listening on 3111')
})
