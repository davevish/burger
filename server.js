var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view-engine", "handlebars");

var routes = require("./controllers/burger_controllers.js");

app.use("/", routes);

var port = process.env.port ||8000;
app.listen(port);