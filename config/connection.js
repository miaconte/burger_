var mysql = require("mysql");
var connection;


if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Set up our connection information
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Oldmillrd7!!",
    database: "burger_db"
  });
};
// Connect to the database
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;






