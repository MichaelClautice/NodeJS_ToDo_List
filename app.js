// require modules
var express = require("express");

// create the express app
var app = express();
// app is now an express app!

// set the template-view engine for html-ejs files
app.set('view engine', 'ejs');

// express middleware express.static for static files
// styles.css is the only static file for now
// static is mapped to ALL static files in public folder
app.use(express.static('./public'));

// express app running & listening for port 3000
app.listen(3000);

// console.log test for console msg
console.log('We are listening to port 3000');



