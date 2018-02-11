// call mode module
var express = require ('express');
var app = express();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var path = require ('path');


var routes = require('./route/index.js');
// end

var port = process.env.PORT || 3000;

app.set('view engine','ejs');

// add css and js

app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/js'));


app.use(express.static(__dirname + '/public/images'));
app.use(express.static(__dirname + '/public/images/about'));
app.use(express.static(__dirname + '/public/images/author'));
app.use(express.static(__dirname + '/public/images/blog'));
app.use(express.static(__dirname + '/public/images/clients'));
app.use(express.static(__dirname + '/public/images/icons'));
app.use(express.static(__dirname + '/public/images/portfolio'));
app.use(express.static(__dirname + '/public/images/team'));

app.use(express.static(__dirname + '/public/plugins/bootstrap'));
app.use(express.static(__dirname + '/public/plugins/ionicons'));
app.use(express.static(__dirname + '/public/plugins/animate-css'));
app.use(express.static(__dirname + '/public/plugins/owl-carousel'));


app.use(express.static(__dirname + '/public/plugins/facncybox'));
app.use(express.static(__dirname + '/public/plugins/slider'));
app.use(express.static(__dirname + '/public/plugins/animate-css'));
app.use(express.static(__dirname + '/public/plugins/owl-carousel'));


app.use(express.static(__dirname + '/public/plugins/jQurey'));
app.use(express.static(__dirname + '/public/plugins/form-validation'));
app.use(express.static(__dirname + '/public/plugins/wow-js'));
app.use(express.static(__dirname + '/public/plugins/slider'));
app.use(express.static(__dirname + '/public/plugins/owl-carousel'));

// ================================================================
// setup routes
// ================================================================
routes(app);

// app.locals.points = "99.89";

app.locals.post = require('./post.json');


// time and date



app.listen(port);


// call server
// app.listen(8080, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Listening on port on 8080");
//     }
// });
//end