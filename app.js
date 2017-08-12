var express = require('express');
var app = express();
var ejs = require('ejs');
var morgan = require('morgan');


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/views'));
app.use(morgan('dev'));


app.get('/', function(req, res){
  res.render('pages/00-index.ejs');
});

app.get('/udw', function(req, res){
  res.render('pages/01-uwd.ejs');
});

app.get('/end', function(req, res){
  res.render('pages/02-end.ejs');
});

app.get('/pdr', function(req, res){
  res.render('pages/03-pdr.ejs');
});





app.listen(3000, function(err){
  if(err){ throw err; }
  console.log("Server Up & Running.....");
});
