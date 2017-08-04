var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "bamazonDB"
});
connection.connect(function(err) {
  if (err) throw err;
  showDataBase();
});

function showDataBase() { //Distplays the items for sale.
	connection.query("SELECT * FROM products", function(err, data) {
    	if (err) throw err;
    	var itemArray = [];
        for (var i = 0; i < data.length; i++) {
            itemArray.push(data[i].item_id, data[i].product_name, data[i].department_name, data[i].price, data[i].stock_quantity);
        }
      	console.log(itemArray);
    });
};

function userPrompt() { //asks the customer for an id number for the desired item and a quantity to purchase.

};

function checkQuantity() {	//Checkes if there are enough of the item requested in stock to fulfill the customer order. Alerts the user if there is insufficient quantities.

};

function fulfillOrder() { //Updates the database to reflect the removal of the customer order and gives a total cost for the order.

};