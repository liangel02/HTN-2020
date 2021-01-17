const express = require('express'); //import express, creates server routes
const bodyParser = require('body-parser'); //import body parser, gets data from request's body
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : "asdfghjkl;'",
  database : 'userinfo'
});

// Starting our app.
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/users', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
        if (err) {
            console.error(err);
        }
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM information', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/users so you can see the data.');
});

