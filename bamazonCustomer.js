var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 9090,
    // Your username
    user: "root",
    // Your password
    password: "root",
    database: "bamazon"
  });