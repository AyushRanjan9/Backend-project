# Backend-project
-- Create the database if it does not exist
CREATE DATABASE IF NOT EXISTS products_database;

-- Switch to the newly created database
USE products_database;

-- Create the products table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);

-- Insert sample data into the products table
INSERT INTO products (name, description, price) VALUES
('Product1', 'Description for Product 1', 19.99),
('Product2', 'Description for Product 2', 29.99),
('Product3', 'Description for Product 3', 39.99);

select* from products;
