var connection = require('./connection.js');

function questionmarks(num) {
	var arr = [];
	for (var i=0; i<num; i++){
		arr.push("?");
	}
	return arr.toString();
}

function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + '=' + ob[key]);
	}
	return arr.toString();
}

var orm = {
	all: function(table, cb){
		var queryString = 'SELECT * FROM ' + table + ';';
		connection.query(queryString, function(err, result){
			if (err) throw err;
			cb(result);
		});
	},
	create: function (table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "Values (";
		queryString += questionmarks(vals.length);
		queryString += " )";

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	update: function (table, objColVals, condition, cb) {
		var queryString = 'UPDATE ' + table;

		queryString = queryString + " SET ";
		queryString = queryString + objToSql(objColVals);
		queryString = queryString + " WHERE ";
		queryString = queryString + condition;

		console.log(queryString);

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;