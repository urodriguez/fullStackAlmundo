var express = require("express"),
    app = express(),
	path = require('path'),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require("mongoose");


app.use(express.static('public'));

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);
app.use(express.static(__dirname + '/public'));


// Index route
var router = express.Router();


router.get('/hoteles', function(req, res) {
  res.sendFile(path.join(__dirname, './public', 'hoteles.html'));
});

app.use(router);

// API routes

// Connection to DB
mongoose.connect('mongodb://localhost/almundo', function(err, res) {  //se conecta a la base de datos
  if(err) {
    console.log('ERROR: al conectarse con la Base de datos!' + err);
  } else {
	console.log("Conectado a la Base de datos ¡OK!");
  }

  // Start server
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});
