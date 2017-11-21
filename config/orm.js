var connection = require(connection.js);

connection.connect(function (err) {
    if(err){
        console.log("error, connection failed" + err.stack);
        return;
    };
    console.log("connected at" + connection.threadId);
});

var orm = {

    //selectAll()
    selectAll = function (cb) {
        connection.query("SELECT * FROM burgers", function (err, result) {
            if (err) throw err;
            cb(result);
        };
    }
    
    //insertOne()
    insertOne: function (burgerName, cb) {
        connection.query("INSERT INTO burgers SET", {
            burgerName: burgerName,
            devoured: false
        }, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
    
    //updateOne()
    connection.query("UPDATE burgers SET ? WHERE ?", [{devoured: true}], function (err, result) {
        if (err) throw err;
        cb(result);
    });

}

module.exports = orm;