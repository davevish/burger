var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
		res.redirect("/burgers");
});


router.get("/burgers", function (req, res) {
	burger.all(function (burgerInfo) {
		res.render("index", {burgerInfo: burgerInfo});
	});
});

router.post("/burgers/create", function(req, res) {
	burger.create(req.body.burgerName, function(result) {console,
		console.log(result);
		res.redirect("/");
	});
});

router.put("/burgers/update", function(req, res) {
	burger.update(req.body.burger_id, function(result) {
		console.log(result);
		res.redirect("/");
	});
});

// Export routes for server.js to use.
module.exports = router;