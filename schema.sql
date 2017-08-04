Bamazon Customer =============================================

DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
	item_id INT(10) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30),
    department_name VARCHAR(30),
    price DECIMAL (9, 2) NOT NULL,
    stock_quantity INT(10),
    PRIMARY KEY (item_id)
);

SELECT * FROM products;

=== === === === === === === === === === === === === === === ===

