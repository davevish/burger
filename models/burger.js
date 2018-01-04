var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

    create: function (name, cb) {
        orm.create("burgers", [
            "burgerName", "eaten"
        ], [
        	name, false
		], cb);
    },

    update: function (burgerId, cb) {
        var condition = "burgerId=" + burgerId;
    	orm.update("burgers", {
    		eaten: true
		}, condition, cb);
    }
};

module.exports = burger;