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
// const AWS = require('aws-sdk');
//
//
// // configure the keys for accessing AWS
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
// });

// const S3_BUCKET = process.env.bucket

// var aws = require('aws-sdk');

// aws.config.update({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
// });

// aws.config.update({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
// });


// app.post('/upload', (req, res, next) => {
//   console.log(req)
//   let uploadFile = req.files.file
//   const fileName = req.files.file.name
//   uploadFile.mv(
//     `${__dirname}/public/files/${fileName}`,
//     function (err) {
//       if (err) {
//         return res.status(500).send(err)
//       }
//
//       res.json({
//         file: `public/${req.files.file.name}`,
//       })
//     },
//   )
// })

// configure AWS to work with promises
// AWS.config.setPromisesDependency(bluebird);
//
// // create S3 instance
// const s3 = new AWS.S3();
//
// // abstracts function to upload a file returning a promise
// const uploadFile = (buffer, name, type) => {
//   const params = {
//     ACL: 'public-read',
//     Body: buffer,
//     Bucket: S3_BUCKET ,
//     ContentType: type.mime,
//     Key: `${name}.${type.ext}`
//   };
//   return s3.upload(params).promise();
// };
//
// // Define POST route
// app.post('/test-upload', (request, response) => {
//   const form = new multiparty.Form();
//     form.parse(request, async (error, fields, files) => {
//       if (error) throw new Error(error);
//       try {
//         const path = files.file[0].path;
//         const buffer = fs.readFileSync(path);
//         const type = fileType(buffer);
//         const timestamp = Date.now().toString();
//         const fileName = `bucketFolder/${timestamp}-lg`;
//         const data = await uploadFile(buffer, fileName, type);
//         return response.status(200).send(data);
//       } catch (error) {
//         return response.status(400).send(error);
//       }
//     });
// });

// aws.config.update({
//   region: 'us-east-1', // Put your aws region here
//   accessKeyId: process.env.AWSAccessKeyId,
//   secretAccessKey: process.env.AWSSecretKey
// })
//
// const S3_BUCKET = process.env.bucket
// // Now lets export this function so we can call it from somewhere else
// exports.sign_s3 = (req,res) => {
//   const s3 = new aws.S3();  // Create a new instance of S3
//   const fileName = req.body.fileName;
//   const fileType = req.body.fileType;
// // Set up the payload of what we are sending to the S3 api
//   const s3Params = {
//     Bucket: S3_BUCKET,
//     Key: fileName,
//     Expires: 500,
//     ContentType: fileType,
//     ACL: 'public-read'
//   };
// // Make a request to the S3 API to get a signed URL which we can use to upload our file
// s3.getSignedUrl('putObject', s3Params, (err, data) => {
//     if(err){
//       console.log(err);
//       res.json({success: false, error: err})
//     }
//     // Data payload of what we are sending back, the url of the signedRequest and a URL where we can access the content after its saved.
// const returnData = {
//       signedRequest: data,
//       url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
//     };
//     // Send it all back
//     res.json({success:true, data:{returnData}});
//   });
// }

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

// const port = process.env.PORT || 5000;
//
// app.listen(port, () => console.log(`Server started on port ${port}`));


module.exports = app
