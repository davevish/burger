var mysql = require("mysql");

var connection;

if(process.end.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "testing123",
        database: "burgers_db"
    });
}

module.exports = connection;
