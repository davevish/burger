
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var port = process.env.port ||8000;
var app = express();
var exphbs = require("express-handlebars");

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));
//var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view-engine", "handlebars");

var routes = require("./controllers/burger_controllers.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

//app.get('/', function (req, res) {
//	res.render('index');
//});

app.listen(port, function () {
	console.log("Listening on port:%s", port);
});



// var express = require('express');
// var exphbs  = require('express-handlebars');
//
// var app = express();
//
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');
//
// app.get('/', function (req, res) {
// 	res.render('index');
// });
//
// app.listen(3000);
