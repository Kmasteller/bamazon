CREATE database bamazon;
USE bamazon;
CREATE TABLE products (
  item_id INTEGER AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock_quantity INTEGER (5) NULL,
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ghost in the Shell Movie", "Electronics", 19.99, 500),
    ("55' Flatscreen TV", "Electronics", 599.99, 125),
    ("Whole Milk", "Grocery", 2.49, 1000),
    ("G'ranny's White Bread", "Grocery", 1.99, 1250),
    ("V8 Revving Shampoo", "Pharmacy", 5.99, 350),
    ("Cat o' Nine Tails", "Recreation", 14.99, 25),
    ("Lawn Darts", "Recreation", 10.49, 50),
    ("Elephant Lotion", "Pharmacy", 9.99, 99),
    ("PODi Teleporter", "Electronics", 799.99, 40),
    ("Yellowstone Pencils", "Office", .59, 8721),
    ("Nacho Grande Energy Drink", "grocery", 1.99, 720);

SELECT * FROM bamazon.products;