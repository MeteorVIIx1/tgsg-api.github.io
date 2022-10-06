const dboperations = require('./DatabaseOperations.js');
require('dotenv').config();


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', router);


//-----------------------------------------------------------

router.use((request,response,next) => {
   response.header('Access-Control-Allow-Origin', '*');
   response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   response.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
   console.log('middleware');
   next();
})


router.route('/checklogin').post((request,response) => {

   let check = {...request.body}

   dboperations.checkLogin(check)
      .then(result => { response.status(201).json(result); })
      console.log(`IP : ${request.ip} | POST | /checklogin`);
})


router.route('/visit/calendar').post((request,response) => {

   let check = {...request.body}

   dboperations.visitCalendar(check)
      .then(result => { response.status(201).json(result); })
      console.log(`IP : ${request.ip} | POST | /visit/calendar`);
})

//-----------------------------------------------------------

var port = process.env.PORT || 8080;
app.listen(port, () => {
   console.log('Order API is runnning at port: '+ port);
});