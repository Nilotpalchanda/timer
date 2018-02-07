// call mode module
var express = require ('express');
var app = express();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var path = require ('path');

var routes = require('./route/index.js');
// end


app.set('view engine','ejs');




// ================================================================
// setup routes
// ================================================================
routes(app);



// call server
app.listen(8080, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port on 8080");
    }
});
//end