var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connection Made");
    available();
})

function available() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i=0; i<res.length; i++){
            console.log("Item: " + res[i].item_id + " - " + res[i].product_name + " - " + res[i].department_name + " - " + res[i].price + " - " + res[i].stock_quantity);
    }
    promptCustomer(res);
    })
}

function promptCustomer(res) {
    inquirer.prompt([{
        tyoe: "input",
        name: "choice",
        message: "What can I get for you? (Enter Q to Quit)"
    }]).then(function(answer) {
        var correct = false;
        if(answer.choice.toUpperCase() == "Q"){
            process.exit();
        }
        for (var i = 0; i < res.length; i++) {
            if(res[i].product_name == answer.choice) {    
                correct = true;
                var product = answer.choice;
                var id=i;
                inquirer.prompt({
                    type: "input",
                    name: "quantity",
                    message: "How many?",
                    validate: function(value) {
                        if(isNaN(value) == false) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }).then(function(answer) {
                    if((res[id].stock_quantity - answer.quantity) >0) {
                        connection.query("UPDATE products SET stock_quantity='" + (res[id].stock_quantity - answer.quantity) + "' WHERE product_name='" + product + "'", function(err, res2){
                            console.log("Congratulations on your purchase!");
                            promptCustomer(res);
                        })
                    } else {
                        console.log("Please try again!");
                        promptCustomer(res);
                    }
                })
            }
        }
        if (i == res.length && correct == false){
            console.log("Please try again!");
            promptCustomer(res);
        }
    })
}