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
	var query = "SELECT item_id,product_name,department_name,price FROM products";
	connection.query(query, function(err, data) {
    	    
        for (var i = 0; i < data.length; i++) {
            
            console.log("---------------------#" + data[i].item_id + "---------------------");
			console.log("Product Name: " + data[i].product_name + "\n" + "Catagory: " + data[i].department_name + "\n" + "Price: $" + data[i].price);
		};
		
		if (err) throw err;

		else {
			userPrompt();
		};
      	
    });  
};

function userPrompt() { //asks the customer for an id number for the desired item and a quantity to purchase.
	inquirer
	    .prompt([
	      	{
	        	name: "itemChoice",
	        	type: "input",
	        	message: "Enter the number of product you would like to perchase. ",
	        	validate: function(value) {
	         	
	         	if (isNaN(value) === false) {
	            	return true;
	         	}
	          	
	          	return false;
	        	}
	      	},
	      	{
	        	name: "itemQuantity",
	        	type: "input",
	        	message: "How many of these would you like to purchase? ",
	        	validate: function(value) {
	          	
	          		if (isNaN(value) === false) {
	            		return true;
	          		}
	        	
	        		return false;
	      		  	}
	      	}
	    ])
	    .then(function(answer) {
	      	var query = "SELECT item_id,product_name,department_name,price FROM products";
	      	connection.query(query, [answer.itemChoice, answer.itemQuantity], function(err, res) {
	        	for (var i = 0; i < res.length; i++) {
	        		console.log("You have selected: ");
	          		console.log("Product Name: " + data[i].product_name + "\n" + "Catagory: " + data[i].department_name + "\n" + "Price: $" + data[i].price);
				};
			});
	    });
};
// function checkQuantity() {	//Checkes if there are enough of the item requested in stock to fulfill the customer order. Alerts the user if there is insufficient quantities.

// };

// function fulfillOrder() { //Updates the database to reflect the removal of the customer order and gives a total cost for the order.

// };